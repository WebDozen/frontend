import { Gap, Input, Textarea, RadioGroup, Tag } from "../../ui-kit";
import style from "./IdpFormPartOne.module.scss";
import AutoInput from "../AutoInput/AutoInput";
import DateInputCustom from "../DateInputCustom/DateInputCustom";
import { useState } from "react";
// import { useAppSelector } from "../../../services/hook";
// import { getEmployeesListData } from "../../../services/selectors";
// import { useParams } from "react-router-dom";
// import type { TypeEmployeesItem } from "../../../services/employeesList/slice";
// import MonthButton from "../MonthButton/MonthButton";

interface Props {
  idpValue: {
    mentor: string | undefined;
    name: string;
    description: string;
    deadline: string;
  };
  setIdpValue: (e: any) => void;
  mentorsList: { key: string }[];
}

const IdpFormPartOne = ({ idpValue, setIdpValue, mentorsList }: Props) => {
  const config = {
    label: "Ментор",
    placeholder: "Назначьте ментора",
    options: mentorsList,
  };

  const handleIdpChange = (event: any) => {
    const { name, value } = event.target;
    setIdpValue({ ...idpValue, [name]: value });
  };

  //radio buttons
  const [value, setValue] = useState("");
  const onChange1 = (_: any, payload: any) => {
    setValue(payload.value);
    if (!idpValue.deadline) {
      const newDate = new Date();
      let [day, month, year] = [
        newDate.getDate(),
        newDate.getMonth() + 1,
        newDate.getFullYear(),
      ];
      if (payload.value === "three") month = (month + 3) % 12;
      else if (payload.value === "six") month = (month + 6) % 12;
      else if (payload.value === "twelve") year = year + 1;
      let dayStr;
      let monthStr;
      if (day < 10) dayStr = "0" + day;
      if (month < 10) monthStr = "0" + month;
      else monthStr = month;
      let result = `${dayStr}.${monthStr}.${year}`;
      setIdpValue({ ...idpValue, deadline: result });
    } else {
      const parts = idpValue.deadline.split(".");
      let [day, month, year] = [
        parts[0],
        parseInt(parts[1]),
        parseInt(parts[2]),
      ];
      if (payload.value === "three") month = (month + 3) % 12;
      else if (payload.value === "six") month = (month + 6) % 12;
      else if (payload.value === "twelve") year = year + 1;
      let monthStr;
      if (month < 10) monthStr = "0" + month;
      else monthStr = month;
      let result = `${day}.${monthStr}.${year}`;
      setIdpValue({ ...idpValue, deadline: result });
    }
  };

  return (
    <div className={style.container}>
      <AutoInput
        config={config}
        name="mentor"
        idpValue={idpValue}
        setIdpValue={setIdpValue}
      />
      <Gap size="m" />
      <Input
        placeholder="Введите название ИПР"
        block={true}
        label="Название ИПР"
        labelView="outer"
        size="m"
        name="name"
        value={idpValue.name}
        onChange={handleIdpChange}
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
        name="description"
        value={idpValue.description}
        onChange={handleIdpChange}
      />
      <Gap size="m" />
      <DateInputCustom idpValue={idpValue} setIdpValue={setIdpValue} />
      <Gap size="s" />
      <RadioGroup direction="horizontal" type="tag" onChange={onChange1}>
        <Tag value="three" size="xxs">
          3 месяца
        </Tag>
        <Tag value="six" size="xxs">
          6 месяцев
        </Tag>
        <Tag value="twelve" size="xxs">
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
