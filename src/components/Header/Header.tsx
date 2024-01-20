import style from './Header.module.scss';
import { BellMIcon } from '@alfalab/icons-glyph/BellMIcon';
import avatar from '../../images/avatar.svg';
import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link underline={false}>
          <div className={style.logo__link}>
            <div className={style.logo}></div>
            <Typography.Title view='xsmall' tag="h2">Alfa People</Typography.Title>
          </div>
        </Link>
        <Link underline={false}>
          <Typography.Text view='primary-medium' tag='p' defaultMargins={false} style={{ fontFamily: 'Styrene UI' }}>Контакты</Typography.Text>
        </Link>
        <Link underline={false}>
          <Typography.Text view='primary-medium' tag='p' defaultMargins={false} style={{ fontFamily: 'Styrene UI' }}>Информация</Typography.Text>
        </Link>
        <Link underline={false}>
          <Typography.Text view='primary-medium' tag='p' defaultMargins={false} style={{ fontFamily: 'Styrene UI' }}>Подразделения</Typography.Text>
        </Link>
      </nav>
      <div className={style.box}>
        <fieldset className={style.container}>
          <label className={style.loupe}>
            <input type="text" className={style.input} placeholder='Поиск' />
          </label>
        </fieldset>
        <div className={style.bell}><BellMIcon /></div>
        <img src={avatar} alt="Аватар сотрудника" className={style.avatar} />
      </div>
    </header>
  )
}

export default Header