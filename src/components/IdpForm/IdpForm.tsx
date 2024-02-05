import { useEffect, useState } from "react";
import { Gap, Button, GenericWrapper, Divider, Skeleton } from "../ui-kit";
import style from "./IdpForm.module.scss";
import IdpFormPartOne from "./IdpFormPartOne/IdpFormPartOne";
import TaskForm from "./TaskForm/TaskForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getEmployeesListData, getIdpData } from "../../services/selectors";
import { DATE_FROM_ISO, DATE_TO_ISO, TASK_TYPES } from "../../utils/constants";
import { patchIdpByID, postIdp } from "../../services/actions";
import { unwrapResult } from "@reduxjs/toolkit";

interface IdpValue {
  mentor: string | undefined;
  name: string;
  description: string;
  deadline: string;
}
interface TaskValue {
  name: string;
  description: string;
  type: string;
  source: string;
}

const IdpForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id, idp_id } = useParams();
  const { idp, loading } = useAppSelector(getIdpData);
  const { list } = useAppSelector(getEmployeesListData);
  const isAddIdpPage = pathname === `/employee/${id}/add_idp`;
  const isEditIdpPage = pathname === `/employee/${id}/edit_idp/${idp_id}`;
  const finishLink = isAddIdpPage
    ? `/employee/${id}/`
    : isEditIdpPage
      ? `/employee/${id}/idp/${idp_id}`
      : pathname;

  const initialTaskNull: TaskValue[] = [];
  const idpInitialNull: IdpValue = {
    mentor: "",
    name: "",
    description: "",
    deadline: "",
  };
  useEffect(() => {
    const idpInitialState: IdpValue = {
      mentor:
        idp.mentor !== null
          ? `${idp.mentor?.last_name} ${idp.mentor?.first_name} ${idp.mentor?.middle_name}`
          : undefined,
      name: idp.name,
      description: idp.description,
      deadline: DATE_FROM_ISO(idp.deadline),
    };
    const taskExtractor: TaskValue[] = idp.tasks.map((item) => {
      let type;
      switch (item.type) {
        case TASK_TYPES["Книга"]:
          type = "Книга";
          break;
        case TASK_TYPES["Курс"]:
          type = "Курс";
          break;
        case TASK_TYPES["Рабочая задача"]:
          type = "Рабочая задача";
          break;
        case TASK_TYPES["Альфа академия"]:
          type = "Альфа академия";
          break;
        default:
          type = "Другое";
      }
      return {
        name: item.name,
        description: item.description,
        type: type,
        source: item.source,
      };
    });

    isAddIdpPage ? setIdpValue(idpInitialNull) : setIdpValue(idpInitialState);
    isAddIdpPage
      ? setInputFields(initialTaskNull)
      : setInputFields(taskExtractor);
  }, [idp, id]);
  // states
  const [idpValue, setIdpValue] = useState(idpInitialNull);
  const [inputFields, setInputFields] = useState(initialTaskNull);
  const [idpButtonIsActive, setIdpButtonIsActive] = useState(false);
  const [taskSubmitButtonDisabled, setTaskSubmitButtonDisabled] =
    useState(true);
  const [mentorsList, setMentorsList] = useState<Array<{ key: string }>>([]);
  const [idMentorsList, setIdMentorsList] = useState<Array<{ string: number }>>(
    [],
  );

  //
  //
  //

  const taskParser = inputFields.map((task) => {
    let type;
    if (task.type === "Книга") type = 1;
    else if (task.type === "Курс") type = 2;
    else if (task.type === "Рабочая задача") type = 3;
    else if (task.type === "Alfa Academy") type = 4;
    return {
      name: task.name,
      description: task.description,
      type: type,
      source: task.source,
    };
  });

  useEffect(() => {
    const hasMentor = idpValue.mentor !== "" && idpValue.name !== ""; //true kogda zapolnen
    const firstTaskIsComplete =
      inputFields[0]?.description !== "" &&
      inputFields[0]?.name !== "" &&
      inputFields[0]?.source !== "" &&
      inputFields[0]?.type !== "" &&
      inputFields.length !== 0; //true kogda zapolnen

    setIdpButtonIsActive(hasMentor || firstTaskIsComplete);
  }, [idpValue, inputFields]);

  useEffect(() => {
    const idpFormIsValid =
      idpValue.name && idpValue.deadline && idpValue.description;
    idpFormIsValid
      ? setTaskSubmitButtonDisabled(false)
      : setTaskSubmitButtonDisabled(true);
  }, [idpValue]);

  useEffect(() => {
    const filterThisEmployee = list.filter(
      (emloyee) => emloyee.id.toString() !== id,
    );
    const fillMentorList = filterThisEmployee.map((item) => {
      const fullName = `${item.last_name} ${item.first_name} ${item.middle_name}`;
      return { key: fullName };
    });
    const idMentorList = filterThisEmployee.map((item) => {
      const fullName = `${item.last_name} ${item.first_name} ${item.middle_name}`;
      const id = item.id;
      return { [fullName]: id } as { string: number };
    });

    setMentorsList(fillMentorList);
    setIdMentorsList(idMentorList);
  }, [list, id]);

  const getMentorId = (
    idList: { [key: string]: number }[],
    selectedItem: string | undefined,
  ): number | void => {
    if (selectedItem === undefined) {
      return undefined;
    }
    const idObj = idList.find((item) => Object.keys(item)[0] === selectedItem);
    return idObj ? idObj[selectedItem] : undefined;
  };

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
    const { mentor, name, description, deadline } = idpValue;
    const mentorId = getMentorId(idMentorsList, mentor);
    const isoDate = DATE_TO_ISO(deadline);
    const finalObj = {
      mentor: mentorId,
      name,
      description,
      deadline: isoDate,
      tasks: taskParser,
    };

    try {
      let originalPromiseResult;
      if (isAddIdpPage) {
        const resultAction = await dispatch(
          postIdp({ employee_id: `${id}`, data: finalObj }),
        );
        originalPromiseResult = unwrapResult(resultAction);
      }
      if (isEditIdpPage) {
        const resultAction = await dispatch(
          patchIdpByID({
            employee_id: `${id}`,
            idp_id: `${idp_id}`,
            data: finalObj,
          }),
        );
        originalPromiseResult = unwrapResult(resultAction);
      }
      if (originalPromiseResult) {
        navigate(finishLink);
      }
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <form>
      <Skeleton visible={loading}>
        <IdpFormPartOne
          idpValue={idpValue}
          setIdpValue={setIdpValue}
          mentorsList={mentorsList}
        />
      </Skeleton>
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
          onClick={() => navigate(-1)}
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
          {isAddIdpPage ? "Создать ИПР" : "Сохранить"}
        </Button>
      </GenericWrapper>
      <Gap size="7xl" />
    </form>
  );
};

export default IdpForm;
