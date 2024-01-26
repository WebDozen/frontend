import { Button, Gap, Textarea } from "../ui-kit";
import style from "./IdpCommentSending.module.scss";

const IdpCommentSending = () => {
  return (
    <div className={style.block}>
      <Textarea
        block={true}
        size="s"
        maxRows={5}
        minRows={5}
        placeholder="Введите свой комментарий"
      />
      <Gap size="l" />
      <Button view={"primary"} size="xs" type="submit">
        Отправить комментарий
      </Button>
    </div>
  );
};

export default IdpCommentSending;
