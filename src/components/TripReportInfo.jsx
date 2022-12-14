import React from 'react'
import axios from 'axios'
import { useState } from "react";
import EditTripReport from './EditTripReport';

const TripReportInfo = (props) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    clicked === false ? setClicked(true) : setClicked(false)
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`${props.BASE_URL}/post/${props.id}`)
    window.location.reload(false)
}

const date = new Date(props.created)
let newTime = date.toLocaleTimeString('en-US')
let newDate = date.toLocaleDateString('en-US')


  if (clicked === false && props.userAuth && props.auth) {
    return (
    <div>
      <div>
        <div>
          <h5>{newTime} {newDate}</h5>
        </div>
        <div>
          <h3>{props.title}</h3>
        </div>
        <div>
          <h5>{props.body}</h5>
        </div>
        <div>
          <h1>{props.image}</h1>
        </div>
      </div>
      <div><button className="delete-button" onClick={handleDelete}>Delete Trip Report</button></div>
      <div><button className="edit-button" onClick={handleClick}>Edit Trip Report</button></div>
    </div>
    )
  } else if (clicked === true && props.userAuth && props.auth){
    return (
      <div>
        <EditTripReport title={props.title} body={props.body} image={props.image} id={props.id} BASE_URL={props.BASE_URL} setClicked={setClicked}/>
      </div>
    )
  } else if (clicked === false){
    return (
      <div>
      <div>
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <h4>{props.body}</h4>
        </div>
        <div>
          <h1>{props.image}</h1>
        </div>
      </div>
    </div>
    )
  }
} 

export default TripReportInfo