import { useState } from "react";
import { Gap, Button, GenericWrapper, Divider } from "../ui-kit";
import style from "./IdpForm.module.scss";
import IdpFormPartOne from "./IdpFormPartOne/IdpFormPartOne";
import TaskForm from "./TaskForm/TaskForm";

const IdpForm = () => {
  interface DATA {
    title?: string;
    description?: string;
    type?: string;
    resource?: string;
  }

  const initialTaskList: Array<{ id?: number; data?: DATA }> = [
    // { id: 1, data: "Почитать" },
    // { id: 2, data: "Погулять" },
    // { id: 3, data: "Поесть" },
    // { id: 4, data: "Посмотреть ютубчик" },
    // { id: 5, data: "СДЕЛАТЬ ИПР" },
  ];
  const [taskList, setTaskList] = useState(initialTaskList);
  const nullArray = taskList.length === 0;

  const handleAddTask = (item: { id: number; data: DATA } | {}) => {
    setTaskList([...taskList, item]);
  };

  const handleButtonClick = () => {
    if (nullArray) {
      handleAddTask({});
    } else {
      handleAddTask({ id: taskList.length + 1, data: inputs });
    }
  };

  const handleDeleteTask = (idx: number | undefined) => {
    console.log(taskList);
    setTaskList(taskList.filter((item) => item.id !== idx));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(taskList);
  };
  type GG = {
    title?: string;
    description?: string;
    type?: string;
    resource?: string;
  };

  const [inputs, setInputs] = useState<GG>({});

  const handleChange = (e: any) => {
    const input = e.target;
    const { name, value } = input;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  return (
    <form>
      <IdpFormPartOne />
      {/* {где то тут надо поменять отступ на 32 после кнопок месяцев} */}
      {taskList?.map((item, idx) => (
        <TaskForm
          taskData={item}
          handleDeleteTask={handleDeleteTask}
          inputs={inputs}
          handleChange={handleChange}
          key={idx}
          // handleAddTask={handleAddTask}
        />
      ))}
      <Gap size="2xl" />
      <Button
        view="primary"
        size="xs"
        disabled={false}
        type="button"
        onClick={handleButtonClick}
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
