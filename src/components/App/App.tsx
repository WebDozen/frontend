import { Outlet, Route, Routes } from "react-router-dom";
import EmployeePage from "../../pages/EmployeePage/EmployeePage";
import IdpPage from "../../pages/IdpPage/IdpPage";
import ManagerPage from "../../pages/ManagerPage/ManagerPage";
import AddIdpPage from "../../pages/AddIdpPage/AddIdpPage";

import Header from "../Header/Header";
import Head from "../Head/Head";
import Footer from "../Footer/Footer";
import TaskModal from "../TaskModal/TaskModal";

import style from "./App.module.scss";
import { useState } from "react";

const App = () => {
  const [role, setRole] = useState("manager");

  return (
    <div className={style.app}>
      <Routes>
        {/* 1 уроверь */}
        <Route
          path="/"
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
          {role === "manager" ? (
            <>
              <Route index element={<ManagerPage />} />
              <Route path="/employee/:id" element={<EmployeePage />} />
              {/* <Route path="/idp/:id" element={<IdpPage />} />
              <Route
                path="/employee/:id/idp/:idp-id"
                element={<div>Просмотр ИПР</div>}
              /> */}
              <Route path="/employee/:id/add-idp" element={<AddIdpPage />} />
              {/* <Route
                path="/employee/:id/edit-idp/:idp-id"
                element={<div>Редактирование ИПР</div>}
              /> */}
            </>
          ) : (
            <Route path="/" element={<EmployeePage />} />
          )}
        </Route>
      </Routes>
      <TaskModal />
    </div>
  );
};

export default App;
