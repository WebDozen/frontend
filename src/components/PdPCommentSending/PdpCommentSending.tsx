import { Button, Gap, Textarea } from ".."
import style from "./PdpCommentSending.module.scss"

export default function PdpCommentSending() {
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
  )
}
