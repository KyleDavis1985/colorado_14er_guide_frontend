import './App.css'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import Header from './components/Header'
import Mountains from './pages/Mountains'
import Checklist from './pages/Checklist'
import Register from './pages/Register'
import TripReports from './pages/TripReports'
import Login from './pages/Login'
const BASE_URL = 'http://localhost:3001/guide'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [mountains, setMountains] = useState([])
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

    const mountainCall = async () => {
      let response = await axios.get(`${BASE_URL}/mountain/`)
      setMountains(response.data)
    }

    mountainCall()
  }, [])

  return (
    <div className="App">
      <header>
        <Header
          user={user}
          authenticated={authenticated}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/tr" element={<TripReports />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
