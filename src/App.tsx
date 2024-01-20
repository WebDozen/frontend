import { Outlet, Route, Routes } from "react-router-dom"
import style from "./App.module.scss"
// import Home from "./pages/Home/Home"
import appStyle from "./App.module.scss"
import ManagerPage from "./pages/manager-page/ManagerPage"

const App = () => {
  return (
    <div className={appStyle.app}>
      <Routes>
        {/* 1 уроверь */}
        <Route
          path="/"
          element={
            <>
              <header className={style.header}>Привет</header>
              <div className={style.main}>
                <Outlet />
              </div>
              <footer className="footer">Пока</footer>
            </>
          }
        >
          {/* 2 уроверь */}
          <Route index element={<ManagerPage />} />

          <Route
            path="/employee/:id"
            element={<div>Картчока сотрудника</div>}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
