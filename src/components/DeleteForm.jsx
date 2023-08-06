import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";

export default function Form() {
    const navigate = useNavigate();
    const [cont, setCont] = useState([]);
    const [password, setPassword] = useState("");
    const [selects, setSelects] = useState();
    const [loading, setLoading] = useState(false);



    const loadData = async () => {
        setLoading(true);
        let response = await fetch("http://localhost:3000/data", {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: password,
                    id: selects
                }),
            });

            if (res.ok) {
                console.log('Data sent successfully');
                setPassword('');
                setSelects();
                navigate('/');
            } else {
                console.log('Error sending data');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        loading !== true?
            <div style={{ flex: '1 1 auto' }}>
                <form onSubmit={handleSubmit}>
                    <div className='m-5'>
                        <div className='mb-4'>
                            <label for="topic" className="form-label">Topic</label>
                            <select class="form-select" aria-label="topic" value={selects} onChange={(e) => setSelects(e.target.value)} >
                                {cont.map((data) => {
                                    return (<option value={data._id}>{data.title}</option>)
                                })}
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label for="password" className="form-label">Password</label>
                            <input type="password" id="password" autoComplete="off" className="form-control" aria-describedby="passwordHelpBlock" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div id="passwordHelpBlock" className="form-text">
                                To add data, You have to type valid password
                            </div>
                        </div>
                        <div className='mb-4'>
                            <button type="submit" className="btn btn-outline-danger btn-lg">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
            :
            <div style={{
                "minHeight": "100vh", "display": "flex", "justifyContent": "center", "alignItems": "center"
              }}
              ><BounceLoader
              className='override' 
              size={100} 
              color={"#36d7b7"} 
              loading={loading} /></div>
    )
}
