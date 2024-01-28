import { useState } from "react";
import {
  InputAutocomplete,
  Typography,
  ChevronDownMIcon,
  GenericWrapper,
} from "../../ui-kit";
import style from "./AutoInput.module.scss";

interface inputProps {
  data: {
    label: string;
    placeholder: string;
    options: { key: string }[];
  };
}

const AutoInput = ({ data }: inputProps) => {
  const [value, setValue] = useState("");
  const shownChevron = true;

  const matchOption = (option: { key: string }, inputValue: string) =>
    option.key.toLowerCase().includes((inputValue || "").toLowerCase());

  const filteredOptions = data.options.filter((option) =>
    matchOption(option, value),
  );

  const handleInput = (
    _: React.ChangeEvent<HTMLInputElement> | null,
    { value }: { value: string },
  ) => {
    setValue(value);
  };

  const handleChange = ({ selected }: any) => {
    setValue(selected ? selected.key : "");
  };

  return (
    <GenericWrapper className={style.autoInput}>
      <InputAutocomplete
        size="m"
        selected={[]}
        block={true}
        options={filteredOptions}
        label={data.label}
        placeholder={data.placeholder}
        labelView="outer"
        onChange={handleChange}
        onInput={handleInput}
        value={value}
        Arrow={shownChevron ? ChevronDownMIcon : undefined}
        showEmptyOptionsList={true}
        inputProps={{
          onClear: () => setValue(""),
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
