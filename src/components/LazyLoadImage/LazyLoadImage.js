import React, { Component } from 'react';
import './LazyLoadImage.css';
import loading from './loading.png';

export class LazyLoadImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            ref: {src:''}
        };
        this.loadImage = new Image();
        this.hdImage = new Image();
        this.loadImageOnLoad = () => {
            this.setState({ref: this.loadImage});
            this.hdImage.src = this.props.src;
        };
        this.hdImageOnLoad = () => {
            this.setState({loaded: true, ref:this.hdImage});
        };
    }

    componentWillReceiveProps(nextProps) {
        // Dirty fix to avoid reshowing loading image in case someone above us does something wrong in rendering
        if (nextProps.src === this.props.src) {
            return;
        }
        this.setState({
            loaded: false,
            ref: {src:''}
        });
        this.initialize();
    }

    initialize() {
        this.loadImage = new Image();
        this.hdImage = new Image();
        this.loadImage.onload = this.loadImageOnLoad;
        this.hdImage.onload = this.hdImageOnLoad;
        this.loadImage.src = loading;
    }

    componentDidMount() {
       this.initialize();
    };

    componentWillUnmount() {
        this.hdImage = null;
        this.loadImage = null;
        this.loadImageOnLoad = null;
        this.hdImageOnLoad = null;
    }

    render() {
        return (
            <div className="LazyLoad">
                <img src={this.state.ref.src} alt="" ref={elem => this.setState({ref: elem})}/>
            </div>
        )
    }
}