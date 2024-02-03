import { Outlet, Route, Routes } from "react-router-dom";
import ManagerPage from "../../pages/ManagerPage/ManagerPage";
import EmployeePage from "../../pages/EmployeePage/EmployeePage";
import IdpPage from "../../pages/IdpPage/IdpPage";
import AddIdpPage from "../../pages/AddIdpPage/AddIdpPage";
import EditIdpPage from "../../pages/EditIdpPage/EditIdpPage";

import Header from "../Header/Header";
import Head from "../Head/Head";
import Footer from "../Footer/Footer";
import TaskModal from "../TaskModal/TaskModal";

import style from "./App.module.scss";
import { useState } from "react";
import SuccessPage from "../../pages/SuccessPage/SuccessPage";
import CancelPage from "../../pages/CancelPage/CancelPage";

const App = () => {
  const [role, setRole] = useState("manager");

  return (
    <div className={style.app}>
      <Routes>
        {/* 1 уроверь */}
        <Route
          path={"/"}
          element={
            <>
              <Header />
              <main className={style.main}>
                <Head />
                <Outlet />
              </main>
              <Footer />
            </>
          }
        >
          {/* 2 уроверь */}
          <Route
            index
            element={role === "manager" ? <ManagerPage /> : <EmployeePage />}
          />
          <Route path="/employee/:id" element={<EmployeePage />} />
          {/* <Route path="/idp/:id" element={<IdpPage />} /> */}
          <Route path="/employee/:id/idp/:idp_id" element={<IdpPage />} />
          <Route path="/employee/:id/add_idp" element={<AddIdpPage />} />
          <Route
            path={"/employee/:id/edit_idp/:idp_id"}
            element={<EditIdpPage />}
          />
        </Route>
        <Route
          path="/employee/:id/idp/:idp_id/success"
          element={<SuccessPage />}
        />
        <Route
          path="/employee/:id/idp/:idp_id/cancel"
          element={<CancelPage />}
        />
      </Routes>
      
      <TaskModal />
    </div>
  );
};

export default App;
