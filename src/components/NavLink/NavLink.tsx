import { Link, Typography } from "../ui-kit";

//в разработке....
type Props = {
  fontFamily?: string;
  text?: any;
  underline?: boolean;
};

const NavLink = ({ fontFamily, text, underline }: Props) => {
  return (
    <Link underline={underline}>
      <Typography.Text
        view="primary-medium"
        tag="p"
        defaultMargins={false}
        style={{ fontFamily: fontFamily }}
      >
        {text}
      </Typography.Text>
    </Link>
  );
};

export default NavLink;
