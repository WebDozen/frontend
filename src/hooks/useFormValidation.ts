import { useState } from "react";
import { DATE_TRANSLETER } from "../utils/constants";

const useFormValidation = () => {
  //idp
  interface IdpValue {
    mentor: string;
    name: string;
    description: string;
    deadline: string;
  }

  const idpInitialNull: IdpValue = {
    mentor: "",
    name: "",
    description: "",
    deadline: "",
  };

  // const idpInitialState: IdpValue = {
  //   mentor: fakeProps.mentor,
  //   name: fakeProps.name,
  //   description: fakeProps.description,
  //   deadline: DATE_TRANSLETER(fakeProps.deadline),
  // };

  const [idpValue, setIdpValue] = useState(idpInitialNull);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let FinalObj = {};
    const { mentor, name, description, deadline } = idpValue;
    FinalObj = { mentor, name, description, deadline, tasks: inputFields };
    console.log(FinalObj);
  };

  //tasks
  // interface TaskValue {
  //   name: string;
  //   description: string;
  //   type: string;
  //   source: string;
  // }

  // const initialTaskState: Array<{
  //   type: string;
  //   name: string;
  //   description: string;
  //   source: string;
  // }> = fakeProps.tasks;

  const initialTaskNull: Array<{}> = [];
  const [inputFields, setInputFields] = useState(initialTaskNull);


  const handleChange = (event: any, index: number) => {
    const { name, value } = event.target;
    let data: any = [...inputFields];
    data[index][name] = value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { name: "", description: "", type: "", source: "" };
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };


  return {
    idpValue,
    setIdpValue,
    handleSubmit,
    inputFields,
    setInputFields,
    handleChange,
    addFields,
    removeFields
  };
};

export default useFormValidation;