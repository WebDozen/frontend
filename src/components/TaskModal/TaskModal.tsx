import {
  Typography,
  Button,
  SidePanelDesktop,
  Gap,
  Link,
  StatusComponent,
} from "../ui-kit";
import style from "./TaskModal.module.scss";
import TabsCustom from "./TabsCustom/TabsCustom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getIdpData, getTasksSidePanelData } from "../../services/selectors";
import {
  handleCloseSidePanel,
  patchTasksStatusByID,
} from "../../services/actions";

const TaskModal: React.FC = () => {
  const { is_open_side_panel, task } = useAppSelector(getTasksSidePanelData);
  const {
    idp: { id: idp_id },
  } = useAppSelector(getIdpData);
  const {
    status: { slug },
  } = task;

  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(handleCloseSidePanel());

  const setTextButton = () =>
    slug === "open"
      ? "Взять в работу"
      : slug === "completed"
        ? "Вернуть в работу"
        : slug === "in_progress"
          ? "Выполнена"
          : "Взять в работу";

  const handleStatusButton = () => {
    let newStatus = "none";
    if (slug === "open") {
      newStatus = "in_progress";
    }
    if (slug === "completed") {
      newStatus = "in_progress";
    }
    if (slug === "in_progress") {
      newStatus = "completed";
    }
    dispatch(
      patchTasksStatusByID({
        idp_id,
        task_id: task.id,
        data: {
          status: newStatus,
        },
      }),
    );
  };

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
        <Gap size="xl" />
        <div>
          <Typography.Title tag="h3" view="xsmall">
            {task.name}
          </Typography.Title>
          <Gap size="xl" />

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

          <Gap size="2xl" />

          <TabsCustom description={task.description} task_id={`${task.id}`} />
        </div>
      </SidePanelDesktop.Content>
      <SidePanelDesktop.Footer sticky={true}>
        <Button
          size={"s"}
          view={slug === "completed" ? "secondary" : "primary"}
          onClick={() => handleStatusButton()}
        >
          {setTextButton()}
        </Button>
      </SidePanelDesktop.Footer>
    </SidePanelDesktop>
  );
};

export default TaskModal;
