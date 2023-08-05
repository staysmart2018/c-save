import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <>
      <div className="card my-3 border-3 rounded mx-auto text-center" style={{ "width": "20rem", "height": "20rem" }}>
        <div className="card-body rounded">
          <h5 className="card-title my-3">{props.title}</h5>
          <p className="card-text my-3" style={{"height":"50%"}}>{props.content.substring(0, 150) + " ....."}</p>
          <Link to={"/content/"+props.id} className="btn btn-outline-primary my-3">View More</Link>
        </div>
      </div>
    </>
  )
}
