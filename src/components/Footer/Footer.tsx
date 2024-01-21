import {
  NavLink, Typography, Grid, GenericWrapper, SuperEllipse, TelegramMIcon,
  VkMIcon, YoutubeMIcon, Gap, FooterLogo, Link, Divider, Button
} from "..";
import style from "./Footer.module.scss";

const Footer = () => {
  const styleCol: {
    [key: string]: string;
  } = {
    lineHeight: '128px',
    color: 'var(--color-light-text-secondary)',
    background: 'var(--color-light-specialbg-secondary-transparent)',
    borderRadius: '8px',
    textAlign: 'start',
  };
  //вложенная таблица грид с lineHeight: '24px'
  const styleColl: {
    [key: string]: string;
  } = {
    lineHeight: '24px',
    color: 'var(--color-light-text-secondary)',
    background: 'var(--color-light-specialbg-secondary-transparent)',
    borderRadius: '8px',
    textAlign: 'start',
  };
  const styleRow: {
    [key: string]: string;
  } = {
    background: 'var(--color-light-bg-primary)',
    padding: '0px 0px',
    marginTop: '0px',
  };
  const styleWrapper: {
    [key: string]: string;
  } = {
    background: 'var(--color-light-border-primary)',
    margin: '0',
  };

  return (
    <footer>
      <Divider className={style.divider} />
      <Gap size="4xl" />
      <div style={styleWrapper}>
        <div style={styleRow}>
          <Grid.Row gutter={{ mobile: 0, desktop: 0 }}>
            <Grid.Col width={{ desktop: { m: 9 } }}>
              <div style={styleCol}>
                <div style={styleWrapper}>
                  <div style={styleRow}>
                    <Grid.Row gutter={{ mobile: 0, desktop: 0 }}>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Главная' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Подразделения' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='SAP АХД' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 3 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='WSS Docs' />
                        </div>
                      </Grid.Col>
                    </Grid.Row>
                    <div style={{ height: '28px' }}></div>
                    <Grid.Row gutter={{ mobile: 0, desktop: 0 }}>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Сервисы' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Всё о работе' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Заказ HR-услуг' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 3 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Карьера в банке' />
                        </div>
                      </Grid.Col>
                    </Grid.Row>
                    <div style={{ height: '28px' }}></div>
                    <Grid.Row gutter={{ mobile: 0, desktop: 0 }}>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Контакты' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Академия' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 2 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Заказ IT-услуг' />
                        </div>
                      </Grid.Col>
                      <Grid.Col width={{ desktop: { m: 3 } }}>
                        <div style={styleColl}>
                          <NavLink fontFamily='SF Pro Text' text='Сайт Альфа Банка' />
                        </div>
                      </Grid.Col>
                    </Grid.Row>
                  </div>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col width={{ desktop: { m: 3 } }}>
              <div style={styleCol}>
                <GenericWrapper>
                  <Link underline={false} leftAddons={<><SuperEllipse size={48} imageUrl={FooterLogo} /><div style={{ margin: '0 7px 0 0' }}></div></>}>
                    <Typography.Text view='primary-medium' tag='p' defaultMargins={false} color="primary" style={{ fontFamily: 'SF Pro Text' }}>Мобильное приложение</Typography.Text>
                    <Gap size="2xs" />
                    <Typography.Text view='primary-small' tag='p' defaultMargins={false} color="primary" style={{ fontFamily: 'SF Pro Text' }}>Для iOS и Android</Typography.Text>
                  </Link>
                </GenericWrapper>
                <Gap size="xl" />
                <GenericWrapper>
                  <div style={{ lineHeight: '40px' }}>
                    <Link underline={false}>
                      <SuperEllipse size={40} backgroundColor='rgba(30, 43, 68, 0.08)'>
                        <TelegramMIcon color='rgba(4, 4, 19, 0.55)' />
                      </SuperEllipse>
                    </Link>
                    <Gap direction='horizontal' size="xl" />
                    <Link underline={false}>
                      <SuperEllipse size={40} backgroundColor='rgba(30, 43, 68, 0.08)'>
                        <VkMIcon color='rgba(4, 4, 19, 0.55)' /> </SuperEllipse>
                    </Link>
                    <Gap direction='horizontal' size="xl" />
                    <Link underline={false}>
                      <SuperEllipse size={40} backgroundColor='rgba(30, 43, 68, 0.08)'>
                        <YoutubeMIcon color='rgba(4, 4, 19, 0.55)' /></SuperEllipse>
                    </Link>
                  </div>
                </GenericWrapper>
              </div>
            </Grid.Col>
          </Grid.Row>
        </div>
      </div>
      <Gap size="4xl" />
      <Divider className={style.divider} />
      <Gap size="xl" />
      <GenericWrapper alignItems='center' justifyContent='between'>
        <GenericWrapper>
          <GenericWrapper column={true}>
            <Link underline={false}>
              <Typography.Text view='primary-small' tag='p' defaultMargins={false} color="secondary">011-1111— Help Desk | IT-поддержка</Typography.Text>
            </Link>
            <Gap size="xs" />
            <Link underline={false}>
              <Typography.Text view='primary-small' tag='p' defaultMargins={false} color="secondary">013-3777—Human Help | HR-поддержка</Typography.Text>
            </Link>
          </GenericWrapper>
        </GenericWrapper>
        <div>
          <Button size='xxs' view="secondary" className={style.button}>Помощь</Button>
        </div>
      </GenericWrapper>
    </footer >
  )
}

export default Footer