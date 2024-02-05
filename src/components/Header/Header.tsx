import {
  Link,
  Typography,
  NavLink,
  BellMIcon,
  GenericWrapper,
  Gap,
  Circle,
  IconButton,
} from "../ui-kit";
import avatar from "../../images/avatar.svg";
import style from "./Header.module.scss";
import logo from "../../images/logo.svg";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { idp_id } = useParams();
  const showButtomGap =
    pathname !== `/employee/${id}/idp/${idp_id}/cancel` &&
    pathname !== `/employee/${id}/idp/${idp_id}/success`;
  const navigate = useNavigate();

  return (
    <header>
      <div className={style.content}>
        <GenericWrapper justifyContent="between">
          <GenericWrapper alignItems="center">
            <Link
              onClick={() => navigate("/start", { replace: true })}
              underline={false}
              leftAddons={
                <>
                  <Circle imageUrl={logo} size={40} />
                  <div className={style.gapCustom} />
                </>
              }
              className={style.linkCustom}
            >
              <Typography.Title view="xsmall" tag="h2" color="primary">
                Alfa People
              </Typography.Title>
            </Link>
            <Gap size="3xl" direction="horizontal" />
            <Gap size="2xs" direction="horizontal" />
            <NavLink fontFamily="Styrene UI" text="Контакты" />
            <Gap size="3xl" direction="horizontal" />
            <Gap size="2xs" direction="horizontal" />
            <NavLink fontFamily="Styrene UI" text="Информация" />
            <Gap size="3xl" direction="horizontal" />
            <Gap size="2xs" direction="horizontal" />
            <NavLink fontFamily="Styrene UI" text="Подразделения" />
          </GenericWrapper>
          <GenericWrapper>
            <fieldset className={style.container}>
              <label className={style.loupe}>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Поиск"
                />
              </label>
            </fieldset>
            <Gap size="m" direction="horizontal" />
            <IconButton
              size={40}
              icon={
                <Circle size={40} backgroundColor="rgba(15, 25, 55, 0.1)">
                  <BellMIcon color="rgba(14, 14, 14, 1)" />
                </Circle>
              }
            />
            <Gap size="m" direction="horizontal" />
            <IconButton
              size={40}
              icon={<Circle size={40} imageUrl={avatar} />}
            />
          </GenericWrapper>
        </GenericWrapper>
        {showButtomGap && <Gap size="5xl" />}
      </div>
    </header>
  );
};

export default Header;
