import React from 'react'
import './Banner.css'

export default function Banner(props) {
    return (
        <div className="aml-banner" style={{backgroundImage: `url(${props.image})`}}>
            <div id="aml-banner-screen">
                <div id="aml-banner-innerscreen">
                    <h1>{props.title}</h1>
                    <div id="aml-banner-divider" /> 
                </div>
            </div>
        </div>
    )
}