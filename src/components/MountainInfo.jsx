import React from 'react'

const MountainInfo = (props) => {
  return (
    <div className='mountain-div'>
      <h5>{props.name}</h5>
      <h5>{props.rank}</h5>
      <h5>{props.elevation}</h5>
      <div><img className="image" src={props.image} alt={props.title} ></img></div>
      <h5>{props.range}</h5>
      <a href={`https://forecast.weather.gov/MapClick.php?lat=${props.lat}&lon=-${props.long}`}> Weather </a>

    </div>
  )
}

export default MountainInfo