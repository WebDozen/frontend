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
import TaskFormAutoInput from "../TaskFormAutoInput/TaskFormAutoInput";

const config = {
  label: "Тип задачи",
  placeholder: "Выберите тип задачи",
  options: [{ key: "Букварь" }, { key: "Учебник" }, { key: "Альфа-академия" }],
};

interface TaskFormProps {
  taskProps: number;
  removeFields: () => void;
  inputFields: {
    name: string;
    description: string;
    type: string;
    source: string;
  }[];
  setInputFields: (e: any) => void;
  handleChange: (e: any) => void;
}

const TaskForm = ({
  removeFields,
  inputFields,
  setInputFields,
  handleChange,
  taskProps,
}: TaskFormProps) => {
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
          {`ЗАДАЧА ${taskProps + 1}`}
        </Typography.Text>
        <IconButton
          icon={<TrashCanMIcon />}
          size={40}
          className={style.trashCanButton}
          onClick={removeFields}
        />
      </GenericWrapper>
      <Gap size="m" />
      <Input
        placeholder="Введите название задачи"
        block={true}
        label="Название"
        labelView="outer"
        size="m"
        name="name"
        value={inputFields[taskProps].name}
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
        value={inputFields[taskProps].description}
        onChange={handleChange}
      />
      <Gap size="m" />
      <GenericWrapper justifyContent="between">
        <TaskFormAutoInput
          config={config}
          name="type"
          inputFields={inputFields}
          setInputFields={setInputFields}
          index={taskProps}
        />
        <Input
          name="source"
          className={style.input}
          placeholder="Добавьте источник или название"
          block={true}
          label="Источник"
          labelView="outer"
          size="m"
          value={inputFields[taskProps].source}
          onChange={handleChange}
        />
      </GenericWrapper>
    </GenericWrapper>
  );
};

export default TaskForm;
