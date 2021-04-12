import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"



const NotFound = () => {
    return(
        <Layout>
            <br />
            <br />
            <br />
            <h1 style={{textAlign: "center"}}>404: Page Not Found</h1>
            <p style={{textAlign: "center"}}>
                <Link to="/blog/">Check our latest articles</Link>
            </p>
            <br />
            <br />
            <br />
        </Layout>
    )
}

export default NotFound;