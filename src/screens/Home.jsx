import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function () {
  const [cont, setCont] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:3000/data", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    response = await response.json();
    setCont(response);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <div style={{
        "minHeight": "100vh", "display": "flex", "flexFlow": "column"
      }}>
        <Navbar style={{"flex":"0 1 auto"}}/>
        <div className='container text-center my-4' style={{"flex":"1 1 auto"}}>
          <div className='row'>
            {
              cont !== []
                ? cont.map((data) => {
                  return (
                    <Card className="col-3"
                      title={data.title}
                      content={data.content}
                      id={data._id}
                    />
                  )
                })
                : <div>******************</div>
            }
          </div>
        </div>
        <Footer style={{"flex":"0 1 auto"}}/>
      </div>
    </>
  )
}
