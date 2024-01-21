import { ProgressBar } from "@alfalab/core-components/progress-bar"
import styleStatus from "./InfoProgressStatusBar.module.scss"
import { Space } from "@alfalab/core-components/space"

export default function InfoProgressStatusBar() {
  return (
    <div className={styleStatus.infoProgress}>
      <div className={styleStatus.infoTextBlock}>
        <p className={styleStatus.infoProgressStatus}>
          Текущий прогресс по ИПР
        </p>
        <p className={styleStatus.infoProcent}>0%</p>
      </div>
      <Space size={20} fullWidth>
        <ProgressBar view="positive" size="s" value={0} />
      </Space>
    </div>
  )
}
