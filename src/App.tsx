import { Outlet, Route, Routes } from "react-router-dom"
import style from "./App.module.scss"
import Home from "./pages/EmployeePage/EmployeePage"

const App = () => {
  return (
    <Routes>
      {/* 1 уроверь */}
      <Route
        path="/"
        element={
          <>
            <header className={style.header}>Привет</header>
            <Outlet />
            <footer className="footer">Пока</footer>
          </>
        }
      >
        {/* 2 уроверь */}
        <Route
          index
          element={
            <div className={style.App}>
              <Home />
            </div>
          }
        />

        <Route path="/employee/:id" element={<div>Картчока сотрудника</div>} />
      </Route>
    </Routes>
  )
}

export default App
