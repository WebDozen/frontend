import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Gap } from "../../components/ui-kit";
import IdpForm from "../../components/IdpForm/IdpForm";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../services/hook";
import {
  getEmployeeByID,
  getEmployees,
  getIdpByID,
} from "../../services/actions";

const EditIdpPage = () => {
  const { id, idp_id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeeByID(id));
    dispatch(getIdpByID({ id, idp_id }));
    dispatch(getEmployees());
  }, [id, idp_id, dispatch]);

  return (
    <>
      <EmployeeCard />
      <Gap size="2xl" />
      <IdpForm />
      <Gap size="2xl" />
    </>
  );
};

export default EditIdpPage;
