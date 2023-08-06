import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Form() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/compose', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    password: password,
                }),
            });

            if (res.ok) {
                console.log('Data sent successfully');
                setTitle('');
                setContent('');
                setPassword('');
                navigate('/');
            } else {
                console.log('Error sending data');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={{ flex: '1 1 auto' }}>
            <form onSubmit={handleSubmit}>
                <div className='m-5'>
                    <div className="mb-4">
                        <label for="title" className="form-label">Title</label>
                        <input type="text" className="form-control" autoComplete="off" id="title" placeholder="Topic" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label for="content" className="form-label">Content</label>
                        <textarea className="form-control" autoComplete="off" id="content" rows="5" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <div className='mb-4'>
                        <label for="password" className="form-label">Password</label>
                        <input type="password" id="password" autoComplete="off" className="form-control" aria-describedby="passwordHelpBlock" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div id="passwordHelpBlock" className="form-text">
                            To add data, You have to type valid password
                        </div>
                    </div>
                    <div className='mb-4'>
                        <button type="submit" className="btn btn-outline-dark btn-lg">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
