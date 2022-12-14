import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ChecklistInfo from '../components/ChecklistInfo'

const Checklist = (props) => {
  const [mountains, setMountains] = useState([])
  const LOCAL_URL = 'http://localhost:3001/guide'
  const HEROKU_URL='https://mighty-woodland-71351.herokuapp.com/guide'
  let BASE_URL = HEROKU_URL ? HEROKU_URL : LOCAL_URL

  const handleSubmit = async () => {
    window.location.reload(false)
  }

  const handleSort = [...mountains].sort((a, b) => a.rank - b.rank)

  useEffect(() => {
    const mountainCall = async () => {
      let response = await axios.get(`${BASE_URL}/mountain/cl`)
      setMountains(response.data)
    }
    mountainCall()
  }, [])

  return  (
    <div className='checklist-wrapper'>
      <form onSubmit={handleSubmit}>
      <button className='create-post-button'>Save Page</button>
      <section className='checklist-container'>
        <div className='checklist-container-div'>
          {handleSort.map((mountain) => (
              <ChecklistInfo key={mountain.id} id={mountain.id} name={mountain.name} elevation={mountain.elevation} image={mountain.image} BASE_URL={BASE_URL} users={mountain.mountain_cl} handleSubmit={handleSubmit} rank={mountain.rank} mountain={mountains} userId={props.userId}/>
        ))}
        </div>
      </section>
      <button className='create-post-button'>Save Page</button>
      </form>
    </div>
  ) 
}

export default Checklist