import { useAppSelector } from "../../services/hook";
import { getIdpData } from "../../services/selectors";
import { Gap, Skeleton, Typography } from "../ui-kit";
import style from "./PlanDescription.module.scss";

export default function PlanDescription() {
  const {
    idp,
    loading,
    error,
  } = useAppSelector(getIdpData);

  return (
    <div className={style.block}>
      <Typography.Title view="xsmall" tag="h3" style={{ color: "#0E0E0E" }}>
        Описание плана развития
      </Typography.Title>
      <Gap size="s" />
      <Skeleton visible={loading}>
      <Typography.Text
        view="primary-small"
        tag="p"
        defaultMargins={false}
        color="primary"
        style={{ fontFamily: "SF Pro Text" }}
      > {`${idp.description}`}
      </Typography.Text>
      </Skeleton>
      <Gap size="s" />

    </div>
  );
}
