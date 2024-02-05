import type { TypeComment } from "../../services/comments/types";
import { Gap, GenericWrapper, Typography } from "../ui-kit";
import style from "./Comment.module.scss";

interface CommentProps {
  commentData: TypeComment;
}

const Comment = ({ commentData }: CommentProps) => {
  const {
    text,
    pub_date,
    author: { first_name, last_name, middle_name, is_mentor = false },
  } = commentData;

  const fullName = `${first_name} ${middle_name} ${last_name}`;

  return (
    <GenericWrapper column={true}>
      <GenericWrapper>
        <Typography.Text
          tag="p"
          view="secondary-large"
          defaultMargins={false}
          className={style.author}
        >
          {fullName}
        </Typography.Text>
        <Gap size="xs" direction="horizontal" />
        {is_mentor ? (
          <Typography.Text
            tag="p"
            view="secondary-large"
            defaultMargins={false}
            className={style.role}
          >
            ментор
          </Typography.Text>
        ) : null}
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
        {new Date(pub_date).toLocaleDateString("ru-RU")}
      </Typography.Text>
    </GenericWrapper>
  );
};

export default Comment;
