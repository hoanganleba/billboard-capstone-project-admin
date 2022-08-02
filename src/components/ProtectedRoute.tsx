import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const ProtectedRoute = ({ children }: any) => {
  const { token } = useAuth()
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
