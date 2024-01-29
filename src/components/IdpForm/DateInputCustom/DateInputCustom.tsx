import { useState } from "react";
import { UniversalDateInput, Calendar } from "../../ui-kit";
import style from "./DateInputCustom.module.scss";

const DateInputCustom = () => {
  const [value, setValue] = useState("");

  const handleChange = (
    _: React.ChangeEvent<HTMLInputElement> | null,
    { value }: { value: string },
  ) => {
    setValue(value);
  };

  return (
    <UniversalDateInput
      className={style.input}
      block={true}
      view="date"
      label="Срок выполнения"
      labelView={"outer"}
      value={value}
      onChange={handleChange}
      size="m"
      picker={true}
      Calendar={Calendar}
      calendarProps={{
        selectorView: "month-only",
      }}
      clear={true}
      onClear={(e) => {
        e.stopPropagation();
        setValue("");
      }}
    />
  );
};

export default DateInputCustom;
