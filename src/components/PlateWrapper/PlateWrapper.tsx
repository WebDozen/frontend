import {
  Plate,
  Badge,
  CheckmarkCircleMIcon,
  Typography,
  Button,
  ExclamationCircleMIcon,
} from "../ui-kit";
import style from "./PlateWrapper.module.scss";

interface PlateWrapperProps {
  value: any;
  view: any;
  titleText: string;
  text: string;
}

export default function PlateWrapper({
  value,
  view,
  titleText,
  text,
}: PlateWrapperProps) {
  /* const onChange = (_, payload) => {
        setValue({ ...value, [payload.name]: payload.value });
    };*/

  return (
    <div>
      <Plate
        className={style.plate}
        view={view}
        hasCloser={value.mechanics === "close"}
        title={
          <Typography.Text
            tag="p"
            view="primary-large"
            color="primary"
            defaultMargins={false}
            style={{
              fontFamily: "SF Pro Display",
            }}
          >
            {" "}
            {titleText}
          </Typography.Text>
        }
        limitContentWidth={value.width === "limit"}
        leftAddons={
          value.badge === "yes" && view === "positive" ? (
            <Badge
              view="icon"
              iconColor="positive"
              content={<CheckmarkCircleMIcon />}
            />
          ) : value.badge === "yes" && view === "attention" ? (
            <Badge
              view="icon"
              iconColor="attention"
              content={<ExclamationCircleMIcon />}
            />
          ) : (
            <></>
          )
        }
        buttons={
          value.button === "bottom" && [
            <Button>Матрица компетенций</Button>,
            <Button>Candidate Jorney Map</Button>,
          ]
        }
      >
        {text}
      </Plate>
    </div>
  );
}
