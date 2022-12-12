import React from 'react'

const Home = (props) => {
  return props.user && props.authenticated ? (
    <div>
      <h4>Welcome {props.user.name}!</h4>
    </div>
  ):
  (
    <div>
    <h4>Welcome!</h4>
    </div>
  )
}

export default Home