import React, { Component } from 'react';
import { BackgroundSlideshow } from './../../components/BackgroundSlideshow/BackgroundSlideshow';
import { slideshow } from '../../content/config';
import { Link } from 'react-router-dom'
import './Home.css';

export const Home = () => (
    <div className="Home">
        <div className="mainGrid">
            <div className="message">
                <div>
                    <div className="text big">Maxime Touroute</div>
                    <div className="text small">I do photos.</div>
                </div>
                <Link to="/book" className="button">SHOW ME</Link>
            </div>
            <div className="slideShow">
                <BackgroundSlideshow className="fillPage" photos={slideshow} speed={5}/>
            </div>
        </div>
    </div>
);