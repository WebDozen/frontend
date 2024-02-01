import { UniversalDateInput, Calendar } from "../../ui-kit";
import style from "./DateInputCustom.module.scss";

interface Props {
  idpValue: {
    mentor: string;
    name: string;
    description: string;
    deadline: string;
  };
  setIdpValue: (e: any) => void;
}

const DateInputCustom = ({ idpValue, setIdpValue }: Props) => {
  const handleChange = (
    _: React.ChangeEvent<HTMLInputElement> | null,
    { value }: { value: string },
  ) => {
    setIdpValue({ ...idpValue, deadline: value });
  };

  const handleClear = (e: any) => {
    e.stopPropagation();
    setIdpValue({ ...idpValue, deadline: "" });
  };

  return (
    <UniversalDateInput
      className={style.input}
      block={true}
      view="date"
      label="Срок выполнения"
      labelView={"outer"}
      value={idpValue.deadline}
      onChange={handleChange}
      size="m"
      picker={true}
      Calendar={Calendar}
      calendarProps={{
        selectorView: "month-only",
      }}
      clear={true}
      onClear={handleClear}
    />
  );
};

export default DateInputCustom;
