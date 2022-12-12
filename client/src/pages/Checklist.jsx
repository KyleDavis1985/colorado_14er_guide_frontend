import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ChecklistInfo from '../components/ChecklistInfo'

const Checklist = (props) => {
  let { user_Id } = useParams()
  const [mountains, setMountains] = useState([])
  const BASE_URL = 'http://localhost:3001/guide'

  useEffect(() => {
    const mountainCall = async () => {
      let response = await axios.get(`${BASE_URL}/mountain/cl`)
      setMountains(response.data)
      console.log(response.data)
    }
    mountainCall()
  }, [])

  return  (
    <div>
      {mountains.map((mountain) => (
        <ChecklistInfo key={mountain.id} id={mountain.id} name={mountain.name} image={mountain.image} BASE_URL={BASE_URL} users={mountain.mountain_cl}/>
      ))}
      <button className='create-post-button'>Save Page</button>
    </div>
  ) 
}

export default Checklist