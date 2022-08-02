import { createContext } from 'react'

export type AuthContent = {
  token: string | null
  onLogin: () => void
  onLogout: () => void
}

const AuthContext = createContext<AuthContent>({
  token: null,
  onLogin: () => {},
  onLogout: () => {},
})

export default AuthContext
