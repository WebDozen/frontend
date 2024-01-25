import { useState } from "react";
import { InputAutocomplete, Typography, ChevronDownMIcon } from "../../ui-kit";
import style from "./AutoInput.module.scss";

const options = [
  { key: "Иванов Андрей" },
  { key: "Петров Алексей" },
  { key: "Сидоров Александр" },
  { key: "Curium" },
  { key: "Berkelium" },
  { key: "Californium" },
  { key: "Einsteinium" },
  { key: "Fermium" },
  { key: "Mendelevium" },
  { key: "Nobelium" },
  { key: "Lawrencium" },
  { key: "Rutherfordium" },
  { key: "Dubnium" },
  { key: "Seaborgium" },
  { key: "Bohrium" },
];

const AutoInput = () => {
  const [value, setValue] = useState("");
  const shownChevron = true;

  const matchOption = (option: { key: string }, inputValue: string) =>
    option.key.toLowerCase().includes((inputValue || "").toLowerCase());

  const filteredOptions = options.filter((option) =>
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
    <div className={style.autoInput}>
      <InputAutocomplete
        size="m"
        selected={[]}
        block={true}
        options={filteredOptions}
        label="Назначьте ментора"
        placeholder="Начните вводить название"
        labelView="inner"
        onChange={handleChange}
        onInput={handleInput}
        value={value}
        Arrow={shownChevron ? ChevronDownMIcon : undefined}
        // allowUnselect={false} ?
        showEmptyOptionsList={true}
        inputProps={{
          onClear: () => setValue(""),
          clear: true,
        }}
        optionsListProps={{
          emptyPlaceholder: (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography.Text view="component-primary">
                Ничего не нашлось
              </Typography.Text>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default AutoInput;
