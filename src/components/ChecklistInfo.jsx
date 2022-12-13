import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ChecklistInfo = (props) => {
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
        userId: props.userId,
        mountainId: props.id,
        hasClimbed: true
      }
      await axios.post(`${BASE_URL}/checklist/create`, createChecklist)
    }
  }

return (
  <div className='checklist-info-wrapper'>
      <div key={props.id}>
        <h3>{props.name}</h3>
      </div>
      <div>
      <h5>{props.elevation}</h5>
      </div>
    <div>
      {props.users[0] ?
      <section className='checkmark-wrapper'> 
        <div>
          <h4 className='checkmark'>✔️</h4>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            checked={deleteChecked}
            onChange={deleteCheckHandler}/>
          <label htmlFor="checkbox">NOT climbed</label>
        </div>
      </section> 
      : 
      <section className='checkmark-wrapper'> 
        <div>
          <h4 className='x'>✘</h4>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            className='checkbox'
            checked={isChecked}
            onChange={createCheckHandler}
          />
          <label htmlFor="checkbox">Climbed</label>
        </div>
      </section>}
    </div>
  </div>
  )
} 

export default ChecklistInfo