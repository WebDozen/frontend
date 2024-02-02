import { useState } from "react";
import {
  Typography,
  Button,
  SidePanelDesktop,
  Divider,
  Gap,
  StatusCustom,
  Link,
} from "../ui-kit";
import style from "./TaskModal.module.scss";
import TabsCustom from "./TabsCustom/TabsCustom";

const fakeProps3 =
  "https://www.ozon.ru/product/upravlenie-konfliktami-v-professionalnoy-deyatelnosti-kitova-evgeniya-tarasovna-skibitskiy-936279298/?asb=OdTz1gqW1ctmGUtnKU7Yvlx7pkJK%252F%252BYrKOYi74Xn9lM%253D&asb2=E4iqgGXPckmF-KmwwiyORMYbBlCp-jQxKfqIZHPQ_nvbp_uyt263oKBvkyav_vUk&avtc=1&avte=2&avts=1705608013&keywords=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0+%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+%D0%BA%D0%BE%D0%BD%D1%84%D0%BB%D0%B8%D0%BA%D1%82%D0%B0%D0%BC%D0%B8";
const fakeProps4: { color: "green"; view: "soft"; text: string } = {
  color: "green",
  view: "soft",
  text: "ВЫПОЛНЕНА",
};

/*const {
  idp : {tasks: tasks}, idp,
  loading,
  error,
} = useAppSelector(getIdpData);*/

const TaskModal = (onCLose: any) => {
  const [isOpen, setIsOpen] = useState(false);
  // const handleOpen = () => setIsOpen(true);
 // const handleClose = () => setIsOpen(false);
  return (
    <>
      {/* <Button onClick={handleOpen}>Открыть сайд-панель</Button> */}

      <SidePanelDesktop
        open={isOpen}
        onClose={onCLose}
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
              Обсудить ключевые моменты в книге «Управление конфликтами в
              профессиональной среде»
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
                <StatusCustom data={fakeProps4} />
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
                Книга
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

              {fakeProps3 ? (
                <Link
                  view="default"
                  className={style.link}
                  href={fakeProps3}
                  target="_blank"
                >
                  {fakeProps3}
                </Link>
              ) : (
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  defaultMargins={false}
                  className={style.text}
                >
                  -
                </Typography.Text>
              )}
            </div>

            <div className={style.bigGap} />

            {<TabsCustom />}
          </div>
        </SidePanelDesktop.Content>
        <SidePanelDesktop.Footer sticky={true}>
          <Button size={"s"} view="primary">
            <Typography.Text
              tag="p"
              weight="medium"
              defaultMargins={false}
              className={style.text}
            >
              Взять в работу
            </Typography.Text>
          </Button>
        </SidePanelDesktop.Footer>
      </SidePanelDesktop>
    </>
  );
};

export default TaskModal;
