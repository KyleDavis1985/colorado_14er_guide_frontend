import React from 'react'
import TripReportPost from '../components/TripReportPost'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TripReportInfo from '../components/TripReportInfo'

const TripReports = (props) => {
  const [tripReport, setTripReport] = useState([])
  const LOCAL_URL = 'http://localhost:3001/guide'
  const HEROKU_URL='https://mighty-woodland-71351.herokuapp.com/guide'
  let BASE_URL = HEROKU_URL ? HEROKU_URL : LOCAL_URL
  let user = props.user

  const handleSort = [...tripReport].sort((a, b) => a.createdAt - b.createdAt)

  useEffect(() => {
    const tripReportCall = async () => {
      let response = await axios.get(`${BASE_URL}/post/`)
      setTripReport(response.data)
    }
    tripReportCall()
  }, [])
  
  return props.user && props.authenticated ?(
    <div>
      <div><TripReportPost user={user}/></div>
      <div>
      {handleSort.map((post) => (
        <TripReportInfo key={post.id} body={post.body} title={post.title} image={post.image} BASE_URL={BASE_URL} id={post.id} user={user} userAuth={props.user} auth={props.authenticated} created={post.createdAt}/>
      ))}
      </div>
    </div>
  ):(
    <div>
      <div>
      {tripReport.map((post) => (
        <TripReportInfo key={post.id} body={post.body} title={post.title} image={post.image} BASE_URL={BASE_URL} id={post.id} user={user} userAuth={props.user} Auth={props.authenticated} created={post.createdAt}/>
      ))}
      </div>
    </div>
  )
}

export default TripReports