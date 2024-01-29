import {
  GenericWrapper,
  Typography,
  TrashCanMIcon,
  IconButton,
  Gap,
  Input,
  Textarea,
  Button,
  Divider,
} from "../../ui-kit";
import style from "./TaskForm.module.scss";
import AutoInput from "../AutoInput/AutoInput";
import { useState } from "react";

const data = {
  label: "Тип задачи",
  placeholder: "Выберите тип задачи",
  options: [{ key: "Букварь" }, { key: "Учебник" }, { key: "Альфа-академия" }],
};

interface TaskFormProps {
  title: number;
  showTaskForm: boolean;
  handleAddTask: (item: number) => void;
  handleDeleteTask: () => void;
}

const TaskForm = ({
  title,
  showTaskForm,
  handleAddTask,
  handleDeleteTask,
}: TaskFormProps) => {
  const [hideButton, setHideButton] = useState(showTaskForm);

  const addNewTask = () => {
    setHideButton(false);
    handleAddTask(11);
  };

  const resetTask = () => {
    setHideButton(true);
    handleDeleteTask();
  };

  return (
    <GenericWrapper column={true} className={style.container}>
      <Divider className={style.dividerCustom} />
      <Gap size="s" />
      <GenericWrapper justifyContent="between" alignItems="center">
        <Typography.Text
          tag="p"
          defaultMargins={false}
          view="secondary-large"
          className={style.text}
        >
          {`ЗАДАЧА ${title}`}
        </Typography.Text>
        <IconButton
          icon={<TrashCanMIcon />}
          size={40}
          className={style.trashCanButton}
          onClick={resetTask}
        />
      </GenericWrapper>
      <Gap size="m" />
      <Input
        placeholder="Введите название задачи"
        block={true}
        label="Название"
        labelView="outer"
        size="m"
      />
      <Gap size="m" />
      <Textarea
        block={true}
        minRows={1}
        maxRows={10}
        labelView="outer"
        placeholder="Добавьте описание задачи"
        label="Описание"
        maxLength={200}
        showCounter={true}
        size="m"
      />
      <Gap size="m" />
      <GenericWrapper justifyContent="between">
        <AutoInput data={data} />
        <Input
          className={style.input}
          placeholder="Добавьте источник или название"
          block={true}
          label="Источник"
          labelView="outer"
          size="m"
        />
      </GenericWrapper>
      <Gap size="2xl" />
      {hideButton && (
        <Button
          view="primary"
          size="xs"
          disabled={false}
          type="button"
          className={style.button}
          onClick={addNewTask}
        >
          Добавить еще задачу
        </Button>
      )}
      <Gap size="4xl" />
      <Divider className={style.dividerCustom} />
    </GenericWrapper>
  );
};

export default TaskForm;
