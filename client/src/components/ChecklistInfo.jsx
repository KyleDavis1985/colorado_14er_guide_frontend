import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ChecklistInfo = (props) => {
  const [checklist, setChecklist] = useState([])
  const BASE_URL = props.BASE_URL

  useEffect(() => {
  const checklistCall = async () => {
    let response = await axios.get(`${BASE_URL}/checklist/mountain`)
    setChecklist(response.data)
  }
  checklistCall()
}, [])
  return (
    <div>{checklist.name}</div>
  )
}

export default ChecklistInfo