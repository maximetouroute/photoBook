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
        this.smoothScroll(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    }

    componentWillReceiveProps(nextProps) {
        // Manual change view workarround
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
        if (distance < 100) {
            window.scrollTo(0, stopY); return;
        }
        let speed = 15;
        if (speed >= 20) speed = 20;
        let step = Math.round(distance / 25);
        let leapY = stopY > startY ? startY + step : startY - step;
        let timer = 0;
        if (stopY > startY) {
            for ( let i=startY; i<stopY; i+=step ) {
                const loopLeapY = Number(leapY); // Ceating object copy
                setTimeout(() => window.scrollTo(0, loopLeapY), timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( let i=startY; i>stopY; i-=step ) {
            const loopLeapY = leapY;
            setTimeout(() => window.scrollTo(0, loopLeapY), timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
    }

    render() {
        let bottomViewStyle = {height:'100vh'};
        let topViewStyle = {height: '100vh'};

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