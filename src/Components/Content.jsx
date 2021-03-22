import React, { useState } from 'react'
import '../styles/Content.css'
import logo from '../images/logo.svg'
import btnForm from '../images/icon-arrow.svg'
import iconError from '../images/icon-error.svg'

import BackImage from '../images/hero-desktop.jpg'
import BackImageMobile from '../images/hero-mobile.jpg'



export default function Content() {

    const [values, setValues] = useState({
        email: ""
    })

    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)


    const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (values.email) {
            setValid(true)
        }
        setSubmitted(true)
    }

    const width = window.innerWidth

    return (


        <div className="container">
            <div className="container-flex">
                <header>
                    <img src={logo} alt="" className="logo" />

                    {width >= 850 ? null : <div className="container-mobile-img"><img src={BackImageMobile} alt="" /> </div>}
                </header>


                <main className="container-main">
                    <div className="container-explication">
                        <h1>
                            <span> We're </span> coming soon
                         </h1>   

                        <p>
                            Hello fellow shoppers! We're currently building our new fashion store.
                            Add your email below to stay up-to-date with announcements and our launch deals.

                    </p>
                    </div>

                    <div className="container-form">

                        <form
                            className="register-form"
                            onSubmit={handleSubmit}>
                            {submitted && valid ?
                                <div className="success-container">
                                    Success! Thank you for resgitering
                                </div>
                                : null}

                            <input
                                
                                onChange={handleEmailInputChange}
                                value={values.email}
                                type="email"
                                placeholder="Email Addres"
                            />
                            {submitted && !values.email ?
                               <span>
                                   <img src={iconError} alt="" className="icon-error" />
                               </span>
                                : null
                            }
                            <button >
                                <img src={btnForm} alt="" />
                            </button>

                            {submitted && !values.email ?
                                <div className="container-erro">
                                    <span>Please provid valid email</span>

                                </div> : null

                            }


                        </form>

                    </div>

                </main>
            </div>

            {width < 850 ? null : <div className="container-desktop-img">
                <img src={BackImage} alt="" />
            </div>}

        </div>
    )
}