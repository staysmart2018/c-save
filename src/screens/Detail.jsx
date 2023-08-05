import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Detail() {
    const params = useParams();
    const id = params.id;

    const [cont, setCont] = useState({});

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://csaveserv.onrender.com/dataById', {
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
            } else {
                console.log('Error sending data');
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
                <Navbar style={{"flex":"0 1 auto"}}/>
                <div className='container my-4' style={{"flex":"1 1 auto"}}>
                    <h1 className='my-3'>{cont.title}</h1>
                    <p className='my-3'><pre>{cont.content}</pre></p>
                </div>
                <Footer style={{"flex":"0 1 auto"}}/>
            </div>
        </>
    )
}
