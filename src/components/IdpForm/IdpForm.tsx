import { useState } from "react";
import { Gap, Button, GenericWrapper, Divider } from "../ui-kit";
import style from "./IdpForm.module.scss";
import IdpFormPartOne from "./IdpFormPartOne/IdpFormPartOne";
import TaskForm from "./TaskForm/TaskForm";

const IdpForm = () => {
  const [inputFields, setInputFields] = useState([]);
  const nullArray = inputFields.length === 0;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputFields);
  };

  const handleChange = (
    event: any, //React.ChangeEvent<HTMLInputElement> //React.ChangeEvent
    index: number,
  ) => {
    const { name, value } = event.target;
    let data = [...inputFields];
    data[index][name] = value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { title: "", description: "", type: "", resource: "" };
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <form>
      <IdpFormPartOne />
      {/* {где то тут надо поменять отступ на 32 после кнопок месяцев} */}
      {inputFields.map((inputs, index) => (
        <TaskForm
          inputs={inputs}
          handleChange={(e) => handleChange(e, index)}
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
