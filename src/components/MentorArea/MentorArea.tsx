import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getIdpData } from "../../services/selectors";
import { TYPE_SLAG_IDP, TYPE_SLAG_TASK } from "../../utils/constants";
import { Button, CopyMIcon, Gap, IconButton, PencilMIcon } from "../ui-kit";
import styles from "./MentorArea.module.scss";
import MentorInfo from "./MentorInfo/MentorInfo";
import { patchIdpsStatusByID } from "../../services/actions";
import { unwrapResult } from "@reduxjs/toolkit";
import ButtonsIdpBlock from "../ButtonsIdpBlock/ButtonsIdpBlock";

const MentorArea = () => {
  const { idp, loading, error } = useAppSelector(getIdpData);

  const showMentorInfo = idp.mentor !== null;

  return (
    <div className={styles.mentorCopyAreaBlock}>
      {showMentorInfo && (
        <>
          <MentorInfo />
          <ButtonsIdpBlock />
        </>
      )}
    </div>
  );
};

export default MentorArea;
