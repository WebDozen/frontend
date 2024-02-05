import { useNavigate, useParams } from 'react-router-dom';
import { Button, Gap, Typography } from '../../components/ui-kit';
import style from './SuccessPage.module.scss';

const SuccessPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const handleButtonClick: (id: string | undefined) => void = (id) => {
        navigate(`/employee/${id}`);
      };

return(
  <>
  <Gap size='xl'/>
<div className={style.block}>
<div className={style.textBlock}>
<div>
<Typography.Text
            tag="p"
            defaultMargins={false}
            color='primary-inverted'
            className={style.text}
         
          >
            Поздравляем!
          </Typography.Text>
          <Gap size="m" />
          <Typography.Text
        view="primary-medium"
        tag="p"
        defaultMargins={false}
        color='primary-inverted'
      >
        Ваш сотрудник выполнил индивидуальный план развития
      </Typography.Text>
      <Gap size="l" />
      <Button view="tertiary" className={style.button} colors="inverted" size="m" onClick={() => handleButtonClick(id)}>
            Продолжить
          </Button>
        </div>
</div>
</div>
</>
)
}

export default SuccessPage