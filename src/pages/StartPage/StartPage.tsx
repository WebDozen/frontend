import {
  Gap,
  GenericWrapper,
  Circle,
  Typography,
  ChevronRightShiftRightMIcon,
  UserRoundedXxlIcon,
  Underlay,
  PureCell,
} from "../../components/ui-kit";
import Background from "./../../images/background.jpg";
import s from "./StartPage.module.scss";
import { useAppDispatch } from "../../services/hook";
import { getUserEmployeeByID, handleSetUser } from "../../services/actions";
import { useNavigate } from "react-router-dom";
import USERS from "./../../utils/users.json";

const StartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickUser: (user: {
    first_name: string;
    middle_name: string;
    last_name: string;
    role: string;
    token: string;
    id: number;
    is_mentor?: string;
  }) => void = async (user) => {
    dispatch(handleSetUser(user));
    if (user.role !== "manager") {
      await dispatch(getUserEmployeeByID(`${user.id}`));
    }
    navigate("/");
  };

  return (
    <div
      className={s.container}
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Underlay
        backgroundColor="white"
        borderRadius="l"
        padding={{
          top: "2xl",
          right: "l",
          bottom: "2xl",
          left: "l",
        }}
        shadow="shadow-m"
      >
        <PureCell>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Title tag="h2" view="small" font="styrene">
                Выбрать роль, в рамках прототипа
              </Typography.Title>
              <Gap size="m" />
              <ul className={s.list}>
                {USERS.sort((a, b) => a.id - b.id).map((user) => {
                  return (
                    <li
                      className={s.listItem}
                      key={user.id}
                      onClick={() => handleClickUser(user)}
                    >
                      <GenericWrapper
                        alignItems="center"
                        justifyContent="between"
                      >
                        <GenericWrapper>
                          <Circle size={40}>
                            <UserRoundedXxlIcon />
                          </Circle>
                          <Gap direction="horizontal" size="l" />
                          <GenericWrapper column={true} justifyContent="center">
                            <Typography.Text
                              tag="p"
                              view="secondary-large"
                              weight="bold"
                              defaultMargins={false}
                            >
                              {`${user.first_name} ${user.middle_name} ${user.last_name}`}
                            </Typography.Text>
                            <Gap size="xs" direction="horizontal" />
                            <Typography.Text
                              tag="p"
                              color="secondary"
                              view="secondary-large"
                              defaultMargins={false}
                            >
                              {user.role === "manager"
                                ? "Руководитель"
                                : "Линейный сотрудник"}
                            </Typography.Text>
                          </GenericWrapper>
                        </GenericWrapper>
                        <ChevronRightShiftRightMIcon />
                      </GenericWrapper>
                    </li>
                  );
                })}
              </ul>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>
      </Underlay>
    </div>
  );
};

export default StartPage;
