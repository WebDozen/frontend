import { Gap, Input, Textarea, RadioGroup, Tag } from "../../ui-kit";
import style from "./IdpFormPartOne.module.scss";
import AutoInput from "../AutoInput/AutoInput";
import DateInputCustom from "../DateInputCustom/DateInputCustom";
import { useState } from "react";
// import MonthButton from "../MonthButton/MonthButton";

const config = {
  label: "Ментор",
  placeholder: "Назначьте ментора",
  options: [
    { key: "Иванов Андрей" },
    { key: "Петров Алексей" },
    { key: "Сидоров Александр" },
    { key: "Curium" },
    { key: "Berkelium" },
    { key: "Californium" },
    { key: "Einsteinium" },
    { key: "Fermium" },
    { key: "Mendelevium" },
    { key: "Nobelium" },
    { key: "Lawrencium" },
    { key: "Rutherfordium" },
    { key: "Dubnium" },
    { key: "Seaborgium" },
    { key: "Bohrium" },
  ],
};

const IdpFormPartOne = () => {
  const [value, setValue] = useState("");

  const onChange = (_: any, payload: any) => {
    setValue(payload.value);
  };

  return (
    <div className={style.container}>
      <AutoInput config={config} name="mentor" />
      <Gap size="m" />
      <Input
        placeholder="Введите название ИПР"
        block={true}
        label="Название ИПР"
        labelView="outer"
        size="m"
      />
      <Gap size="m" />
      <Textarea
        block={true}
        minRows={1}
        maxRows={10}
        labelView="outer"
        placeholder="Добавьте описание ИПР"
        label="Описание ИПР"
        size="m"
      />
      <Gap size="m" />
      <DateInputCustom />
      <Gap size="s" />
      <RadioGroup direction="horizontal" type="tag" onChange={onChange}>
        <Tag value="one" size="xxs">
          3 месяца
        </Tag>
        <Tag value="two" size="xxs">
          6 месяцев
        </Tag>
        <Tag value="three" size="xxs">
          1 год
        </Tag>
      </RadioGroup>
      {/* <GenericWrapper>
        <MonthButton children="3 месяца" />
        <Gap size="xs" direction="horizontal" />
        <MonthButton children="6 месяцев" />
        <Gap size="xs" direction="horizontal" />
        <MonthButton children="1 год" />
      </GenericWrapper> */}
    </div>
  );
};

export default IdpFormPartOne;
