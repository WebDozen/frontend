import { Plate, Badge, CheckmarkCircleMIcon, Typography } from "../ui-kit";
import style from "./PlateWrapper.module.scss";

export default function PlateWrapper() {
  const value = {
    badge: "no",
    title: "bold",
    subTitle: "no",
    button: "no",
    width: "nolimit",
    mechanics: "close",
  };

  /* const onChange = (_, payload) => {
        setValue({ ...value, [payload.name]: payload.value });
    };*/

  return (
    <div>
      <Plate
        className={style.plate}
        view="positive"
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
            Оставьте свой комментарий
          </Typography.Text>
        }
        limitContentWidth={value.width === "limit"}
        leftAddons={
          value.badge === "yes" && (
            <Badge
              view="icon"
              iconColor="positive"
              content={<CheckmarkCircleMIcon />}
            />
          )
        }
      >
        Здесь будут отображаться комментарии ко всему плану развития. Если же вы
        хотите оставить комментарий к конкретной задаче, откройте нужную вам
        задачу.
      </Plate>
    </div>
  );
}
