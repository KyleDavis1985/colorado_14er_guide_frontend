import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MountainInfo from '../components/MountainInfo'

const Mountains = () => {
  const [mountains, setMountains] = useState([])
  const LOCAL_URL = 'http://localhost:3001/guide'
  const HEROKU_URL='https://mighty-woodland-71351.herokuapp.com/guide'
  let BASE_URL = HEROKU_URL ? HEROKU_URL : LOCAL_URL

  useEffect(() => {
    const mountainCall = async () => {
      let response = await axios.get(`${BASE_URL}/mountain/`)
      setMountains(response.data)
    }
    mountainCall()
  }, [])

  return (
    <div>
    {mountains.map((mountain) => (
      <MountainInfo key={mountain.id} name={mountain.name} rank={mountain.rank} elevation={mountain.elevation} range={mountain.range} image={mountain.image} lat={mountain.lat} long={mountain.long}/>
    ))}  
    </div>
  )
}

export default Mountains