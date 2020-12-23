import React from 'react'
import './Banner.css'
import Button from '../../layout/Button'

export default function Banner(props) {
    return (
        <div id="aml-home-banner">
            <div id="aml-home-screen">
                <div>
                    <span>Assurance Mezzanine Fund</span>
                    <div id="aml-home-screen-divider"/>
                    <p> Assurance Mezzanine Fund is a private investment firm providing 
                        $3 to $20 million of customized growth solutions to profitable, 
                        lower-middle-market companies.
                    </p>
                    <Button variant="trans-white" style={{ marginRight: 20}} onClick={() => window.location.href = "/portfolio"}>Portfolio</Button>
                    <Button variant="trans-white" onClick={() => window.location.href = "/team#aml-contact-screen"}>Contact</Button>
                </div>
            </div>
        </div>
    )
}