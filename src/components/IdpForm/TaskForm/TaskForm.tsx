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

const data = {
  label: "Тип задачи",
  placeholder: "Выберите тип задачи",
  options: [{ key: "Букварь" }, { key: "Учебник" }, { key: "Альфа-академия" }],
};

interface DATA {
  title?: string;
  description?: string;
  type?: string;
  resource?: string;
  id: number;
}

interface DATTA {
  title?: string;
  description?: string;
  type?: string;
  resource?: string;
  title1?: string;
}

interface TaskFormProps {
  taskData: DATA;
  handleDeleteTask: (idx: number) => void; //| undefined
  // arr: DATA[];
  // handleAddTask: (item: DATA) => void;
  inputs: DATTA;
  handleChange: (e: any) => void;
}

const TaskForm = ({
  taskData,
  handleDeleteTask,
  // arr,
  // handleAddTask,
  inputs,
  handleChange,
}: TaskFormProps) => {
  const deleteTask = () => {
    handleDeleteTask(taskData.id + 1);
  };

  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   handleAddTask({
  //     id: arr.length,
  //     title: inputs.title,
  //     description: inputs.description,
  //     type: inputs.type,
  //     resource: inputs.resource,
  //   });
  // };

  return (
    <GenericWrapper column={true} className={style.container}>
      <div>
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
            {`ЗАДАЧА ${taskData.id + 1}`}
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
          // name="title"
          name={`title${taskData.id}`}
          value={inputs.title1
}
          onChange={handleChange}
        />
        <Gap size="m" />
        <Textarea
          // name="description"
          name={`description${taskData.id}`}
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
            // name="type"
            name={`type${taskData.id}`}
            value={inputs.type}
            onChange={handleChange}
          />
          <Input
            // name="resource"
            name={`resource${taskData.id}`}
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
      </div>
    </GenericWrapper>
  );
};

export default TaskForm;
