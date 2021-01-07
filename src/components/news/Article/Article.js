import React from 'react'
import './Article.css'
import Banner from '../../layout/Banner'
import banner from '../../../assets/news-banner.jpg'
import { Route } from 'react-router-dom'

export default function Article(props) {
    return (
            <div className="aml-article">
                <Banner title="News Article" image={banner}/>
                <div id="aml-article">
                    <h3>{props.date}</h3>
                    <h1>{props.title}</h1>
                    { props.desc?.map(description => ( 
                        <span>
                            <p>{description}</p>
                        </span>
                    )) }
                    <div id="aml-article-images">
                        { props.images?.map(image => <img src={image} />) }
                    </div>
                    <div>
                        <h3>Website{ props.multiple ? "s" : null }</h3>
                        {props.multiple ? (
                            <ul>
                                { props.multiple?.map(website => <li><a href={website} target="_blank">{website}</a></li>) }
                            </ul>
                        ) : (<a href={props.website} target="_blank">{props.website}</a>)}
                    </div>
                </div>
            </div>
    )
}