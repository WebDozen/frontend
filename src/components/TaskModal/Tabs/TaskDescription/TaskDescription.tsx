import { Typography } from "../../../ui-kit";
type Props = { children?: string };

const TaskDescription = ({ children }: Props) => {
  return (
    <>
      {children ? (
        <Typography.Text
          tag="p"
          defaultMargins={false}
          style={{
            fontFamily: "SF Pro Text",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          {children}
        </Typography.Text>
      ) : null}
    </>
  );
};

export default TaskDescription;
