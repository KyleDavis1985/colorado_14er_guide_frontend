import React from 'react'
import axios from 'axios'

const TripReportInfo = (props) => {

  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`${props.BASE_URL}/post/${props.id}`)
    window.location.reload(false)
}
  return (
    <div>
      <div>
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <h1>{props.body}</h1>
        </div>
        <div>
          <h1>{props.image}</h1>
        </div>
      </div>
      <div><button className="delete-button" onClick={handleDelete}>Delete</button></div>
    </div>
  )
}

export default TripReportInfo