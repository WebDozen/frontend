import { useNavigate, useParams } from 'react-router-dom';
import { Button, Gap, SuperEllipse, Typography } from '../../components/ui-kit';
import styles from './Cancel.module.scss';
import books from "../../images/managerNoIprBooks.svg";

const Cancel = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const handleButtonClick: (id: string | undefined) => void = (id) => {
        navigate(`/employee/${id}`);
      };
return(
    <div className={styles.block}>
<Gap size="xl" />
<SuperEllipse imageUrl={books} size={128} />
      <Gap size="2xl" />
          <Typography.Title
            view="xsmall"
            tag="h3"
            defaultMargins={false}
            className={styles.text}
          >
            Вы отменили ИПР сотрудника!
          </Typography.Title>
          <Gap size="2xl" />
          <Button view="accent" className={styles.button} onClick={() => handleButtonClick(id)}>
        Продолжить
          </Button>
          <Gap size="xl" />
    </div>
)}
export default Cancel;