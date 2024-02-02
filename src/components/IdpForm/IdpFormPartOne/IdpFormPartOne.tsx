import { Gap, Input, Textarea, RadioGroup, Tag } from "../../ui-kit";
import style from "./IdpFormPartOne.module.scss";
import AutoInput from "../AutoInput/AutoInput";
import DateInputCustom from "../DateInputCustom/DateInputCustom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../services/hook";
import { getEmployeesListData } from "../../../services/selectors";
import { useParams } from "react-router-dom";
// import type { TypeEmployeesItem } from "../../../services/employeesList/slice";
// import MonthButton from "../MonthButton/MonthButton";

interface Props {
  idpValue: {
    mentor: string;
    name: string;
    description: string;
    deadline: string;
  };
  setIdpValue: (e: any) => void;
  setTaskSubmitButtonDisabled: (e: any) => void;
}

const IdpFormPartOne = ({
  idpValue,
  setIdpValue,
  setTaskSubmitButtonDisabled,
}: Props) => {
  const { id } = useParams();
  const { list } = useAppSelector(getEmployeesListData);
  const [mentorsList, setMentorsList] = useState<Array<{ key: string }>>([]); //<TypeEmployeesItem[]> <MyArray>

  useEffect(() => {
    const filterThisEmployee = list.filter(
      (emloyee) => emloyee.id.toString() !== id,
    );
    const fillMentorList = filterThisEmployee.map((item) => {
      const fullName = `${item.last_name} ${item.first_name} ${item.middle_name}`;
      return { key: fullName };
    });
    setMentorsList(fillMentorList);
  }, [list, id]);

  useEffect(() => {
    const idpFormIsValid =
      idpValue.name && idpValue.deadline && idpValue.description;
    idpFormIsValid
      ? setTaskSubmitButtonDisabled(false)
      : setTaskSubmitButtonDisabled(true);
  }, [idpValue]);

  const handleIdpChange = (event: any) => {
    const { name, value } = event.target;
    setIdpValue({ ...idpValue, [name]: value });
  };

  //radio buttons
  const [value, setValue] = useState("");
  const onChange1 = (_: any, payload: any) => {
    setValue(payload.value);
  };

  const config = {
    label: "Ментор",
    placeholder: "Назначьте ментора",
    options: mentorsList,
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
