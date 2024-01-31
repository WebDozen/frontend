import { Status } from "..";
import type {
  TYPE_SLAG_IDP,
  TYPE_SLAG_TASK,
} from "../../../utils/constants";
import { STATUSES_IDP, STATUSES_TASK } from "../../../utils/constants";

type IdpStatusProps = {
  slag_idp: keyof typeof TYPE_SLAG_IDP;
  slag_task?: never;
};
type TaskStatusProps = {
  slag_task: keyof typeof TYPE_SLAG_TASK;
  slag_idp?: never;
};
type TypeStatusProps = IdpStatusProps | TaskStatusProps;

const StatusComponent = ({ slag_idp, slag_task }: TypeStatusProps) => {
  const myWiew = slag_idp ? "contrast" : slag_task ? "soft" : undefined;

  return (
    <Status
      view={myWiew}
      color={
        slag_idp ? STATUSES_IDP[slag_idp].color : STATUSES_TASK[slag_task].color
      }
    >
      {(slag_idp
        ? STATUSES_IDP[slag_idp].name
        : STATUSES_TASK[slag_task].name
      ).toUpperCase()}
    </Status>
  );
};

export default StatusComponent;
