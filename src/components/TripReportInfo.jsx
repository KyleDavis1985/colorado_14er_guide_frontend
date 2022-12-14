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
<div className='entireTrWrapper'>
  <div className='trWidthWrapper'>
    <div>
      <h5 className='trTime'>{newTime} {newDate}</h5>
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