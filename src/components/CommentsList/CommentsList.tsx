import { Gap, Typography, Comment, Scrollbar } from "../ui-kit";
import style from "./CommentsList.module.scss";

type Props = { children: string };

const fakeProps = {
  author: "Николай Афанасьев",
  role: "ментор",
  text: "Мы можем периодически проводить встречи и обсуждать прогресс по текущему проекту. А если что-то будет вызывать вопросы, оставляй свои комментарии, я помогу разобраться!",
  date: "20.01.2024",
};

const CommentsList = ({ children }: Props) => {
  return (
    <div className={style.block}>
      <div className={style.overlay}>
        <Typography.Title view="xsmall" tag="h3" style={{ color: "#0E0E0E" }}>
          Комментарии
        </Typography.Title>
        <Gap size="l" />
        <div style={{ height: 282, margin: "var(--gap-xs-neg)" }}>
          <Scrollbar style={{ height: "100%" }} autoHide={false}>
            <ul className={style.commentsList}>
              {new Array(6).fill(null).map((_, idx) => {
                return (
                  <li>
                    <Comment
                      author={fakeProps.author}
                      role={fakeProps.role}
                      text={fakeProps.text}
                      date={fakeProps.date}
                    />
                  </li>
                );
              })}
            </ul>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
