import React  from 'react';



// Landscapes
import l1 from './../res/landscapes/b-33.jpg';
import l2 from './../res/landscapes/b-34.jpg';
import l3 from './../res/landscapes/b-27.jpg';
import l4 from './../res/landscapes/b-37.jpg';
import l5 from './../res/landscapes/b-39.jpg';
import l6 from './../res/landscapes/b-40.jpg';
import l7 from './../res/landscapes/b-9.jpg';
import l8 from './../res/landscapes/b-44.jpg';
import l9 from './../res/landscapes/b-46.jpg';
import l10 from './../res/landscapes/b-38.jpg';
import l11 from './../res/landscapes/b-35.jpg';
// Dailies
import d1 from './../res/dailies/b-4.jpg';
import d2 from './../res/dailies/b-11.jpg';
import d3 from './../res/dailies/b-17.jpg';
import d4 from './../res/dailies/b-18.jpg';
import d5 from './../res/dailies/b-30.jpg';
import d6 from './../res/dailies/b-32.jpg';
import d7 from './../res/dailies/b-14.jpg';
import d8 from './../res/dailies/b-16.jpg';
import d9 from './../res/dailies/b-1.jpg';
import d10 from './../res/dailies/b-10.jpg';

// Experiments
import e0 from './../res/experiments/b-13.jpg';
import e1 from './../res/experiments/b-22.jpg';
import e2 from './../res/experiments/b-23.jpg';
import e3 from './../res/experiments/b-8.jpg';
import e4 from './../res/experiments/b-20.jpg';
import e5 from './../res/experiments/b-12.jpg';
import e6 from './../res/experiments/b-28.jpg';
import e7 from './../res/experiments/b-24.jpg';
import e8 from './../res/experiments/b-25.jpg';
import e9 from './../res/experiments/b-29.jpg';
import e10 from './../res/experiments/b-2.jpg';
import e11 from './../res/experiments/b-1.jpg';

// Portraits
import p1 from './../res/portraits/b-9.jpg';
import p2 from './../res/portraits/b-19.jpg';
import p3 from './../res/portraits/b-20.jpg';
import p4 from './../res/portraits/b-21.jpg';
import p5 from './../res/portraits/b-12.jpg';
import p6 from './../res/portraits/b-40.jpg';
import p7 from './../res/portraits/b-41.jpg';
import p8 from './../res/portraits/b-42.jpg';

import profilePicture from './../res/profile.jpg';

const portraitPhotos = [p1, p6, p7, p8, p2, p3, p4, p5];
const experimentsPhotos = [e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11];
const dailiesPhotos = [d1, d2, d3, d10, d4, d5, d6, d7, d8, d9];
const landscapePhotos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11];

const aboutPage = (<div>

        <h3>Maxime Touroute</h3>
        <img src= {profilePicture} alt="profile" width="200px"/>
        <div style={{fontSize:'1rem'}}>
            I'm passionate about audiovisual arts and I have been working on <b>movies</b>, <b>photos</b>, and <b>musics</b> for a few years.
            This website as you guessed is strictly about the photos part of it.
            For more information about me and my projects check out my <a href="https://maximetouroute.github.io">portfolio website</a>
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

export const slideshow = [l2, l5, e10];

export const photographerName = 'Maxime Touroute';
export const homePunchline = "I do photos.";
