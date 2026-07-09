import { useState } from "react"
import LoginPage from "./LoginPage"
import TachesPage from "./TachesPage"

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ?? '')

  const handleConnexion = (token: string) => {
    setToken(token)
    localStorage.setItem('token', token)
  }

  return (
    <>
      {
        token ? <TachesPage /> : <LoginPage onConnexion={handleConnexion} />
      }
    </>
  )
}

export default App
