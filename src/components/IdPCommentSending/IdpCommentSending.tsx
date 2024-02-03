import { useState } from "react";
import { Button, Gap, Textarea } from "../ui-kit";
import style from "./IdpCommentSending.module.scss";
import { useAppDispatch } from "../../services/hook";
import { postIdpCommentsByIdpID } from "../../services/actions";

type Props = { idp_id: string | undefined };

const IdpCommentSending: React.FC<Props> = ({ idp_id }) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  return (
    <div className={style.block}>
      <Textarea
        block={true}
        size="s"
        maxRows={5}
        minRows={5}
        placeholder="Введите свой комментарий"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Gap size="l" />
      <Button
        view={"primary"}
        size="xs"
        type="button"
        onClick={() => {
          dispatch(
            postIdpCommentsByIdpID({
              idp_id,
              data: { text: text },
            }),
          );
          setText("");
        }}
      >
        Отправить комментарий
      </Button>
    </div>
  );
};

export default IdpCommentSending;
