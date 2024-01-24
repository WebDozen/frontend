import { Gap, GenericWrapper, Typography } from ".."

interface CommentProps {
  author: string
  role: string
  text: string
  data: string
}

const Comment = ({ author, role, text, data }: CommentProps) => {
  return (
    <GenericWrapper column={true}>
      <GenericWrapper>
        <Typography.Text
          tag="p"
          view="secondary-large"
          defaultMargins={false}
          style={{ fontWeight: 600, fontFamily: "SF Pro Text" }}
        >
          {author}
        </Typography.Text>
        <Gap size="xs" direction="horizontal" />
        <Typography.Text
          tag="p"
          view="secondary-large"
          defaultMargins={false}
          style={{
            fontFamily: "SF Pro Text",
            color: "rgba(4, 4, 21, 0.47)",
          }}
        >
          {role}
        </Typography.Text>
      </GenericWrapper>
      <Gap size="2xs" />
      <Typography.Text
        tag="p"
        view="secondary-medium"
        color="primary"
        defaultMargins={false}
        style={{
          fontFamily: "SF Pro Text",
        }}
      >
        {text}
      </Typography.Text>
      <Gap size="2xs" />
      <Typography.Text
        tag="p"
        view="secondary-large"
        defaultMargins={false}
        style={{
          fontFamily: "SF Pro Text",
          color: "rgba(4, 4, 21, 0.47)",
        }}
      >
        {data}
      </Typography.Text>
    </GenericWrapper>
  )
}

export default Comment
