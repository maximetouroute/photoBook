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
        photos: ['res/landscapes/b-33.jpg',
        'res/landscapes/b-34.jpg',
        'res/landscapes/b-35.jpg',
            'res/landscapes/b-37.jpg',
            'res/landscapes/b-39.jpg'],
        description: landscapesDescription
    },
    {
        name: "PORTRAITS",
        photos: ['res/portraits/b-9.jpg',
            'res/portraits/b-12.jpg'],
        description: portraitsDescription
    },
    {
        name: "DAILIES",
        photos: ['res/dailies/b-18.jpg',
            'res/dailies/b-4.jpg',
            'res/dailies/b-10.jpg',
            'res/dailies/b-11.jpg',
            'res/dailies/b-1.jpg',
            'res/dailies/b-30.jpg'],
        description: dailiesDescription
    },
    {
        name: "EXPERIMENTS",
        photos: ['res/experiments/b-13.jpg',
            'res/experiments/b-8.jpg',
            'res/experiments/b-22.jpg',
            'res/experiments/b-20.jpg',
            'res/experiments/b-23.jpg',
            'res/experiments/b-25.jpg',
            'res/experiments/b-29.jpg',
            'res/experiments/b-1.jpg'],
        description: experimentsDescription
    },
    {
        name: "ABOUT ME",
        description: aboutPage
    }
];

export const slideshow = [
    'res/landscapes/b-34.jpg',
    'res/landscapes/b-39.jpg',
    'res/experiments/b-2.jpg'
];