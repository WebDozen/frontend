import { Gap, GenericWrapper, Typography } from "../ui-kit";
import style from "./Comment.module.scss";

interface CommentProps {
  commentData: {
    author: string;
    role: string;
    text: string;
    date: string;
  };
}

const Comment = ({ commentData }: CommentProps) => {
  return (
    <GenericWrapper column={true}>
      <GenericWrapper>
        <Typography.Text
          tag="p"
          view="secondary-large"
          defaultMargins={false}
          className={style.author}
        >
          {commentData.author}
        </Typography.Text>
        <Gap size="xs" direction="horizontal" />
        <Typography.Text
          tag="p"
          view="secondary-large"
          defaultMargins={false}
          className={style.role}
        >
          {commentData.role}
        </Typography.Text>
      </GenericWrapper>
      <Gap size="xs" />
      <Typography.Text
        tag="p"
        view="secondary-medium"
        color="primary"
        defaultMargins={false}
        className={style.text}
      >
        {commentData.text}
      </Typography.Text>
      <Gap size="xs" />
      <Typography.Text
        tag="p"
        view="secondary-large"
        defaultMargins={false}
        className={style.date}
      >
        {commentData.date}
      </Typography.Text>
    </GenericWrapper>
  );
};

export default Comment;
