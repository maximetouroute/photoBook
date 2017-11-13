import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Slideshow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fileIndex:0
        };
        this.nextPhoto = this.nextPhoto.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.speed*1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick() {
        this.setState((previousState, props) => {
            let newCurrentIndex;
            if ( props.photos.length <= previousState.fileIndex+1 ) {
                newCurrentIndex = 0;
            } else {
                newCurrentIndex = previousState.fileIndex+1;
            }

            return {
                fileIndex: newCurrentIndex,
            };
        });
    }

    nextPhoto() {
        clearInterval(this.timerID);
        this.tick();
        this.timerID = setInterval(
            () => this.tick(),
            this.props.speed*1000
        );
    }

    render() {
        const filePath = this.props.photos[this.state.fileIndex];
        const photo = <FadeImage src={filePath} fadeSpeed="0.4"/>;
        return (
            <div className="photo-container" onClick={this.nextPhoto}>
                {photo}
            </div>
        );
    }
}

Slideshow.propTypes = {
    photos: PropTypes.array.isRequired,
    speed: PropTypes.number
};

Slideshow.defaultProps = {
    photos: [],
    speed: 5.0
};

class FadeImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity:1,
            src: props.src,
            fadeSpeed: props.fadeSpeed
        };
    }

    componentWillReceiveProps(newProps) {

        this.setState((previousState, props) => {

            this.timeoutOpacity = setTimeout(
                () => this.setState({ src: newProps.src}),
                previousState.fadeSpeed/2*1000
            );

            this.timeoutChangeSrc = setTimeout(
                () => this.setState({ opacity:1 }),
                previousState.fadeSpeed*1000
            );

            return {
                opacity: 0
            };
        });

    }

    render() {
        return (
            <img src={this.state.src} alt={this.props.alt} style={{
                ...{
                    width: '100%',
                    height: 'auto',
                    opacity: this.state.opacity,
                    transition: `opacity ${this.state.fadeSpeed/2}s linear`
                }}}/>
        );
    }
}

FadeImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    duration: PropTypes.number
};

FadeImage.defaultProps = {
    src: '',
    alt: 'Image',
    duration: 1.0
};