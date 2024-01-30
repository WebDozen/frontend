import {
  GenericWrapper,
  Typography,
  TrashCanMIcon,
  IconButton,
  Gap,
  Input,
  Textarea,
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

// type Pr = {
//   set: React.Dispatch<React.SetStateAction<string>>;
// };

interface DATA {
  title?: string;
  description?: string;
  type?: string;
  resource?: string;
}

interface TaskFormProps {
  taskData: { id?: number; data?: DATA };
  handleDeleteTask: (idx: number | undefined) => void;
  inputs: DATA;
  handleChange: (event: any) => void;
  // handleAddTask: (item: { id: number; data: string }) => void;
}

const TaskForm = ({
  taskData,
  handleDeleteTask,
  inputs,
  handleChange,
}: TaskFormProps) => {
  const deleteTask = () => {
    handleDeleteTask(taskData.id);
  };

  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log("Submit Tasjki");
  //   // handleAddTask({ id: taskData.id, data: test });
  // };

  return (
    <GenericWrapper column={true} className={style.container}>
      <Gap size="4xl" />
      <Divider className={style.dividerCustom} />
      <Gap size="s" />
      <GenericWrapper justifyContent="between" alignItems="center">
        <Typography.Text
          tag="p"
          defaultMargins={false}
          view="secondary-large"
          className={style.text}
        >
          {`ЗАДАЧА ${taskData.id}`}
        </Typography.Text>
        <IconButton
          icon={<TrashCanMIcon />}
          size={40}
          className={style.trashCanButton}
          onClick={deleteTask}
        />
      </GenericWrapper>
      <Gap size="m" />
      <Input
        placeholder="Введите название задачи"
        block={true}
        label="Название"
        labelView="outer"
        size="m"
        name="title"
        value={inputs.title}
        onChange={handleChange}
      />
      <Gap size="m" />
      <Textarea
        name="description"
        block={true}
        minRows={1}
        maxRows={10}
        labelView="outer"
        placeholder="Добавьте описание задачи"
        label="Описание"
        maxLength={200}
        showCounter={true}
        size="m"
        value={inputs.description}
        onChange={handleChange}
      />
      <Gap size="m" />
      <GenericWrapper justifyContent="between">
        <AutoInput
          data={data}
          name="type"
          value={inputs.type}
          onChange={handleChange}
        />
        <Input
          name="resource"
          className={style.input}
          placeholder="Добавьте источник или название"
          block={true}
          label="Источник"
          labelView="outer"
          size="m"
          value={inputs.resource}
          onChange={handleChange}
        />
      </GenericWrapper>
    </GenericWrapper>
  );
};

export default TaskForm;
