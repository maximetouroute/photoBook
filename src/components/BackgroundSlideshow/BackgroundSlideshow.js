import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BackgroundSlideshow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fileIndex:0,
            loadedPhotos: []
        };

        this.photosToLoad = this.props.photos.slice(); // .slice Otherwise you alter the imported array
        this.photoLoader = null;

        this.photoLoaderOnLoadProcess = () => {
            this.setState({loadedPhotos:[...this.state.loadedPhotos, this.currentLoadingSrc]});
            this.startLoadingNewPhoto();
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.speed*1000
        );
        this.startLoadingNewPhoto();
    }

    startLoadingNewPhoto() {
        if ( this.photosToLoad.length > 0) {
            this.photoLoader = new Image();
            this.photoLoader.onload = this.photoLoaderOnLoadProcess;
            this.currentLoadingSrc = this.photosToLoad.pop();
            this.photoLoader.src = this.currentLoadingSrc;
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((previousState, props) => {
            let newCurrentIndex;
            if ( this.state.loadedPhotos.length <= previousState.fileIndex+1 ) {
                newCurrentIndex = 0;
            } else {
                newCurrentIndex = previousState.fileIndex+1;
            }

            return { fileIndex: newCurrentIndex };
        });
    }

    render() {
        return <FadeImage src={this.state.loadedPhotos[this.state.fileIndex]}/>;
    }
}

BackgroundSlideshow.propTypes = {
    photos: PropTypes.array.isRequired,
    speed: PropTypes.number
};

BackgroundSlideshow.defaultProps = {
    photos: [],
    speed: 5.0
};


class FadeImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: props.src,
            fadeSpeed: props.fadeSpeed
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({src: newProps.src});
    }

    render() {
        const containerStyle = {
            transition: `background-image ${this.state.fadeSpeed/2}s linear`
        };

        const fillParentStyle = {
            height: '100%',
            width: '100%'
        };

        const photoStyle = {
            backgroundImage: `url(${this.state.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundSize: 'cover',
        };
        return (
            <div style={{...fillParentStyle, ...photoStyle, ...containerStyle}}/>
        );
    }
}

FadeImage.propTypes = {
    src: PropTypes.string.isRequired,
    fadeSpeed: PropTypes.number
};

FadeImage.defaultProps = {
    src: '',
    fadeSpeed: 0.3
};