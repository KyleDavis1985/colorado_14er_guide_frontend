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

  const checkHandler = async (e) => {
    setIsChecked(!isChecked)
    if (!isChecked){
      e.preventDefault()
      const createChecklist = {
        ...newChecklist,
        userId: user_Id,
        mountainId: props.id,
        hasClimbed: 'True'
      }
      await axios.post(`${BASE_URL}/checklist/create`, createChecklist)
    }
  }
console.log(user_Id)

  return (
    <div>
    <div><h3>{props.name}</h3></div>
    {props.users.map((climbed) => (
        <div>
          {climbed.hasClimbed === true ? <h4>Yes</h4> : <h4>No</h4>}
        </div>
      ))}
    <input type="checkbox" id="checkbox" checked={isChecked} onChange={checkHandler} />
    <label htmlFor="checkbox">I have climbed this mountain</label>
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  )
}

export default ChecklistInfo