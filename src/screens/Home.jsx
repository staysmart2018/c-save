import React, { useEffect, useState } from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function () {
  const [cont, setCont] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const loadData = async () => {
    setLoading(true);
    let response = await fetch("https://csaveserv.onrender.com/data", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    response = await response.json();
    setCont(response);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <div style={{
        "minHeight": "100vh", "display": "flex", "flexFlow": "column"
      }}>
        <Navbar style={{ "flex": "0 1 auto" }} />
        <div className='container text-center my-4' style={{ "flex": "1 1 auto" }}>
          <div className="form-outline">
            <input
              type="text"
              className='form-control'
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className='row'>
            {
              loading !== true
                ? cont
                  .filter((data) =>
                    data.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((data) => {
                    return (
                      <Card
                        key={data._id}
                        className="col-3"
                        title={data.title}
                        content={data.content}
                        id={data._id}
                      />
                    );
                  })
                : <div style={{
                  "minHeight": "100vh", "display": "flex", "justifyContent": "center", "alignItems": "center"
                }}
                ><BounceLoader
                    className='override'
                    size={100}
                    color={"#36d7b7"}
                    loading={loading} /></div>
            }
          </div>
        </div>
        <Footer style={{ "flex": "0 1 auto" }} />
      </div>
    </>
  )
}
