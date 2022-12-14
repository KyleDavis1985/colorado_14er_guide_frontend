import React from 'react'
import { useState } from "react";
import MapDisplay from './MapDisplay';

const MountainInfo = (props) => {
  const [clicked, setClicked] = useState(true)

  const handleClick = () => {
    clicked === false ? setClicked(true) : setClicked(false)
  }

  return (clicked)?(
    <div className='mountain-div'>
      <div><img className="image" src={props.image} alt={props.title} ></img></div>
      <h5>{props.name}</h5>
      <h5>{props.rank}</h5>
      <h5>{props.elevation}</h5>
      <h5>{props.range}</h5>
      <div className='link-wrapper'>
      <a href={`https://forecast.weather.gov/MapClick.php?lat=${props.lat}&lon=-${props.long}`} className='additional-info-wrapper'> Weather </a>
      <button className="edit-button" onClick={handleClick}>Map</button>
      </div>
    </div>
  ): (
    <MapDisplay lat={props.lat} long={props.long} setClicked={setClicked} handleClick={handleClick}/>
  )
}

export default MountainInfo