import { ProgressBar, Space } from "../ui-kit";

import styleStatus from "./InfoProgressStatusBar.module.scss";

export default function InfoProgressStatusBar() {
  return (
    <div className={styleStatus.infoProgress}>
      <div className={styleStatus.infoTextBlock}>
        <p className={styleStatus.infoProgressStatus}>Задач выполнено</p>
        <p className={styleStatus.infoProcent}>
          <span className={styleStatus.infoProcentBold}>2</span> из 5
        </p>
      </div>
      <Space size={20} fullWidth>
        <ProgressBar view="positive" size="s" value={(2 / 5) * 100} />
      </Space>
    </div>
  );
}
