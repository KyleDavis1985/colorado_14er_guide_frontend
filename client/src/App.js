import './App.css'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
const BASE_URL = 'http://localhost:3001/guide'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // Logout function
  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  // Checks for user using token
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <nav></nav>
      <main></main>
      <footer></footer>
    </div>
  )
}

export default App
