import {
  Typography,
  Button,
  SidePanelDesktop,
  Divider,
  Gap,
  StatusCustom,
  Link,
} from ".."
import style from "./TaskModal.module.scss"
import TabsCustom from "./Tabs/TabsCustom"

const fakeProps3 =
  "https://www.ozon.ru/product/upravlenie-konfliktami-v-professionalnoy-deyatelnosti-kitova-evgeniya-tarasovna-skibitskiy-936279298/?asb=OdTz1gqW1ctmGUtnKU7Yvlx7pkJK%252F%252BYrKOYi74Xn9lM%253D&asb2=E4iqgGXPckmF-KmwwiyORMYbBlCp-jQxKfqIZHPQ_nvbp_uyt263oKBvkyav_vUk&avtc=1&avte=2&avts=1705608013&keywords=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0+%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+%D0%BA%D0%BE%D0%BD%D1%84%D0%BB%D0%B8%D0%BA%D1%82%D0%B0%D0%BC%D0%B8"
const fakeProps4: { color: "green"; view: "soft"; text: string } = {
  color: "green",
  view: "soft",
  text: "ВЫПОЛНЕНА",
}

interface TaskProps {
  link?: string
  open?: boolean
  handleClose?: any
}

const TaskModal = ({ link, open, handleClose }: TaskProps) => {
  // const [open, setOpen] = useState(false)
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)
  return (
    <>
      {/* <Button onClick={handleOpen}>Открыть сайд-панель</Button> */}

      <SidePanelDesktop
        open={false}
        onClose={handleClose}
        className={style.modal}
      >
        <SidePanelDesktop.Header
          sticky={true}
          hasCloser={true}
          className={style.header}
        >
          <Typography.Title
            tag="h2"
            weight="bold"
            style={{
              fontFamily: "SF Pro Text",
              fontSize: "28px",
              lineHeight: "36px",
            }}
          >
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
                color="secondary"
                style={{
                  fontFamily: "SF Pro Text",
                  lineHeight: "16px",
                  fontSize: "13px",
                }}
              >
                Статус задачи
              </Typography.Text>

              <div>
                <StatusCustom data={fakeProps4} />
              </div>

              <Typography.Text
                tag="p"
                defaultMargins={false}
                color="secondary"
                style={{
                  fontFamily: "SF Pro Text",
                  lineHeight: "16px",
                  fontSize: "13px",
                }}
              >
                Тип
              </Typography.Text>

              <Typography.Text
                tag="p"
                view="primary-small"
                defaultMargins={false}
                style={{
                  fontFamily: "SF Pro Text",
                }}
              >
                Книга
              </Typography.Text>

              <Typography.Text
                tag="p"
                defaultMargins={false}
                color="secondary"
                style={{
                  fontFamily: "SF Pro Text",
                  lineHeight: "16px",
                  fontSize: "13px",
                }}
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
                  style={{
                    fontFamily: "SF Pro Text",
                  }}
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
              style={{
                fontFamily: "SF Pro Text",
              }}
            >
              Взять в работу
            </Typography.Text>
          </Button>
        </SidePanelDesktop.Footer>
      </SidePanelDesktop>
    </>
  )
}

export default TaskModal
