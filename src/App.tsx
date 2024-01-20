import { Outlet, Route, Routes } from "react-router-dom"
import style from "./App.module.scss"
import { Gap } from '@alfalab/core-components/gap';
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <Routes>
      {/* 1 уроверь */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Gap size='5xl' />
            <Outlet />
            <Footer />
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
