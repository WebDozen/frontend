import { useState } from "react";
import { UniversalDateInput, Calendar } from "../../ui-kit";

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
      block={true}
      view="date"
      label="Дата"
      labelView={"inner"}
      value={value}
      onChange={handleChange}
      // disableUserInput={disableUserInput}
      picker={true}
      Calendar={Calendar}
      // calendarProps={{
      //   selectorView: radioSelected,
      // }}
      clear={true}
      onClear={(e) => {
        e.stopPropagation();
        setValue("");
      }}
    />
  );
};

export default DateInputCustom;
