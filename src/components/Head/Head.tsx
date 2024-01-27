import { useNavigate } from "react-router-dom";
import {
  ArrowBackMIcon,
  GenericWrapper,
  Circle,
  Gap,
  Typography,
  Link,
} from "../ui-kit";
import style from "./Head.module.scss";

const Head = () => {
  const navigate = useNavigate();

  return (
    <GenericWrapper column={true} className={style.container}>
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
          Кнопка
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
      <Gap size="3xl" />
    </GenericWrapper>
  );
};

export default Head;
