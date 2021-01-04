import React, { useState, useEffect } from 'react'
import './Contact.css'
import Button from '../../layout/Button'
import emailjs, { init } from 'emailjs-com'

init("user_MAP8bSPlLJoXvYE3cbZEv");

export default function Contact(props) {
    // state
    const [requested, messageRequested] = useState(false);
    const [sent, messageSent] = useState(false);

    useEffect(() => {
        sent && setTimeout(() => messageSent(false), 3000);
    })

    const sendMail = event => {
        event.preventDefault();
        messageRequested(true);

        const payload = {
            from_email: document.getElementById('email').value,
            from_name: document.getElementById('name').value,
            message: document.getElementById('message').value,
            reply_to: document.getElementById('email').value
        }

        emailjs.send('service_senckeo', 'template_gyx8xee', payload)
            .then(res => {
                console.log(payload);
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
            <div id="aml-sent-modal" style={{top: sent ? 20 : -50}}>
                <div>Sent<i className="material-icons">check</i></div>
            </div>
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
                            <input type="text" placeholder="Name" id="name"/>
                            <input type="text" placeholder="Email" id="email"/>
                        </span>
                        <textarea placeholder="Message..." id="message"/>
                        <Button variant="trans-white" style={{width: 100, margin: "20px auto"}}>Send</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}