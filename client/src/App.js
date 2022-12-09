import './App.css'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import { Route, Routes, Link, useParams } from 'react-router-dom'
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
  const [user, setUser] = useState(null)
  const [mountainToUser, setMountainToUser] = useState([])
  let { userId } = useParams

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
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route
            path="/checklist/:userId"
            element={<Checklist mountain={mountainToUser} />}
          />
          <Route path="/tr" element={<TripReports user={user} />} />
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
    <div>
      <h1>Sorry, you must be logged in to view that page.</h1>
      <Link to="/login">Login</Link>
      <Link to="/Register">Register</Link>
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
      </Routes>
    </div>
  )
}

export default App
