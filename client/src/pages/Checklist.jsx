import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ChecklistInfo from '../components/ChecklistInfo'

const Checklist = (props) => {
  let { userId } = useParams()
  const [mountains, setMountains] = useState([])
  const BASE_URL = 'http://localhost:3001/guide'

  useEffect(() => {
    const mountainCall = async () => {
      let response = await axios.get(`${BASE_URL}/mountain/`)
      setMountains(response.data)
    }
    mountainCall()
  }, [])

  return  (
    <div>
      {mountains.map((mountain) => (
        <ChecklistInfo key={mountain.id} id={mountain.id} name={mountain.name} image={mountain.image} BASE_URL={BASE_URL}/>
      ))}
    </div>
  ) 
}

export default Checklist