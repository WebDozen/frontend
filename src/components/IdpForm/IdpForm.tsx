import { useState } from "react";
import { Gap, Button, GenericWrapper, Divider } from "../ui-kit";
import style from "./IdpForm.module.scss";
import IdpFormPartOne from "./IdpFormPartOne/IdpFormPartOne";
import TaskForm from "./TaskForm/TaskForm";

const IdpForm = () => {
  interface DATA {
    id: number;
    item?: DATTA;
  }
  interface DATTA {
    title?: string;
    description?: string;
    type?: string;
    resource?: string;

    title0?: string;

    title1?: string;

    title2?: string;
  }

  const initialTaskList: DATA[] = [];
  const [taskList, setTaskList] = useState(initialTaskList);
  const nullArray = taskList.length === 0;

  const handleAddTask = ({ id, item }: DATA) => {
    setTaskList([...taskList, { id, item }]);
  };

  const handleButtonClick = () => {
    if (nullArray) {
      handleAddTask({ id: taskList.length });
    } else {
      handleAddTask({
        id: taskList.length,
        item: inputs,
      });
    }
  };

  const handleDeleteTask = (idx: number | undefined) => {
    console.log(taskList);
    setTaskList(taskList.filter((item) => item.id !== idx));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(taskList.slice(1, taskList.length));
    console.log(taskList);
    // let gg = Object.assign({}, { title: taskList[1].item });
    // const gg = taskList.forEach(
    //   (n) => ((n.item? = n.item.title), delete n.item?.title0),
    // );
    // console.log(taskList[0]);
  };

  // const initialInputs: DATTA = {};
  const [inputs, setInputs] = useState({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form>
      <IdpFormPartOne />
      {/* {где то тут надо поменять отступ на 32 после кнопок месяцев} */}
      {taskList?.map((item) => (
        <TaskForm
          taskData={item}
          handleDeleteTask={handleDeleteTask}
          // arr={taskList}
          // handleAddTask={handleAddTask}
          key={item.id}
          inputs={inputs}
          handleChange={handleChange}
        />
      ))}
      <Gap size="4xl" />
      <Divider
        className={nullArray ? style.dividerCustom : style.dividerCustomLarge}
      />
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
