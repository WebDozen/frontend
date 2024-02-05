import { useEffect, useState } from "react";
import Comment from "../../../Comment/Comment";
import {
  Textarea,
  Button,
  Gap,
  GenericWrapper,
  TrashCanMIcon,
  IconButton,
  Skeleton,
} from "../../../ui-kit";
import { useAppDispatch, useAppSelector } from "../../../../services/hook";
import { getCommentsData } from "../../../../services/selectors";
import {
  getTaskCommentsByTaskID,
  postTaskCommentsByTaskID,
} from "../../../../services/actions";
import s from "./TackComments.module.scss";

type Props = { task_id: string };

const TaskComments: React.FC<Props> = ({ task_id }) => {
  const dispatch = useAppDispatch();
  const { taskComments, loading } = useAppSelector(getCommentsData);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    dispatch(getTaskCommentsByTaskID(task_id));
  }, [dispatch]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            postTaskCommentsByTaskID({
              task_id,
              data: { text: text },
            }),
          );
          setText("");
        }}
      >
        <Textarea
          block={true}
          maxRows={5}
          minRows={5}
          placeholder="Введите свой комментарий"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Gap size="s" />
        <GenericWrapper justifyContent="between">
          <Button view={"tertiary"} size="xxs" type="submit">
            Отправить комментарий
          </Button>
          <IconButton
            icon={<TrashCanMIcon color="rgba(9, 12, 37, 0.28)" />}
            size={32}
            onClick={() => setText("")}
          />
        </GenericWrapper>
      </form>
      <Gap size="xl" />
      <Skeleton visible={loading}>
        <ul className={s.commentsList}>
          {taskComments.map((comment) => {
            return (
              <li key={comment.id}>
                <Comment commentData={comment} />
              </li>
            );
          })}
        </ul>
      </Skeleton>
    </>
  );
};

export default TaskComments;
