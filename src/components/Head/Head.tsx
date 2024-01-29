import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  ArrowBackMIcon,
  GenericWrapper,
  Circle,
  Gap,
  Typography,
  Link,
  Button,
  StatusCustom,
} from "../ui-kit";
import style from "./Head.module.scss";
import { STATUSES } from "../../utils/constants";

const Head = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const status: STATUSES = STATUSES.Review;
  const showButton = pathname === "/employee/1" ? true : false;
  const buttonIsDisabled =
    (status as STATUSES) === "orange" ||
    (status as STATUSES) === "teal" ||
    (status as STATUSES) === "blue";
  let subtitle =
    pathname === "/employee/1"
      ? "Карточка сотрудника"
      : pathname === "/"
        ? "Главная страница"
        : pathname === "/idp/1"
          ? "Название ИПР"
          : "";

  const statusData: { color: "green"; view: "contrast"; text: string } = {
    color: "green",
    view: "contrast",
    text: "ВЫПОЛНЕН",
  };

  return (
    <GenericWrapper column={true}>
      <GenericWrapper column={false} className={style.container}>
        <div className={style.LeftContainer}>
          <GenericWrapper>
            <Link
              onClick={() => navigate(-1)}
              className={style.linkBack}
              underline={false}
              leftAddons={
                <Circle
                  size={32}
                  mainSize={24}
                  children={<ArrowBackMIcon color="black" />}
                />
              }
            >
              Назад
            </Link>
          </GenericWrapper>
          <Gap size={"2xl"} />
          <Typography.Title font="styrene" view="large" tag="h1">
            Индивидуальный план развития
          </Typography.Title>
          <Gap size={"xl"} />
          <Gap size={"2xl"} />
          {pathname === "/idp/1" ? (
            <div className={style.subtitleStatusBlock}>
              <Typography.TitleResponsive font="styrene" view="small" tag="h1">
                {subtitle}
              </Typography.TitleResponsive>
              <StatusCustom data={statusData} />
            </div>
          ) : (
            <Typography.TitleResponsive font="styrene" view="small" tag="h1">
              {subtitle}
            </Typography.TitleResponsive>
          )}
        </div>
        {showButton && (
          <Button
            view="accent"
            size="m"
            disabled={buttonIsDisabled}
            className={style.mainButton}
            type="button"
          >
            Создать ИПР
          </Button>
        )}
      </GenericWrapper>
      <Gap size="3xl" />
    </GenericWrapper>
  );
};

export default Head;
