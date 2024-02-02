import { useState } from "react";
import { Gap, Button, GenericWrapper, Divider } from "../ui-kit";
import style from "./IdpForm.module.scss";
import IdpFormPartOne from "./IdpFormPartOne/IdpFormPartOne";
import TaskForm from "./TaskForm/TaskForm";
import { DATE_TRANSLETER } from "../../utils/constants";
import useFormValidation from "../../hooks/useFormValidation";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getEmployeesListData } from "../../services/selectors";
import { patchIdpByID, postIdp } from "../../services/actions";
import { unwrapResult } from "@reduxjs/toolkit";

const fakeProps = {
  mentor: "Petr Mihalich",
  name: "Pochitat",
  description: "otkrit knigu",
  deadline: "2024-01-31T17:57:20.770Z",
  tasks: [
    {
      type: "Alfa - lab",
      name: "Privet",
      description: "Chto to na umnom",
      source: "link to the...",
    },
  ],
};

const IdpForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list } = useAppSelector(getEmployeesListData);

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

  // tasks
  interface TaskValue {
    name: string;
    description: string;
    type: string;
    source: string;
  }

  const initialTaskState: Array<{
    type: string;
    name: string;
    description: string;
    source: string;
  }> = fakeProps.tasks;

  const initialTaskNull: Array<{
    name: string;
    description: string;
    type: string;
    source: string;
  }> = [];

  const [inputFields, setInputFields] = useState(initialTaskNull);
  const nullArray = inputFields.length === 0;

  const handleChange = (event: any, index: number) => {
    const { name, value } = event.target;
    let data: any = [...inputFields];
    data[index][name] = value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { name: "", description: "", type: "", source: "" };
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  // idp
  interface IdpValue {
    mentor: string;
    name: string;
    description: string;
    deadline: string;
  }

  const idpInitialState: IdpValue = {
    mentor: fakeProps.mentor,
    name: fakeProps.name,
    description: fakeProps.description,
    deadline: DATE_TRANSLETER(fakeProps.deadline),
  };

  const idpInitialNull: IdpValue = {
    mentor: "",
    name: "",
    description: "",
    deadline: "",
  };

  const [idpValue, setIdpValue] = useState(idpInitialState);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let FinalObj = {};
    const { mentor, name, description, deadline } = idpValue;
    let date = new Date(deadline);
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

  return (
    <form>
      <IdpFormPartOne idpValue={idpValue} setIdpValue={setIdpValue} />
      {/* {где то тут надо поменять отступ на 32 после кнопок месяцев} */}
      {inputFields.map((input, index) => (
        <TaskForm
          taskProps={index}
          inputFields={inputFields}
          setInputFields={setInputFields}
          handleChange={(e: any) => handleChange(e, index)}
          removeFields={() => removeFields(index)}
          key={index}
        />
      ))}
      <Gap size="2xl" />
      <Button
        view="primary"
        size="xs"
        disabled={false}
        type="button"
        onClick={addFields}
      >
        {nullArray ? "Добавить задачу" : "Добавить еще задачу"}
      </Button>
      <Gap size="4xl" />
      <Divider
        className={nullArray ? style.dividerCustom : style.dividerCustomLarge}
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
          disabled={false}
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
