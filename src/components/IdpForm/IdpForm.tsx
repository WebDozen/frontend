import { useState } from "react";
import { Gap, Button, GenericWrapper, Divider } from "../ui-kit";
import style from "./IdpForm.module.scss";
import IdpFormPartOne from "./IdpFormPartOne/IdpFormPartOne";
import TaskForm from "./TaskForm/TaskForm";

const IdpForm = () => {
  // const [inputs, setInputs] = useState({});
  // const [isValid, setIsValid] = useState(false);

  // const handleChange = (e: any) => {
  //   const input = e.target;
  //   const { name, value } = input;

  //   setInputs({ ...inputs, [name]: value });
  //   setIsValid(e.target.closest("form").checkValidity());
  //   console.log(name);
  // };

  // const resetSubmitButton = () => {
  //   setIsValid(false);
  // };

  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log("privet");
  // };
  const [showTaskForm, setShowTaskForm] = useState(false);

  const numbers: Array<number> = [];
  const [taskList, setTaskList] = useState(numbers);

  const handleAddTask = (item: number) => {
    setTaskList([item, ...taskList]);
    console.log(taskList);
  };

  const handleDeleteTask = () => {
    setTaskList(taskList.splice(-1));
    console.log(taskList);
  };

  return (
    <form>
      <IdpFormPartOne />
      <Gap size="xl" />

      {showTaskForm ? (
        <TaskForm
          title={1}
          showTaskForm={showTaskForm}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
        />
      ) : (
        <>
          <Button
            view="primary"
            size="xs"
            disabled={false}
            type="button"
            onClick={() => setShowTaskForm(true)}
          >
            Добавить задачу
          </Button>
          <Gap size="4xl" />
          <Divider className={style.dividerCustom} />
        </>
      )}

      {taskList.map((_, id) => (
        <TaskForm
          title={id + 2}
          showTaskForm={showTaskForm}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
          key={id}
        />
      ))}

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
          disabled={true}
          className={style.mainButton}
          type="submit"
        >
          Создать ИПР
        </Button>
      </GenericWrapper>
      <Gap size="7xl" />
    </form>
  );
};

export default IdpForm;
