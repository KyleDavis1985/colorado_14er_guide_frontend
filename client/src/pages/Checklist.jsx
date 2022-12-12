import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ChecklistInfo from '../components/ChecklistInfo'

const Checklist = (props) => {
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
          <ChecklistInfo id={mountain.id} name={mountain.name} image={mountain.image} BASE_URL={BASE_URL} users={mountain.mountain_cl} handleSubmit={handleSubmit} rank={mountain.rank} mountain={mountains}/>
    
      ))}
      <button className='create-post-button'>Save Page</button>
      </form>
    </div>
  ) 
}

export default Checklist