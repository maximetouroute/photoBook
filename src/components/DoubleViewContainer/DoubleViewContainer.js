import React, { Component } from 'react';
import './DoubleViewContainer.css';
import PropTypes from 'prop-types';

export class DoubleViewContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentView: props.currentView
        };
    }

    componentDidMount() {
        this.smoothScroll(0);
    }

    componentWillReceiveProps(nextProps) {
        // Manual change workarround
        this.setState({currentView: nextProps.currentView});
        switch(nextProps.currentView) {
            case 'top':
                this.smoothScroll(0);
                break;
            case 'bottom':
                this.smoothScroll(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
                break;
            default:
                break;
        }
    }

    currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (window.pageYOffset) return window.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }

    smoothScroll(newY) {
        let startY = this.currentYPosition();
        let stopY = newY;
        let distance = stopY > startY ? stopY - startY : startY - stopY;
        let distanceFromTop = distance + startY;
        // Encapsulated in asynchronous call to make it work on firefox. But... why?
        window.setTimeout(()=>{
            window.scrollBy({top: -startY, left: 0, behavior: 'instant'});
            window.scrollBy({top: distanceFromTop, left: 0, behavior: 'smooth'});
        }, 0);
    }

    render() {
        let bottomViewStyle = {height:'100%'};
        let topViewStyle = {height: '100%'};

        return (
            <div className="DoubleViewContainer">
                <div className="topView" style={topViewStyle}>
                    {this.props.topView}
                </div>

                <div className="bottomView" style={bottomViewStyle}>
                    <div className="transitionZone"/>
                    {this.props.bottomView}</div>
            </div>
        );

    }
}

DoubleViewContainer.propTypes = {
    topView: PropTypes.element.isRequired,
    bottomView: PropTypes.element.isRequired,
};