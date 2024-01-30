import { Gap, Typography } from "../ui-kit";
import style from "./PlanDescription.module.scss";

export default function PlanDescription() {
  return (
    <div className={style.block}>
      <Typography.Title view="xsmall" tag="h3" style={{ color: "#0E0E0E" }}>
        Описание плана развития
      </Typography.Title>
      <Gap size="s" />
      <Typography.Text
        view="primary-small"
        tag="p"
        defaultMargins={false}
        color="primary"
        style={{ fontFamily: "SF Pro Text" }}
      >
        Повышение компетенциий в области soft-скиллов, включая коммуникативные
        навыки, умение работать в команде, разрешение конфликтов и управление
        временем. Эти навыки помогут улучшить взаимодействие с коллегами,
        повысят эффективность работы в проектах и обеспечат более качественное
        тестирование програмного обеспечения.
      </Typography.Text>
      <Gap size="s" />
      <Typography.Text
        view="primary-small"
        tag="p"
        defaultMargins={false}
        color="primary"
        style={{ fontFamily: "SF Pro Text" }}
      >
        План развития по soft-скиллам включает в себя определенное количество
        задач, которые необходимо закрыть к концу года. Периодически мы будем
        проводить оценку прогресса и при необходимости можем скорректировать наш
        план. Развитие soft-скиллов является процессом, который требует
        постоянного внимания!
      </Typography.Text>
    </div>
  );
}
