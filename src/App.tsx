import { Outlet, Route, Routes } from "react-router-dom"
import { useState } from "react"
import EmployeePage from "./pages/EmployeePage/EmployeePage"

import ManagerPage from "./pages/manager-page/ManagerPage"
import Head from "./components/Head/Head"
import style from "./App.module.scss"
import { Header, Footer, Task, Button } from "./components"

const App = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
                <Button onClick={handleOpen}>Открыть сайд-панель</Button>
                <Task open={open} handleClose={handleClose} />
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
    </div>
  )
}

export default App
