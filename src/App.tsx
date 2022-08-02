import { Route, Routes } from 'react-router-dom'
import Billboard from './pages/Billboard'
import BillboardDetail from './pages/BillboardDetail'
import Home from './pages/Home'
import AuthProvider from './auth/AuthProvider'
import ProtectedLayout from './components/ProtectedLayout'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route index element={<Home />} />
          <Route path="billboards" element={<Billboard />} />
          <Route path="billboards/:billboardId" element={<BillboardDetail />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App

