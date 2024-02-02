import { useNavigate, useParams } from 'react-router-dom';
import { Button, Gap, Typography } from '../../components/ui-kit';
import style from './CancelPage.module.scss';

const CancelPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const handleButtonClick: (id: string | undefined) => void = (id) => {
        navigate(`/employee/${id}`);
      };

return(
<div className={style.block}>
<div className={style.textBlock}>
<div>
          <Typography.Title
            view="xlarge"
            tag="h3"
            defaultMargins={false}
            color='primary-inverted'
            className={style.text}
          >
            Поздравляем!
          </Typography.Title>
          <Gap size="m" />
          <Typography.Text
        view="primary-medium"
        tag="p"
        defaultMargins={false}
        className={style.text}
      >
        Ваш сотрудник выполнил индивидуальный план развития
      </Typography.Text>
      <Gap size="l" />
      <Button view="tertiary" className={style.button} onClick={() => handleButtonClick(id)}>
            Продолжить
          </Button>
        </div>
</div>
</div>
)
}

export default CancelPage;