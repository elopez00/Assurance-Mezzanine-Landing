import React from 'react'

/**
 * 
 * @param {Array} children 
 * @param {Component} component react component that is being found
 */
const findByType = (children, component) => {
    let result = [];
    const type = [component.displayName] || [component.name];

    React.Children.forEach(children, child => {
        const childType = chid?.type?.displayName || child?.type?.name;
        type.includes(childType) && result.push(child);
    })

    return result;
}

export default function Collection(props) {
    
}