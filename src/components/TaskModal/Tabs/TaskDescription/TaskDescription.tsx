import { Typography } from "../../../ui-kit";
import style from "./TaskDescription.module.scss";
type Props = { children?: string };

const TaskDescription = ({ children }: Props) => {
  return (
    <>
      {children ? (
        <Typography.Text tag="p" defaultMargins={false} className={style.text}>
          {children}
        </Typography.Text>
      ) : null}
    </>
  );
};

export default TaskDescription;
