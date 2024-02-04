import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import ManagerPage from "../../pages/ManagerPage/ManagerPage";
import EmployeePage from "../../pages/EmployeePage/EmployeePage";
import IdpPage from "../../pages/IdpPage/IdpPage";
import AddIdpPage from "../../pages/AddIdpPage/AddIdpPage";
import EditIdpPage from "../../pages/EditIdpPage/EditIdpPage";
import SuccessPage from "../../pages/SuccessPage/SuccessPage";
import CancelPage from "../../pages/CancelPage/CancelPage";
import MentorPage from "../../pages/MentorPage/MentorPage";

import Header from "../Header/Header";
import Head from "../Head/Head";
import Footer from "../Footer/Footer";
import TaskModal from "../TaskModal/TaskModal";

import style from "./App.module.scss";
import { useEffect, useState } from "react";
import StartPage from "../../pages/StartPage/StartPage";
import ProtectedRoute from "../ProtectedRoute";
import { useAppDispatch } from "../../services/hook";
import { handleRessetUser } from "../../services/actions";

const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/start");
  }, []);

  return (
    <div className={style.app}>
      <Routes>
        {/* 1 уроверь */}
        <Route
          path={"/"}
          element={
            <ProtectedRoute>
              <Header />
              <main className={style.main}>
                <Head />
                <Outlet />
              </main>
              <Footer />
            </ProtectedRoute>
          }
        >
          {/* 2 уроверь */}
          <Route index element={<ManagerPage />} />
          <Route path="/employee/:id" element={<EmployeePage />} />
          <Route path="/employee/:id/idp/:idp_id" element={<IdpPage />} />
          <Route path="/employee/:id/add_idp" element={<AddIdpPage />} />
          <Route
            path={"/employee/:id/edit_idp/:idp_id"}
            element={<EditIdpPage />}
          />
          <Route path="mentor/employee/:id" element={<MentorPage />} />
        </Route>
        <Route
          path="/employee/:id/idp/:idp_id/success"
          element={<SuccessPage />}
        />
        <Route
          path="/employee/:id/idp/:idp_id/cancel"
          element={<CancelPage />}
        />
        <Route path="/start" element={<StartPage />} />
      </Routes>

      <TaskModal />
    </div>
  );
};

export default App;
