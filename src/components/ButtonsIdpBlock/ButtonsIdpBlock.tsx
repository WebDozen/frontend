import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getIdpData } from "../../services/selectors";
import { TYPE_SLAG_IDP } from "../../utils/constants";
import { Button, CopyMIcon, IconButton, PencilMIcon } from "../ui-kit";
import styles from "./ButtonsIdpBlock.module.scss";
import { getEmployeeByID, patchIdpsStatusByID } from "../../services/actions";
import { unwrapResult } from "@reduxjs/toolkit";

export default function ButtonsIdpBlock() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { idp_id } = useParams();

  const { idp } = useAppSelector(getIdpData);

  const goToEditPage = () => {
    navigate(`/employee/${id}/edit_idp/${idp_id}`);
  };

  const showEditButton =
    idp.status.slug === TYPE_SLAG_IDP.in_progress ||
    idp.status.slug === TYPE_SLAG_IDP.awaiting_review ||
    idp.status.slug === TYPE_SLAG_IDP.expired ||
    idp.status.slug === TYPE_SLAG_IDP.open;
  const showCancelButton =
    idp.status.slug === TYPE_SLAG_IDP.in_progress ||
    idp.status.slug === TYPE_SLAG_IDP.open;
  const showFinishButton = idp.status.slug === TYPE_SLAG_IDP.awaiting_review;

  const handleButtonClickCancell = async (e: any) => {
    e.preventDefault();
    try {
      let originalPromiseResult;
      const resultAction = await dispatch(
        patchIdpsStatusByID({
          employee_id: `${id}`,
          idp_id: `${idp_id}`,
          data: { status: "cancelled" },
        }),
      );
      originalPromiseResult = unwrapResult(resultAction);
      if (originalPromiseResult) {
        navigate(`/employee/${id}/idp/${idp_id}/cancel`);
      }
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  const handleButtonClickSuccess = async (e: any) => {
    e.preventDefault();
    try {
      let originalPromiseResult;
      const resultAction = await dispatch(
        patchIdpsStatusByID({
          employee_id: `${id}`,
          idp_id: `${idp_id}`,
          data: { status: "completed" },
        }),
      );
      originalPromiseResult = unwrapResult(resultAction);
      if (originalPromiseResult) {
        navigate(`/employee/${id}/idp/${idp_id}/success`);
      }
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <div className={styles.buttonsBlock}>
      <div className={styles.littleButtonsBlock}>
        {showEditButton && (
          <IconButton
            view="primary"
            size={56}
            icon={PencilMIcon}
            onClick={goToEditPage}
            style={{
              backgroundColor: "rgba(15, 25, 55, 0.1)",
            }}
          />
        )}

        <IconButton
          view="primary"
          size={56}
          icon={CopyMIcon}
          style={{
            backgroundColor: "rgba(15, 25, 55, 0.1)",
          }}
        />
      </div>
      {showFinishButton && (
        <Button
          view="primary"
          className={styles.button}
          onClick={handleButtonClickSuccess}
        >
          Завершить ИПР
        </Button>
      )}
      {showCancelButton && (
        <Button
          view="primary"
          className={styles.button}
          onClick={handleButtonClickCancell}
        >
          Отменить
        </Button>
      )}
    </div>
  );
}
