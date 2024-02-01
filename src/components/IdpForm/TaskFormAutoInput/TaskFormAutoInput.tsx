import {
  InputAutocomplete,
  Typography,
  ChevronDownMIcon,
  GenericWrapper,
} from "../../ui-kit";
import style from "../AutoInput/AutoInput.module.scss";

interface Config {
  config: {
    label: string;
    placeholder: string;
    options: { key: string }[];
  };
  name: string;
  inputFields: {
    name: string;
    description: string;
    type: string;
    source: string;
  }[];
  setInputFields: (e: any) => void;
  index: number;
}

const TaskFormAutoInput = ({
  config,
  name,
  inputFields,
  setInputFields,
  index,
}: Config) => {
  const value = inputFields[index].type;
  const shownChevron = true;

  const matchOption = (option: { key: string }, inputValue: string) =>
    option.key.toLowerCase().includes((inputValue || "").toLowerCase());

  const filteredOptions = config.options.filter((option) =>
    matchOption(option, value),
  );

  const handleInput = (
    _: React.ChangeEvent<HTMLInputElement> | null,
    { value }: { value: string },
  ) => {
    let data: any = [...inputFields];
    data[index][name] = value;
    setInputFields(data);
  };

  const handleChange = ({ selected }: any) => {
    let data: any = [...inputFields];
    data[index][name] = selected.key;
    setInputFields(data);
    console.log(value)
  };

  const handleClear = () => {
    let data: any = [...inputFields];
    data[index][name] = "";
    setInputFields(data);
  };

  return (
    <GenericWrapper className={style.autoInput}>
      <InputAutocomplete
        name={name}
        size="m"
        selected={[]}
        block={true}
        options={filteredOptions}
        label={config.label}
        placeholder={config.placeholder}
        labelView="outer"
        onChange={handleChange}
        onInput={handleInput}
        value={value}
        Arrow={shownChevron ? ChevronDownMIcon : undefined}
        showEmptyOptionsList={true}
        inputProps={{
          onClear: handleClear,
          clear: true,
        }}
        optionsListProps={{
          emptyPlaceholder: (
            <Typography.Text view="component-primary">
              Ничего не нашлось
            </Typography.Text>
          ),
        }}
      />
    </GenericWrapper>
  );
};

export default TaskFormAutoInput;
