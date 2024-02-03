import {
  NavLink,
  Typography,
  Grid,
  GenericWrapper,
  SuperEllipse,
  TelegramMIcon,
  VkMIcon,
  YoutubeMIcon,
  Gap,
  Link,
  Divider,
  Button,
} from "../ui-kit";
import FooterLogo from "../../images/footer_logo.svg";
import style from "./Footer.module.scss";
import styles from "../../pages/AddIdpPage/AddIdpPage.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <Divider className={style.dividerCustom} />
        <Gap size="4xl" />
        <div>
          <Grid.Row gutter={{ mobile: 0, desktop: 0 }}>
            <Grid.Col width={{ desktop: { m: 9 } }}>
              <Grid.Row gutter={{ mobile: 0, desktop: 0 }}>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Главная" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Подразделения" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="SAP АХД" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 3 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="WSS Docs" />
                  </div>
                </Grid.Col>
              </Grid.Row>
              <div className={style.gapCustom} />
              <Grid.Row gutter={{ mobile: 0, desktop: 0 }}>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Сервисы" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Всё о работе" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Заказ HR-услуг" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 3 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Карьера в банке" />
                  </div>
                </Grid.Col>
              </Grid.Row>
              <div className={style.gapCustom} />
              <Grid.Row gutter={{ mobile: 0, desktop: 0 }}>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Контакты" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Академия" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 2 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Заказ IT-услуг" />
                  </div>
                </Grid.Col>
                <Grid.Col width={{ desktop: { m: 3 } }}>
                  <div>
                    <NavLink fontFamily="SF Pro Text" text="Сайт Альфа Банка" />
                  </div>
                </Grid.Col>
              </Grid.Row>
            </Grid.Col>
            <Grid.Col width={{ desktop: { m: 3 } }}>
              <div>
                <GenericWrapper>
                  <Link
                    underline={false}
                    leftAddons={
                      <>
                        <SuperEllipse size={48} imageUrl={FooterLogo} />
                        <div className={style.gapCustomMargin} />
                      </>
                    }
                  >
                    <Typography.Text
                      view="primary-medium"
                      tag="p"
                      defaultMargins={false}
                      color="primary"
                      className={style.text}
                    >
                      Мобильное приложение
                    </Typography.Text>
                    <Gap size="2xs" />
                    <Typography.Text
                      view="primary-small"
                      tag="p"
                      defaultMargins={false}
                      color="primary"
                      className={style.text}
                    >
                      Для iOS и Android
                    </Typography.Text>
                  </Link>
                </GenericWrapper>
                <Gap size="xl" />
                <GenericWrapper>
                  <Link underline={false}>
                    <SuperEllipse
                      size={40}
                      backgroundColor="rgba(30, 43, 68, 0.08)"
                    >
                      <TelegramMIcon color="rgba(4, 4, 19, 0.55)" />
                    </SuperEllipse>
                  </Link>
                  <Gap direction="horizontal" size="xl" />
                  <Link underline={false}>
                    <SuperEllipse
                      size={40}
                      backgroundColor="rgba(30, 43, 68, 0.08)"
                    >
                      <VkMIcon color="rgba(4, 4, 19, 0.55)" />{" "}
                    </SuperEllipse>
                  </Link>
                  <Gap direction="horizontal" size="xl" />
                  <Link underline={false}>
                    <SuperEllipse
                      size={40}
                      backgroundColor="rgba(30, 43, 68, 0.08)"
                    >
                      <YoutubeMIcon color="rgba(4, 4, 19, 0.55)" />
                    </SuperEllipse>
                  </Link>
                </GenericWrapper>
              </div>
            </Grid.Col>
          </Grid.Row>
        </div>
        <Gap size="4xl" />
        <Divider className={style.divider} />
        <Gap size="xl" />
        <GenericWrapper alignItems="center" justifyContent="between">
          <GenericWrapper>
            <GenericWrapper column={true}>
              <Link underline={false}>
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  defaultMargins={false}
                  color="secondary"
                >
                  011-1111— Help Desk | IT-поддержка
                </Typography.Text>
              </Link>
              <Gap size="xs" />
              <Link underline={false}>
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  defaultMargins={false}
                  color="secondary"
                >
                  013-3777—Human Help | HR-поддержка
                </Typography.Text>
              </Link>
            </GenericWrapper>
          </GenericWrapper>
          <div>
            <Button size="xxs" view="secondary" className={style.button}>
              Помощь
            </Button>
          </div>
        </GenericWrapper>
      </div>
    </footer>
  );
};

export default Footer;
