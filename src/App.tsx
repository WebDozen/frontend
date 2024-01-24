import { Outlet, Route, Routes } from "react-router-dom"
import EmployeePage from "./pages/EmployeePage/EmployeePage"
import PdpPage from "./pages/PdpPage/PdpPage"
import ManagerPage from "./pages/manager-page/ManagerPage"

import style from "./App.module.scss"
import { Header, Footer, TaskModal, Head } from "./components"

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

          <Route path="/pdp/:id" element={<PdpPage />}/>
   
        </Route>
      </Routes>
      <TaskModal />
    </div>
  )
}

export default App
