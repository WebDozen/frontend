import { useAppSelector } from "../../services/hook";
import { getCommentsData } from "../../services/selectors";
import Comment from "../Comment/Comment";
import { Gap, Typography, Scrollbar } from "../ui-kit";
import style from "./CommentsList.module.scss";

const CommentsList = () => {
  const { idpComments } = useAppSelector(getCommentsData);

  return (
    <div className={style.block}>
      <Typography.Title view="xsmall" tag="h3" style={{ color: "#0E0E0E" }}>
        Комментарии
      </Typography.Title>
      <Gap size="l" />
      <Scrollbar
        autoHide={false}
        colors={"default"}
        className={style.wrapperList}
      >
        <ul className={style.commentsList}>
          {idpComments.map((comment) => {
            return (
              <li key={comment.id}>
                <Comment commentData={comment} />
              </li>
            );
          })}
        </ul>
      </Scrollbar>
    </div>
  );
};

export default CommentsList;
