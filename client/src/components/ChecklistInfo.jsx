import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ChecklistInfo = (props) => {
  let { user_Id } = useParams()
  const [checklist, setChecklist] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [newChecklist, setNewChecklist] = useState({ userId: '', mountainId: '', hasClimbed: '' })
  const BASE_URL = props.BASE_URL

  const checkHandler = () => {
    setIsChecked(!isChecked)
    createChecklist()
  }

  const createChecklist = async () => {
    if (!isChecked){
      const createChecklist = {
        ...newChecklist,
        userId: user_Id,
        mountainId: props.id,
        hasClimbed: true
      }
      await axios.post(`${BASE_URL}/checklist/create`, createChecklist)
    }
  }

 

  return (
    <div>
    <div><h3>{props.name}</h3>
    <h4>{props.rank}</h4>
    <div><img className="image" src={props.image} alt={props.title} ></img></div>
    </div>
    
    <div>
      {props.users[0] ?
      <div> <h4>✔️</h4>
      </div> : 
      <div> <h4>✘</h4>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor="checkbox">I have climbed this mountain</label></div>}
    </div>
 
    </div>
  )
}

export default ChecklistInfo