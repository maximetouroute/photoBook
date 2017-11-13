import React, { Component } from 'react';
import './DoubleViewContainer.css';
import PropTypes from 'prop-types';


export class DoubleViewContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentView: props.currentView
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.previousScrollTop = (document.scrollingElement || document.documentElement).scrollTop;
    }

    componentWillReceiveProps(nextProps) {
        // Manual change view workarround
        this.setState({currentView: nextProps.currentView});
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('wheel', this.handleWheel);
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('wheel', this.handleWheel);
    }

    handleKeyDown(event) {
        switch(event.key) {
            case 'ArrowUp':
                if( document.body.scrollTop < 100  && this.state.currentView === 'bottom' ) {
                    this.setState({currentView: 'top'});
                }
                break;
            case 'ArrowDown':
                if( this.state.currentView === 'top' ) {
                    this.setState({currentView: 'bottom'});
                }
                break;
        }
    }

    handleWheel(event) {
        if ( event.deltaY > 0 && this.state.currentView === 'top' ) {
            this.setState({currentView: 'bottom'});
        }
    }

    handleScroll(event) {
        let scrollingElement = document.scrollingElement || document.documentElement;
        let scrollTop = scrollingElement.scrollTop;
        const delta = -(scrollTop - this.previousScrollTop);
        this.previousScrollTop = scrollTop;
        if ( delta < 0 ) {
            if ( this.state.currentView === 'top' ) {
                this.setState({currentView: 'bottom'});
            }
        } else if ( delta > 0 && scrollTop < 100) {

            if ( this.state.currentView === 'bottom' ) {
                this.setState({currentView: "top"});
            }
        }
    }

    render() {

        let topViewStyle = {};
        let bottomViewStyle = {};

        if ( this.state.currentView === 'bottom' ) {
            topViewStyle = {height: '0', opacity: 0, pointerEvents: 'none'};
            bottomViewStyle = {height:'100vh', opacity: 1};
        } else {
            topViewStyle = {height: '100vh', opacity: 1 };
            bottomViewStyle = {height: '0', overflow: 'hidden', opacity: 0, pointerEvents: 'none'};
        }

        return (
            <div className="DoubleViewContainer">
                <div className="topView" style={topViewStyle}>
                    {this.props.topView}
                </div>

                <div className="bottomView" style={bottomViewStyle}>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    {this.props.bottomView}</div>
            </div>
        );

    }
}

DoubleViewContainer.propTypes = {
    topView: PropTypes.element.isRequired,
    bottomView: PropTypes.element.isRequired,
};