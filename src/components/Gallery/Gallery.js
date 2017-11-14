import React, { Component } from 'react';
import './Gallery.css';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';
import { LazyLoadImage } from './../../components/LazyLoadImage/LazyLoadImage';

export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    photos() {
        let photosArray = [];
        for (let i = 0 ; i < this.props.photos.length ; i++) {
            photosArray.push( <div className="imageContainer" onClick={() => this.setState({ isOpen: true, photoIndex:i })} >
                <LazyLoadImage src={this.props.photos[i]}/>
            </div>);
        }
        return (
            <div className="gridWrapperr">
                <div className="gridMiddleCentered">

                    {photosArray}
                </div>
            </div>
        );
    }

    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;

        return (
            <div className="Gallery">

                <div className="header">
                    {this.props.name}
                    <hr/>
                </div>
                <div className="gridWrapperr">
                    <div className="gridMiddleCentered description">
                        {this.props.description}
                    </div>
                </div>
                {this.photos()}

                {isOpen &&
                <Lightbox
                    mainSrc={this.props.photos[photoIndex]}
                    nextSrc={this.props.photos[(photoIndex + 1) % this.props.photos.length]}
                    prevSrc={this.props.photos[(photoIndex + this.props.photos.length - 1) % this.props.photos.length]}

                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() => this.setState({
                        photoIndex: (photoIndex + this.props.photos.length - 1) % this.props.photos.length
                    })}
                    onMoveNextRequest={() => this.setState({
                        photoIndex: (photoIndex + 1) % this.props.photos.length
                    })}
                />
                }


                <div className="footer">
                    <hr/>
                    <br/>
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licence Creative Commons" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />
                    All pictures on this website are the property of <a href="https://maximetouroute.github.io">Maxime Touroute</a> and are under a Creative Commons Licence<br/>
                    Website developped by <a href="https://maximetouroute.github.io">Maxime Touroute</a> - Source code available on <a href="https://github.com/maximetouroute/photos">Github</a>
                </div>
            </div>
        );

    }
}

Gallery.propTypes = {
    photos: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.element
};

Gallery.defaultProps = {
    photos: [],
    name: 'NO NAME',
    description: <div></div>
};