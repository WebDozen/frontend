import { Input } from "../../ui-kit";

const InputCustom = () => {
  return (
    <Input
      placeholder="Введите текст"
      block={true}
      label="Текст"
      labelView={"inner"}
    />
  );
};

export default InputCustom;
