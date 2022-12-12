import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ChecklistInfo from '../components/ChecklistInfo'

const Checklist = (props) => {
  let { user_Id } = useParams()
  const [mountains, setMountains] = useState([])
  const BASE_URL = 'http://localhost:3001/guide'

  const handleSubmit = async (e) => {
    window.location.reload(false)
}

  useEffect(() => {
    const mountainCall = async () => {
      let response = await axios.get(`${BASE_URL}/mountain/cl`)
      setMountains(response.data)
    }
    mountainCall()
  }, [])

  return  (
    <div>
      <form className='create-post-form' onSubmit={handleSubmit}>
      {mountains.map((mountain) => (
        <div>
        <ChecklistInfo key={mountain.id} id={mountain.id} name={mountain.name} image={mountain.image} BASE_URL={BASE_URL} users={mountain.mountain_cl} handleSubmit={handleSubmit} rank={mountain.rank}/>
        </div>
      ))}
      <button className='create-post-button'>Save Page</button>
      </form>
    </div>
  ) 
}

export default Checklist