import { Gap, Button, GenericWrapper, Divider, Textarea } from "../ui-kit";
import style from "./DPDForm.module.scss";
import AutoInput from "./AutoInput/AutoInput";
import InputCustom from "./InputCustom/InputCustom";
import DateInputCustom from "./DateInputCustom/DateInputCustom";

const DPDForm = () => {
  return (
    <form className={style.form}>
      <AutoInput />
      <Gap size="m" />
      <InputCustom />
      <Gap size="m" />
      <Textarea
        block={true}
        minRows={1}
        maxRows={10}
        placeholder="Добавьте описание ИПР"
      />
      <Gap size="m" />
      <DateInputCustom />
      <Gap size="s" />
      <GenericWrapper>
        <Button
          view="tertiary"
          shape="rounded"
          size="xxs"
          className={style.button}
          type="button"
        >
          3 месяца
        </Button>
        <Gap size="xs" direction="horizontal" />
        <Button
          view="tertiary"
          shape="rounded"
          size="xxs"
          className={style.button}
          type="button"
        >
          6 месяцев
        </Button>
        <Gap size="xs" direction="horizontal" />
        <Button
          view="tertiary"
          shape="rounded"
          size="xxs"
          className={style.button}
          type="button"
        >
          1 год
        </Button>
      </GenericWrapper>
      <Gap size="xl" />
      <Button view="primary" size="xs" disabled={true} type="button">
        Добавить задачу
      </Button>
      <Gap size="4xl" />
      <Divider className={style.dividerCustom} />
      <Gap size="2xl" />
      <GenericWrapper>
        <Button
          view="tertiary"
          size="m"
          className={style.mainButton}
          type="button"
        >
          Назад
        </Button>
        <Gap size="m" direction="horizontal" />
        <Button
          view="accent"
          size="m"
          disabled={true}
          className={style.mainButton}
          type="submit"
        >
          Создать ИПР
        </Button>
      </GenericWrapper>
      <Gap size="7xl" />
    </form>
  );
};

export default DPDForm;
