import React from 'react'

const MountainInfo = (props) => {
  return (
    <div>
    <h3>{props.name}</h3>
    <h5>Rank: {props.rank}</h5>
    <h3>Elevation: {props.elevation}</h3>
    <div><img className="image" src={props.image} alt={props.title} ></img></div>
    <h4>Mountain Range: {props.range}</h4>
    <a href={`https://forecast.weather.gov/MapClick.php?lat=${props.lat}&lon=-${props.long}`}> Weather </a>

    </div>
  )
}

export default MountainInfo