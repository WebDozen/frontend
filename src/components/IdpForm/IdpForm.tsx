import { useEffect, useState } from "react";
import { Gap, Button, GenericWrapper, Divider } from "../ui-kit";
import style from "./IdpForm.module.scss";
import IdpFormPartOne from "./IdpFormPartOne/IdpFormPartOne";
import TaskForm from "./TaskForm/TaskForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
// import { getEmployeesListData } from "../../services/selectors";
import { patchIdpByID, postIdp } from "../../services/actions";
import { unwrapResult } from "@reduxjs/toolkit";

// const fakeProps = {
//   mentor: "Petr Mihalich",
//   name: "Pochitat",
//   description: "otkrit knigu",
//   deadline: "2024-01-31T17:57:20.770Z",
//   tasks: [
//     {
//       type: "Alfa - lab",
//       name: "Privet",
//       description: "Chto to na umnom",
//       source: "link to the...",
//     },
//   ],
// };

const IdpForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { list } = useAppSelector(getEmployeesListData);

  const location = useLocation();
  const { id, idp_id } = useParams();
  const { pathname } = location;
  const isAddIdpPage = pathname === `/employee/${id}/add_idp`;
  const isEditIdpPage = pathname === `/employee/${id}/edit_idp/${idp_id}`;
  const finishLink = isAddIdpPage
    ? `/employee/${id}/`
    : isEditIdpPage
      ? `/employee/${id}/idp/${idp_id}`
      : pathname;

  // initial state for idp / task
  interface IdpValue {
    mentor: string;
    name: string;
    description: string;
    deadline: string;
  }

  // const idpInitialState: IdpValue = {
  //   mentor: fakeProps.mentor,
  //   name: fakeProps.name,
  //   description: fakeProps.description,
  //   deadline: fakeProps.deadline,
  // };

  const idpInitialNull: IdpValue = {
    mentor: "",
    name: "",
    description: "",
    deadline: "",
  };

  // const initialTaskState: Array<{
  //   type: string;
  //   name: string;
  //   description: string;
  //   source: string;
  // }> = fakeProps.tasks;

  const initialTaskNull: Array<{
    name: string;
    description: string;
    type: string;
    source: string;
  }> = [];

  // states
  const [idpValue, setIdpValue] = useState(idpInitialNull);
  const [inputFields, setInputFields] = useState(initialTaskNull);
  const [idpButtonIsActive, setIdpButtonIsActive] = useState(false);
  const [taskSubmitButtonDisabled, setTaskSubmitButtonDisabled] =
    useState(true);

  useEffect(() => {
    const hasMentor = idpValue?.mentor !== ""; //true kogda zapolnen
    const firstTaskIsComplete =
      inputFields[0]?.description !== "" &&
      inputFields[0]?.name !== "" &&
      inputFields[0]?.source !== "" &&
      inputFields[0]?.type !== "" &&
      inputFields.length !== 0; //true kogda zapolnen

    setIdpButtonIsActive(hasMentor || firstTaskIsComplete);
  }, [idpValue, inputFields]);

  // tasks handlers
  const handleChange = (event: any, index: number) => {
    const { name, value } = event.target;
    let data: any = [...inputFields];
    data[index][name] = value;
    setInputFields(data);

    const taskFormisValid =
      data[inputFields.length - 1].name === "" ||
      data[inputFields.length - 1].description === "" ||
      data[inputFields.length - 1].type === "" ||
      data[inputFields.length - 1].source === "";

    setTaskSubmitButtonDisabled(taskFormisValid);
  };

  const addFields = () => {
    let newfield = { name: "", description: "", type: "", source: "" };
    setInputFields([...inputFields, newfield]);
    setTaskSubmitButtonDisabled(true);
  };

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
    setTaskSubmitButtonDisabled(false);
  };

  // idp submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let FinalObj = {};
    const { mentor, name, description, deadline } = idpValue;
    let date = new Date(deadline.split(".").reverse().join("-"));
    let deadlineISO = date.toISOString();
    FinalObj = {
      mentor,
      name,
      description,
      deadline: deadlineISO,
      tasks: inputFields,
    };
    console.log(FinalObj);
    try {
      let originalPromiseResult;
      if (isAddIdpPage) {
        const resultAction = await dispatch(
          postIdp({ employee_id: `${id}`, data: FinalObj }),
        );
        originalPromiseResult = unwrapResult(resultAction);
      }
      if (isEditIdpPage) {
        const resultAction = await dispatch(
          patchIdpByID({
            employee_id: `${id}`,
            idp_id: `${idp_id}`,
            data: FinalObj,
          }),
        );
        originalPromiseResult = unwrapResult(resultAction);
      }
      if (originalPromiseResult) {
        console.log(originalPromiseResult);
        navigate(finishLink);
      }
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  // idp validation in IdpFormPartOne

  return (
    <form>
      <IdpFormPartOne
        idpValue={idpValue}
        setIdpValue={setIdpValue}
        setTaskSubmitButtonDisabled={setTaskSubmitButtonDisabled}
      />
      {/* {где то тут надо поменять отступ на 32 после кнопок месяцев} */}
      {inputFields.map((input, index) => (
        <TaskForm
          taskProps={index}
          inputFields={inputFields}
          setInputFields={setInputFields}
          handleChange={(e: any) => handleChange(e, index)}
          removeFields={() => removeFields(index)}
          setTaskSubmitButtonDisabled={setTaskSubmitButtonDisabled}
          key={index}
        />
      ))}
      <Gap size="2xl" />
      <Button
        view="primary"
        size="xs"
        disabled={taskSubmitButtonDisabled}
        type="button"
        onClick={addFields}
      >
        {inputFields.length ? "Добавить еще задачу" : "Добавить задачу"}
      </Button>
      <Gap size="4xl" />
      <Divider
        className={
          inputFields.length ? style.dividerCustomLarge : style.dividerCustom
        }
      />
      <Gap size="2xl" />
      <GenericWrapper>
        <Button
          view="tertiary"
          size="m"
          className={style.mainButton}
          type="button"
        >
          Назад
        </Button>
        <Gap size="m" direction="horizontal" />
        <Button
          view="accent"
          size="m"
          disabled={!idpButtonIsActive}
          className={style.mainButton}
          type="submit"
          onClick={handleSubmit}
        >
          Создать ИПР
        </Button>
      </GenericWrapper>
      <Gap size="7xl" />
    </form>
  );
};

export default IdpForm;
