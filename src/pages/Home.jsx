import React from 'react'

const Home = (props) => {
  return props.user && props.authenticated ? (
    <div className='homeWrapper'>
      <div className='homeInfoWrapper'>
        <h3>Welcome {props.user.name}</h3>
      </div>
      <div><h3>to</h3></div>
      <h1 className='homeTitle'>53 PEAKS</h1>
    </div>
  ):
  (
    <div className='homeWrapper'>
      <div className='homeInfoWrapper'>
        <h3>Welcome Friend</h3>
      </div>
      <div><h3>to</h3></div>
      <h1 className='homeTitle'>53 PEAKS</h1>
    </div>
  )
}

export default Home