import { Outlet, Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import IdpPage from "./pages/IdpPage/IdpPage";
import ManagerPage from "./pages/manager-page/ManagerPage";

import { Header, Footer, TaskModal, Head } from "./components/ui-kit";
import style from "./App.module.scss";

const App = () => {
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
          <Route index element={<ManagerPage />} />

          <Route path="/employee/:id" element={<EmployeePage />} 
          />

          <Route path="/idp/:id" element={<IdpPage />}/>
   
        </Route>
      </Routes>
      <TaskModal />
    </div>
  );
};

export default App;
