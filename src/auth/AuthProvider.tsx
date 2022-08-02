import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from './AuthContext'

const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate()
  const [token, setToken] = useState(null)

  const handleLogin = async () => {
    const token: any = 'Hello'
    setToken(token)
    const origin = (location as any).state?.from?.pathname || '/dashboard'
    navigate(origin)
  }

  const handleLogout = () => {
    setToken(null)
  }

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
