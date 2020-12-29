import React, { useState } from 'react'
import './Contact.css'
import Button from '../../layout/Button'
import emailjs, { init } from 'emailjs-com'

init("user_MAP8bSPlLJoXvYE3cbZEv");

export default function Contact(props) {
    // state
    const [requested, messageRequested] = useState(false);
    const [sent, messageSent] = useState(false);

    const sendMail = event => {
        event.preventDefault();
        messageRequested(true);

        emailjs.sendForm('service_senckeo', 'template_gyx8xee', event.target, 'user_MAP8bSPlLJoXvYE3cbZEv')
            .then(res => {
                document.getElementById('email').value = '';
                document.getElementById('name').value = '';
                document.getElementById('message').value = '';
                messageSent(true);
                messageRequested(false);
            })
            .catch(err => {
                alert("There was an error sending the message");
                console.error(err);
                messageSent(false);
                messageRequested(false);
            });
    }

    return (
        <div className="aml-contact-me">
            <div id="aml-loading-screen" style={{top: requested && !sent ? 20 : -50}}/>
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
                    <form id="aml-message-input" onSubmit={sendMail}>
                        <span>
                            <input type="text" placeholder="Name" id="email"/>
                            <input type="text" placeholder="Email" id="name"/>
                        </span>
                        <textarea placeholder="Message..." id="message"/>
                        <Button variant="trans-white" style={{width: 100, margin: "20px auto"}}>Send</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}