import {
  Typography,
  Button,
  SidePanelDesktop,
  Divider,
  Gap,
  Link,
  StatusComponent,
} from "../ui-kit";
import style from "./TaskModal.module.scss";
import TabsCustom from "./TabsCustom/TabsCustom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getTasksSidePanelData } from "../../services/selectors";
import { handleCloseSidePanel } from "../../services/actions";

const TaskModal: React.FC = () => {
  const { is_open_side_panel, task } = useAppSelector(getTasksSidePanelData);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(handleCloseSidePanel());
  return (
    <SidePanelDesktop
      open={is_open_side_panel}
      onClose={handleClose}
      className={style.modal}
    >
      <SidePanelDesktop.Header
        sticky={true}
        hasCloser={true}
        className={style.header}
      >
        <Typography.Title tag="h2" weight="bold" className={style.title}>
          Задача
        </Typography.Title>
      </SidePanelDesktop.Header>
      <SidePanelDesktop.Content>
        <Divider className={style.divider} />
        <Gap size="xl" />
        <div>
          <Typography.Title tag="h3" view="xsmall">
            {task.name}
          </Typography.Title>
          <div className={style.gap} />

          <div className={style.box}>
            <Typography.Text
              tag="p"
              defaultMargins={false}
              view="secondary-large"
              color="secondary"
              className={style.text}
            >
              Статус задачи
            </Typography.Text>
            <div>
              <StatusComponent slag_task={task.status.slug} />
            </div>

            <Typography.Text
              tag="p"
              defaultMargins={false}
              view="secondary-large"
              color="secondary"
              className={style.text}
            >
              Тип
            </Typography.Text>

            <Typography.Text
              tag="p"
              view="primary-small"
              defaultMargins={false}
              className={style.text}
            >
              {task.type}
            </Typography.Text>

            <Typography.Text
              tag="p"
              defaultMargins={false}
              color="secondary"
              view="secondary-large"
              className={style.text}
            >
              Источник
            </Typography.Text>

            {task.source.includes("http") ? (
              <Link
                view="default"
                className={style.link}
                href={task.source}
                target="_blank"
              >
                {task.source}
              </Link>
            ) : (
              <Typography.Text
                tag="p"
                view="primary-small"
                defaultMargins={false}
                className={style.text}
              >
                {task.source}
              </Typography.Text>
            )}
          </div>

          <div className={style.bigGap} />

          <TabsCustom />
        </div>
      </SidePanelDesktop.Content>
      <SidePanelDesktop.Footer sticky={true}>
        <Button size={"s"} view="primary">
          Взять в работу
        </Button>
      </SidePanelDesktop.Footer>
    </SidePanelDesktop>
  );
};

export default TaskModal;
