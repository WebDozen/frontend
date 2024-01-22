import { ProgressBar, Space } from ".."

import styleStatus from "./InfoProgressStatusBar.module.scss"

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
