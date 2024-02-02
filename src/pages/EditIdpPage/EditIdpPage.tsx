import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Gap } from "../../components/ui-kit";
import IdpForm from "../../components/IdpForm/IdpForm";

const EditIdpPage = () => {
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
