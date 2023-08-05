import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

export default function Compose() {
    return (
        <>
            <div style={{
                "minHeight": "100vh", "display": "flex", "flexFlow": "column"
            }}>
                <Navbar style={{"flex":"0 1 auto"}}/>
                <Form style={{"flex":"1 1 auto"}}/>
                <Footer style={{"flex":"0 1 auto"}}/>
            </div>
        </>
    )
}
