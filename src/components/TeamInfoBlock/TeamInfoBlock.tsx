import { useAppSelector } from "../../services/hook";
import { getManagersStatisticsData } from "../../services/selectors";
import {
  GenericWrapper,
  Underlay,
  Gap,
  CircularProgressBar,
  Space,
  Skeleton,
} from "../ui-kit";
import s from "./TeamInfoBlock.module.scss";

const TeamInfoBlock = () => {
  const { statistics, loading } = useAppSelector(getManagersStatisticsData);

  console.log(statistics);

  return (
    <div className={s.container}>
      <Skeleton visible={loading}>
        <Underlay borderRadius="xl" backgroundColor="secondary" padding="xl">
          <GenericWrapper grow={true} justifyContent="between">
            <GenericWrapper column={true} justifyContent="between">
              <h4 className={s.infoHeadline}>
                В вашем отделе {statistics.count_employe} сотрудников
              </h4>
              <Gap size="m" />
              <span className={s.infoSubtitle}>Назначено ИПР</span>
              <Gap size="xs" />
              <span className={s.infoText}>
                {statistics.count_employe_with_idp}
              </span>
            </GenericWrapper>
            <CircularProgressBar
              value={statistics.percent_progress_employees}
              title={`${statistics.percent_progress_employees}%`}
              size="l"
              height={80}
            />
          </GenericWrapper>
        </Underlay>
      </Skeleton>
      <Skeleton visible={loading}>
        <Underlay borderRadius="xl" backgroundColor="secondary" padding="xl">
          <GenericWrapper grow={true} column={true} justifyContent="between">
            <h4 className={s.infoHeadline}>Данные по текущим ИПР</h4>
            <Gap size="m" />
            <GenericWrapper column={true} justifyContent="between">
              <Space align="end" className={s.custom} direction="horizontal">
                <div>
                  <span className={s.infoSubtitle}>Не назначены</span>
                  <Gap size="xs" />
                  <span className={s.infoText}>
                    {statistics.count_employe_without_idp}
                  </span>
                </div>
                <div className={s.customLine}></div>
                <div>
                  <span className={s.infoSubtitle}>Нет задач</span>
                  <Gap size="xs" />
                  <span className={s.infoText}>
                    {statistics.count_idp_without_tasks}
                  </span>
                </div>
                <div className={s.customLine}></div>
                <div>
                  <span className={s.infoSubtitle}>Просрочено</span>
                  <Gap size="xs" />
                  <span className={s.infoText}>
                    {statistics.count_idp_with_status_not_done}
                  </span>
                </div>
                <div className={s.customLine}></div>
                <div>
                  <span className={s.infoSubtitle}>Ожидают ревью</span>
                  <Gap size="xs" />
                  <span className={s.infoText}>
                    {statistics.count_idp_with_status_awaiting_review}
                  </span>
                </div>
              </Space>
            </GenericWrapper>
          </GenericWrapper>
        </Underlay>
      </Skeleton>
    </div>
  );
};

export default TeamInfoBlock;
