import React from 'react'
import './About.css'

export default function About(props) {
    return (
        <div className="aml-about">
            <h1>About Us</h1>
            <div id="aml-about-divider" />
            <p style={{marginTop: 30}}>Assurance Mezzanine Fund is a private investment firm providing $3 to $20 million customized 
               growth capital solutions to profitable, lower-middle-market companies nationwide. We look to 
               invest our funds in established companies operated by experienced and proven management teams 
               with a history of building enterprise value. Assurance Mezzanine Fund was created by former 
               industry executives and experienced investors who place a high value on their relationships 
               with management teams.
               <br />
               <br />
               Our goal is to help companies grow not only by supplying capital, but also by offering business owners our 
               experience and network contacts obtained while operating our own businesses. Unlike other 
               lenders, we know what it takes to operate and grow a business. We understand that many times 
               fundraising can be a distraction to business operations. For that reason, we work hard to make 
               the diligence and closing process both fast and fair. A great deal for us is one where both parties 
               are happy and motivated to help grow the company.
            </p>
        </div>
    )
}