import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DeleteForm from '../components/DeleteForm'

export default function Delete() {
    return (
        <>
            <div style={{
                "minHeight": "100vh", "display": "flex", "flexFlow": "column"
            }}>
                <Navbar style={{ "flex": "0 1 auto" }} />
                <DeleteForm style={{"flex":"1 1 auto"}}/>
                <Footer style={{ "flex": "0 1 auto" }} />
            </div>
        </>
    )
}
