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
  StatusComponent,
  Skeleton,
} from "../ui-kit";
import style from "./Head.module.scss";
import styles from "../../pages/AddIdpPage/AddIdpPage.module.scss";
import { TYPE_SLAG_IDP } from "../../utils/constants";
import { getEmployeeData, getIdpData } from "../../services/selectors";
import { useAppSelector } from "../../services/hook";
import ButtonsIdpBlock from "../ButtonsIdpBlock/ButtonsIdpBlock";

const Head = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { idp_id } = useParams();

  const showHead =
    pathname !== `/employee/${id}/idp/${idp_id}/cancel` &&
    pathname !== `/employee/${id}/idp/${idp_id}/success`;

  const {
    employee: {
      idp: { total_idp_count: total_idp_count, status: status },
    },
    loading,
  } = useAppSelector(getEmployeeData);

  const { idp } = useAppSelector(getIdpData);

  const showButtonsBlock =
    idp.mentor == null && pathname === `employee/${id}/idp/${idp_id}`;
  const showButton = pathname === `/employee/${id}` && total_idp_count !== 0;
  const addIdpLocation = pathname === `/employee/${id}/add_idp`;
  const buttonIsDisabled =
    (pathname === `/employee/${id}` &&
      status === TYPE_SLAG_IDP.awaiting_review) ||
    status === TYPE_SLAG_IDP.open ||
    status === TYPE_SLAG_IDP.in_progress;
  let subtitle =
    pathname === "/" || pathname === `/mentor/employee/${id}`
      ? "Главная страница"
      : pathname === `/employee/${id}`
        ? "Карточка сотрудника"
        : addIdpLocation
          ? "Создание ИПР"
          : idp.name === null
            ? ""
            : `${idp.name}`;

  return (
    showHead && (
      <div className={styles.content}>
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

              {pathname === `/employee/${id}/idp/${idp_id}` ? (
                <div className={style.subtitleStatusBlock}>
                  <Skeleton visible={loading}>
                    <Typography.TitleResponsive
                      font="styrene"
                      view="small"
                      tag="h2"
                    >
                      {subtitle}
                    </Typography.TitleResponsive>
                  </Skeleton>
                  <Skeleton visible={loading}>
                    <StatusComponent slag_idp={idp.status.slug} />
                  </Skeleton>
                </div>
              ) : (
                <Typography.TitleResponsive
                  font="styrene"
                  view="small"
                  tag="h2"
                >
                  {subtitle}
                </Typography.TitleResponsive>
              )}
            </div>
            {showButtonsBlock && (
              <div className={style.buttons}>
                <ButtonsIdpBlock />
              </div>
            )}

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
        </GenericWrapper>
      </div>
    )
  );
};

export default Head;
