import React from 'react'
import './Contact.css'
import Button from '../../layout/Button'

export default function Contact(props) {
    return (
        <div className="aml-contact-me">
            <div id="aml-contact-screen">
                <div id="aml-contact-content">
                    <h1>Contact Us</h1>
                    <div id="aml-contact-divider" />
                    <p> We welcome direct inquiries from entrepreneurs as well as intermediaries. 
                        Our goal is to respond to your request within two business days. If your 
                        request does not meet our investment criteria, we will make a concerted 
                        effort to refer you to other sources of capital known to us that may be a 
                        fit.
                    </p>
                    <div id="aml-message-input">
                        <span>
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Email"/>
                        </span>
                        <textarea placeholder="Message..."/>
                        <Button variant="trans-white" style={{width: 100, margin: "20px auto"}}>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}