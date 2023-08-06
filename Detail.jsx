import React, { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Detail() {
    const params = useParams();
    const id = params.id;

    const [cont, setCont] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3000/dataById', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                }),
            }
            );
            if (response.ok) {
                console.log('Data sent successfully');
                const data = await response.json();
                setCont(data[0]);
                setLoading(false);
            } else {
                console.log('Error sending data');
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        handleSubmit();
    }, [id]);

    return (
        <>
            <div style={{
                "minHeight": "100vh", "display": "flex", "flexFlow": "column"
            }}>
                <Navbar style={{ "flex": "0 1 auto" }} />
                <div className='container my-4' style={{ "flex": "1 1 auto" }}>
                    {loading !== true
                        ? <>
                            <h1 className='my-3'>{cont.title}</h1>
                            <p className='my-3'><pre>{cont.content}</pre></p>
                        </>
                        : <div style={{
                            "minHeight": "100vh", "display": "flex", "justifyContent": "center", "alignItems": "center"
                        }}
                        >
                            <BounceLoader
                                className='override'
                                size={100}
                                color={"#36d7b7"}
                                loading={loading} />
                            <br />
                        </div>
                    }
                </div>
                <Footer style={{ "flex": "0 1 auto" }} />
            </div>
        </>
    )
}
