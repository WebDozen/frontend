import { Plate, StatusBadge, Typography, Button } from "../ui-kit";
import style from "./PlateWrapper.module.scss";

interface PlateWrapperProps {
  config: {
    hasCloser: boolean;
    hasBadge?: string;
    hasButton: boolean;
  };
  view: "negative" | "positive" | "attention" | "common" | "custom";
  titleText: string;
  text?: string;
}

export default function PlateWrapper({
  config,
  view,
  titleText,
  text,
}: PlateWrapperProps) {
  /* const onChange = (_, payload) => {
        setValue({ ...value, [payload.name]: payload.value });
    };*/

  return (
    <Plate
      view={view}
      hasCloser={config.hasCloser}
      limitContentWidth = {false}
      title={
        <Typography.Text
          tag="p"
          view="primary-large"
          color="primary"
          defaultMargins={false}
          className={style.text}
        >
          {titleText}
        </Typography.Text>
      }
      leftAddons={
        config.hasBadge ? (
          config.hasBadge === "positive" 
          ? <StatusBadge view="positive-checkmark" />
          : <StatusBadge view="attention-alert" />
        ) : null
      }
      buttons={
        config.hasButton && [
          <Button>Матрица компетенций</Button>,
          <Button>Candidate Jorney Map</Button>,
        ]
      }
    >
      {text}
    </Plate>
  );
}
