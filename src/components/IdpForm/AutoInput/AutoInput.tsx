import {
  InputAutocomplete,
  Typography,
  ChevronDownMIcon,
  GenericWrapper,
} from "../../ui-kit";
import style from "./AutoInput.module.scss";

interface Config {
  config: {
    label: string;
    placeholder: string;
    options: { key: string }[];
  };
  name: string;
  idpValue: {
    mentor: string;
    name: string;
    description: string;
    deadline: string;
  };
  setIdpValue: (e: any) => void;
}

const AutoInput = ({ config, name, idpValue, setIdpValue }: Config) => {
  const shownChevron = true;

  const matchOption = (option: { key: string }, inputValue: string) =>
    option.key.toLowerCase().includes((inputValue || "").toLowerCase());

  const filteredOptions = config.options.filter((option) =>
    matchOption(option, idpValue.mentor),
  );

  const handleInput = (
    _: React.ChangeEvent<HTMLInputElement> | null,
    { value }: { value: string },
  ) => {
    setIdpValue({ ...idpValue, [name]: value });
  };

  const handleChange = ({ selected }: any) => {
    setIdpValue(selected ? { ...idpValue, [name]: selected.key } : "");
  };

  const handleClear = (e: any) => {
    e.stopPropagation();
    setIdpValue({ ...idpValue, [name]: "" });
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
        value={idpValue.mentor}
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

export default AutoInput;
