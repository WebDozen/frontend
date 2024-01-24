import { Outlet, Route, Routes } from "react-router-dom"
import EmployeePage from "./pages/EmployeePage/EmployeePage"

import ManagerPage from "./pages/manager-page/ManagerPage"
import Head from "./components/Head/Head"
import style from "./App.module.scss"
import { Header, Footer, TaskModal } from "./components"

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

          <Route path="/employee/:id" element={<EmployeePage />} />
        </Route>
      </Routes>
      <TaskModal />
    </div>
  )
}

export default App
