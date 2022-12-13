import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ChecklistInfo = (props) => {
  let { user_Id } = useParams()
  const [isChecked, setIsChecked] = useState(false)
  const [deleteChecked, setDeleteChecked] = useState(false)
  const [newChecklist, setNewChecklist] = useState({ userId: '', mountainId: '', hasClimbed: '' })
  const BASE_URL = props.BASE_URL

  const createCheckHandler = () => {
    setIsChecked(!isChecked)
    createChecklist()
  }

  const deleteCheckHandler = () => {
    setDeleteChecked(!deleteChecked)
    deleteChecklist()
  }

  const deleteChecklist = async () => {
    if (!deleteChecked)
      await axios.delete(`${props.BASE_URL}/checklist/${props.id}`)
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

console.log(props.users[0])

return (
  <div>
      <div key={props.id}>
        <h3>{props.name}</h3>
        <div>
          <img className="image" src={props.image} alt={props.title} ></img>
        </div>
      </div>
    <div>
      {props.users[0] ?
      <div> 
        <h4>✔️</h4>
        <input
          type="checkbox"
          id="checkbox"
          checked={deleteChecked}
          onChange={deleteCheckHandler}/>
        <label htmlFor="checkbox">I have NOT climbed this mountain</label>
      </div> 
      : 
      <div> 
        <h4>✘</h4>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={createCheckHandler}
        />
        <label htmlFor="checkbox">I have climbed this mountain</label>
      </div>}
    </div>
  </div>
  )
} 

export default ChecklistInfo