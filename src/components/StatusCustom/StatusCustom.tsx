import { Status, Typography } from ".."

interface Props {
  data: {
    text: string
    color: "green" | "orange" | "red" | "blue" | "grey" | "teal"
    view?: "contrast" | "soft"
  }
}

const StatusCustom = ({ data }: Props) => {
  return (
    <Status color={data.color} view={data.view}>
      <Typography.Text
        tag="p"
        weight="bold"
        defaultMargins={false}
        style={{
          fontFamily: "SF Pro Text",
          fontSize: "11px",
          lineHeight: "16px",
        }}
      >
        {data.text}
      </Typography.Text>
    </Status>
  )
}

export default StatusCustom
