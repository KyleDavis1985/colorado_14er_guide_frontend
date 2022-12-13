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
import UnauthorizedHeader from './components/UnauthorizedHeader'
const BASE_URL = 'http://localhost:3001/guide'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [mountainToUser, setMountainToUser] = useState([])

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
      let response = await axios.get(`${BASE_URL}/checklist/mountain`)
      setMountainToUser(response.data)
    }
    mountainCall()
  }, [])

  return user && authenticated ? (
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
          <Route
            path="/"
            element={<Home user={user} authenticated={authenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route
            path="/checklist/:user_Id"
            element={<Checklist mountain={mountainToUser} userId={user.id} />}
          />
          <Route
            path="/tr"
            element={<TripReports user={user} authenticated={authenticated} />}
          />
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
  ) : (
    <div className="App">
      <header>
        <UnauthorizedHeader />
      </header>
      <main>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route path="/tr" element={<TripReports user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
