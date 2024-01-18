import { Outlet, Route, Routes } from "react-router-dom"
import style from "./App.module.scss"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <Routes>
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
