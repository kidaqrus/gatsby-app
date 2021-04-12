import React from 'react'
import Metadata from '../components/metadata'
import Layout from '../components/layout'
import * as contactStyles from '../components/contact.module.scss'

const Contact = () => {
    return(
        <Layout>
            <Metadata title="Contact" description="my contact page"></Metadata>
            <h1 className={contactStyles.h1}>contact me kapish</h1>
            <p className={contactStyles.p}>You can me find kidaqrus on Twitter via @kidaqrus</p>
            <p className={contactStyles.p}>you can also send me a text via mail asablog@gmail.com</p>

        </Layout>
    )
}


export default Contact