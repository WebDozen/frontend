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
} from "../ui-kit";
import style from "./Head.module.scss";

const Head = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const status = "orange";

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
      <Typography.TitleResponsive font="styrene" view="small" tag="h1">
        Главная страница
      </Typography.TitleResponsive>
      </div>
      {pathname === "/employee/1" && (status === "green" || status === "red" 
      || status === "grey") ? (
      <Button
          view="accent"
          size="m"
          disabled={false}
          className={style.mainButton}
          type="submit"
        >
          Создать ИПР
        </Button>) : 
        (pathname === "/employee/1" && (status === "orange") || status === "teal" || status === "blue") ? (
          <Button
              view="accent"
              size="m"
              disabled={true}
              className={style.mainButton}
              type="submit"
            >
              Создать ИПР
            </Button>) : <></>}
    </GenericWrapper>
    <Gap size="3xl" />
    </GenericWrapper>
  );
};

export default Head;
