import Comment from "../../../Comment/Comment";
import {
  Textarea,
  Button,
  Gap,
  GenericWrapper,
  TrashCanMIcon,
  IconButton,
} from "../../../ui-kit";

const TaskComments = () => {
  const fakeProps = {
    id: 10,

    text: "Мы можем периодически проводить встречи и обсуждать прогресс по текущему проекту. А если что-то будет вызывать вопросы, оставляй свои комментарии, я помогу разобраться!",
    pub_date: "20.01.2024",
    author: {
      id: 10,
      first_name: "Николай",
      last_name: "Николаев",
      middle_name: "Николаевич",
      is_mentor: true,
    },
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
        <IconButton
          icon={<TrashCanMIcon color="rgba(9, 12, 37, 0.28)" />}
          size={32}
        />
      </GenericWrapper>
      <Gap size="xl" />
      <Comment commentData={fakeProps} />
    </form>
  );
};

export default TaskComments;
