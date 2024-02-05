import { Button } from "../../ui-kit";
import style from "./MonthButton.module.scss";

const MonthButton = ({ children }: { children: string }) => {
  return (
    <Button
      view="tertiary"
      shape="rounded"
      size="xxs"
      className={style.button}
      type="button"
    >
      {children}
    </Button>
  );
};

export default MonthButton;
