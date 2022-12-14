import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
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

let tripReport
  if (clicked === false && props.user && props.auth) {
    tripReport = (
<div className='entireTrWrapper'>
  <div className='trWidthWrapper'>
    <div>
      <h5 className='trTime'>Posted On: {newDate} at {newTime}</h5>
    </div>
    <div className='trTitleWrapper'>
      <h3 className='trTitle'>{props.title}</h3>
    </div>
    <div className='trContentWrapper'>
      <div className='trBodyWrapper'>
        <div className='trBodyOneWrapper'>
          <p className='trBody'>{props.body}</p>
        </div>
        <div>
          <h1>{props.image}</h1>
        </div>
      </div>
      </div>
      <div className='trButtonWrapper'>
        <div>
          <button className="delete-button" onClick={handleDelete}>Delete Trip Report</button>
        </div>
        <div>
          <button className="edit-button" onClick={handleClick}>Edit Trip Report</button>
        </div>
      </div>
  </div>
</div>
    )
  } else if (clicked === true){
    tripReport = (
      <div>
        <EditTripReport title={props.title} body={props.body} image={props.image} id={props.id} BASE_URL={props.BASE_URL} setClicked={setClicked}/>
      </div>
    )
  } 

  let publicTripReport = (
<div className='entireTrWrapper'>
  <div className='trWidthWrapper'>
    <div>
      <h5 className='trTime'>Posted On: {newDate} at {newTime}</h5>
    </div>
    <div className='trTitleWrapper'>
      <h3 className='trTitle'>{props.title}</h3>
    </div>
    <div className='trContentWrapper'>
      <div className='trBodyWrapper'>
        <div className='trBodyOneWrapper'>
          <p className='trBody'>{props.body}</p>
        </div>
        <div>
          <h1>{props.image}</h1>
        </div>
      </div>
      </div>
  </div>
</div>
  )

if (props.auth) {
  if (props.userId === props.user.id) {
    return (
      tripReport
    )
  } else {
    return (
      publicTripReport
    )
  }
} else {
  return (
    publicTripReport
  )
}
}



export default TripReportInfo