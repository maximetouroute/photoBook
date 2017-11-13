import React  from 'react';

const aboutPage = (<div>

        <h3>Maxime Touroute</h3>
        <img src="/res/profile.png" width="200px"/>
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
        photos: [],
        description: landscapesDescription
    },
    {
        name: "PORTRAITS",
        photos: [],
        description: portraitsDescription
    },
    {
        name: "DAILIES",
        photos: [],
        description: dailiesDescription
    },
    {
        name: "EXPERIMENTS",
        photos: [],
        description: experimentsDescription
    },
    {
        name: "ABOUT ME",
        description: aboutPage
    }
];

export const slideshow = [];