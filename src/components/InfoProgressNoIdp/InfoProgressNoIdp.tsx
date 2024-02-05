import style from "./InfoProgressNoIdp.module.scss";
import iconCalendar from "../../images/iconCalendar.svg";
import { NoShape } from "../ui-kit";

export default function InfoProgressNoIdp() {
  return (
    <div className={style.infoProgress}>
      <NoShape
        size={48}
        imageUrl={iconCalendar}
        backgroundColor="transparent"
      />
      <p className={style.infoProgressStatus}>Нет активных ИПР</p>
    </div>
  );
}
