import './App.css'
import AdminLayout from './Layout/AdminLayout/Index'
import LayoutDefault from './Layout/DefaultLayout/Index'
import { Routes, Route } from "react-router-dom"
import { LoginRoute } from './Routes/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />} >
          {LoginRoute.map((route, index) => { return <Route key={index} path={route.path} element={<route.element />} /> })}
        </Route>
        <Route path="/admin" element={<AdminLayout />} >

        </Route>
      </Routes>
    </>
  )
}

export default App
