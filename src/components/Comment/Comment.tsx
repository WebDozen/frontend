import { Gap, GenericWrapper, Typography } from "../ui-kit";
import style from "./Comment.module.scss";

interface CommentProps {
  author: string;
  role: string;
  text: string;
  date: string;
}

const Comment = ({ author, role, text, date }: CommentProps) => {
  return (
    <GenericWrapper column={true}>
      <GenericWrapper>
        <Typography.Text
          tag="p"
          view="secondary-large"
          defaultMargins={false}
          className={style.author}
        >
          {author}
        </Typography.Text>
        <Gap size="xs" direction="horizontal" />
        <Typography.Text
          tag="p"
          view="secondary-large"
          defaultMargins={false}
          className={style.role}
        >
          {role}
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
        {text}
      </Typography.Text>
      <Gap size="xs" />
      <Typography.Text
        tag="p"
        view="secondary-large"
        defaultMargins={false}
        className={style.date}
      >
        {date}
      </Typography.Text>
    </GenericWrapper>
  );
};

export default Comment;
