import {
  Textarea,
  Button,
  Gap,
  GenericWrapper,
  TrashCanMIcon,
  Comment,
} from "../../../ui-kit";
import style from "./TaskComments.module.scss";

const TaskComments = () => {
  const fakeProps = {
    author: "Николай Афанасьев",
    role: "ментор",
    text: "Мы можем периодически проводить встречи и обсуждать прогресс по текущему проекту. А если что-то будет вызывать вопросы, оставляй свои комментарии, я помогу разобраться!",
    date: "20.01.2024",
  };

  return (
    <form>
      <Textarea
        block={true}
        maxRows={5}
        minRows={5}
        placeholder="Введите свой комментарий"
      />
      <Gap size="s" />
      <GenericWrapper justifyContent="between">
        <Button view={"tertiary"} size="xxs" type="submit">
          Отправить комментарий
        </Button>
        <button className={style.button} type="button">
          {<TrashCanMIcon color="rgba(9, 12, 37, 0.28)" />}
        </button>
      </GenericWrapper>
      <Gap size="xl" />
      <Comment commentData={fakeProps} />
    </form>
  );
};

export default TaskComments;
