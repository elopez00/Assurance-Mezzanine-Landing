import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <button className="aml-button" id={ props.variant } style={props.style} onClick={props.onClick}>
            { props.children }
        </button>
    )
}