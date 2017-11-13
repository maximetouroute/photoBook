import React  from 'react';



// Landscapes
import l2 from './../res/landscapes/b-34.jpg';
import l3 from './../res/landscapes/b-35.jpg';
import l4 from './../res/landscapes/b-37.jpg';
import l5 from './../res/landscapes/b-39.jpg';


// Dailies
import d1 from './../res/dailies/b-4.jpg';
import d2 from './../res/dailies/b-10.jpg';
import d3 from './../res/dailies/b-11.jpg';
import d4 from './../res/dailies/b-18.jpg';
import d5 from './../res/dailies/b-30.jpg';
import d6 from './../res/dailies/b-36.jpg';


// Experiments
import e0 from './../res/experiments/b-2.jpg';
import e1 from './../res/experiments/b-13.jpg';
import e2 from './../res/experiments/b-8.jpg';
import e3 from './../res/experiments/b-22.jpg';
import e4 from './../res/experiments/b-20.jpg';
import e5 from './../res/experiments/b-23.jpg';
import e6 from './../res/experiments/b-25.jpg';
import e7 from './../res/experiments/b-29.jpg';
import e8 from './../res/experiments/b-1.jpg';

import p1 from './../res/portraits/b-9.jpg';
import p2 from './../res/portraits/b-12.jpg';

import profilePicture from './../res/profile.png';
const portraitPhotos = [p1, p2];
const experimentsPhotos = [e0, e1, e2, e3, e4, e5, e6, e7, e8];
const dailiesPhotos = [d1, d2, d3, d4, d5, d6];
const landscapePhotos = [l2, l3, l4, l5];

const aboutPage = (<div>

        <h3>Maxime Touroute</h3>
        <img src= {profilePicture} width="200px"/>
        <div>
            I'm passionate about audiovisual arts and been working on <b>movies</b>, <b>photos</b>, and <b>musics</b> for a few years now.
            This website as you guessed is strictly about the photos part of it.
            For more information about me and my projects check out my <a href="https://maximetouroute.github.io">Portfolio page</a>
        </div>
    </div>
);

const dailiesDescription = (
    <div>Collection of shots from the everyday ramblings of my life</div>
);

const experimentsDescription = (
    <div>A series of experiments on the usage of lighting and photography techniques</div>
);

const portraitsDescription = (
    <div></div>
);

const landscapesDescription = (
    <div></div>
);

export const gallery = [
    {
        name: "LANDSCAPES",
        photos: landscapePhotos,
        description: landscapesDescription
    },
    {
        name: "PORTRAITS",
        photos: portraitPhotos,
        description: portraitsDescription
    },
    {
        name: "DAILIES",
        photos: dailiesPhotos ,
        description: dailiesDescription
    },
    {
        name: "EXPERIMENTS",
        photos: experimentsPhotos,
        description: experimentsDescription
    },
    {
        name: "ABOUT ME",
        description: aboutPage
    }
];

export const slideshow = [l2, l5, e0];