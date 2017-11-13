import React, { Component } from 'react';
import { BackgroundSlideshow } from './../../components/BackgroundSlideshow/BackgroundSlideshow';
import { slideshow } from '../../content/content';
import { Link } from 'react-router-dom'
import './Home.css';
import { homePunchline, photographerName} from './../../content/content';

export const Home = () => (
    <div className="Home">
        <div className="mainGrid">
            <div className="message">
                <div>
                    <div className="text big">{photographerName}</div>
                    <div className="text small">{homePunchline}</div>
                </div>
                <Link to={process.env.PUBLIC_URL + '/book'} className="button">SHOW ME</Link>
            </div>
            <div className="slideShow">
                <BackgroundSlideshow className="fillPage" photos={slideshow} speed={5}/>
            </div>
        </div>
    </div>
);