import React from 'react'
import TripReportPost from '../components/TripReportPost'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TripReportInfo from '../components/TripReportInfo'

const TripReports = (props) => {
  const [tripReport, setTripReport] = useState([])
  const BASE_URL = 'http://localhost:3001/guide'
  let user = props.user


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
      {tripReport.map((post) => (
        <TripReportInfo key={post.id} body={post.body} title={post.title} image={post.image} BASE_URL={BASE_URL} id={post.id} user={user} userAuth={props.user} auth={props.authenticated}/>
      ))}
      </div>
    </div>
  ):(
    <div>
      <div>
      {tripReport.map((post) => (
        <TripReportInfo key={post.id} body={post.body} title={post.title} image={post.image} BASE_URL={BASE_URL} id={post.id} user={user} userAuth={props.user} Auth={props.authenticated}/>
      ))}
      </div>
    </div>
  )
}

export default TripReports