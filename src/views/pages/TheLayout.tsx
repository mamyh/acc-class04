import React from 'react'
import Footer from './commons/Footer'
import Header from './commons/Header'

const TheLayout = () => {
    return (
        <div>
            <div><Header /></div>
            <main>Body</main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default TheLayout;