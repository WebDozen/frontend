import { Link, Typography, NavLink, BellMIcon, Avatar, GenericWrapper, Gap, Circle, IconButton } from '..';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <GenericWrapper justifyContent='between'>
        <GenericWrapper alignItems='center'>
          <Link underline={false}>
            <GenericWrapper alignItems='center'>
              <div className={style.logo} />
              <Gap size='s' direction='horizontal' />
              <Typography.Title view='xsmall' tag="h2" style={{ color: '#0E0E0E' }}>Alfa People</Typography.Title>
            </GenericWrapper >
          </Link>
          <Gap size='3xl' direction='horizontal' />
          <Gap size='2xs' direction='horizontal' />
          <NavLink fontFamily='Styrene UI' text='Контакты' />
          <Gap size='3xl' direction='horizontal' />
          <Gap size='2xs' direction='horizontal' />
          <NavLink fontFamily='Styrene UI' text='Информация' />
          <Gap size='3xl' direction='horizontal' />
          <Gap size='2xs' direction='horizontal' />
          <NavLink fontFamily='Styrene UI' text='Подразделения' />
        </GenericWrapper>
        <GenericWrapper>
          <fieldset className={style.container}>
            <label className={style.loupe}>
              <input type="text" className={style.input} placeholder='Поиск' />
            </label>
          </fieldset>
          <Gap size='m' direction='horizontal' />
          <IconButton size={40} icon={<Circle size={40} backgroundColor='rgba(15, 25, 55, 0.1)'><BellMIcon color='rgba(14, 14, 14, 1)' /></Circle>} />
          <Gap size='m' direction='horizontal' />
          <IconButton size={40} icon={<Circle size={40} imageUrl={Avatar} />} />
        </GenericWrapper>
      </GenericWrapper>
      <Gap size='5xl' />
    </header>
  )
}

export default Header