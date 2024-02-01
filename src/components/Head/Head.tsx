import { useNavigate, useParams } from "react-router-dom";
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
import { TYPE_SLAG_IDP } from "../../utils/constants";
import { getEmployeeData } from "../../services/selectors";
import { useAppSelector } from "../../services/hook";

const Head = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();

  const {
    employee: {
      idp: { total_tasks_count: total_tasks_count, status: status },
    },
    loading,
    error,
  } = useAppSelector(getEmployeeData);

  const showButton = pathname === `/employee/${id}` && total_tasks_count !== 0;
  const addIdpLocation = pathname === `/employee/${id}/add-idp`;
  const buttonIsDisabled =
    status === TYPE_SLAG_IDP.awaiting_review ||
    status === TYPE_SLAG_IDP.open ||
    status === TYPE_SLAG_IDP.in_progress;
  let subtitle =
    pathname === `/employee/${id}`
      ? "Карточка сотрудника"
      : pathname === "/"
        ? "Главная страница"
        : pathname === `employee/${id}/idp/1`
          ? "Название ИПР"
          : addIdpLocation
            ? "Создание ИПР"
            : "Главная страница";

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
            onClick={(e: any) => {
              navigate(`/employee/${id}/add_idp`);
            }}
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
