import { Gap } from "@alfalab/core-components/gap";
import { GenericWrapper } from "@alfalab/core-components/generic-wrapper";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import { Modal } from "@alfalab/core-components/modal";
import { Typography } from "@alfalab/core-components/typography";

const StartPage: React.FC = () => {
  return (
    <div>
      <Modal open={true} size="s">
        <Modal.Content>
          <Typography.Title tag="h1" view="medium" font="styrene">
            Представьтесь и входите скорее
          </Typography.Title>
          <ul>
            <li>
              <GenericWrapper>
                <Circle size={40} />
                <GenericWrapper column={true}>
                  <Typography.Text
                    tag="p"
                    view="secondary-large"
                    defaultMargins={false}
                  >
                    Имя
                  </Typography.Text>
                  <Gap size="xs" direction="horizontal" />
                  <Typography.Text
                    tag="p"
                    view="secondary-large"
                    defaultMargins={false}
                  >
                    ментор
                  </Typography.Text>
                </GenericWrapper>
                
              </GenericWrapper>
            </li>
            <li></li>
          </ul>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default StartPage;
