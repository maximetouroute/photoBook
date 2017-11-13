import React, { Component } from 'react';
import { Gallery } from './../../components/Gallery/Gallery';
import { Menu } from './../../components/Menu/Menu';
import { DoubleViewContainer } from './../../components/DoubleViewContainer/DoubleViewContainer';
import PropTypes from 'prop-types';

export class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: props.gallery,
            galleryPhotos: props.gallery.map(gallery => gallery.photos),
            galleryNames: props.gallery.map(gallery => gallery.name),
            selectedGallery: 0,
            manualChangeView: 'bottom'
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(name) {
        for(let i = 0 ; i < this.state.galleryNames.length ; i++) {
            let menuName = this.state.galleryNames[i];
            if ( name === menuName ) {
                this.switchView(name);
            }
        }
    }

    switchView(name) {
        this.setState((previousState) => {
            return {
                selectedGallery: previousState.galleryNames.indexOf(name),
                manualChangeView: 'bottom'
            };
        });
    }

    gallery() {
        return (<Gallery photos={this.state.galleryPhotos[this.state.selectedGallery]}
                         name={this.state.galleryNames[this.state.selectedGallery]}
                         description={this.state.gallery[this.state.selectedGallery].description}/>);
    }

    menu() {
        return (<Menu collections={this.state.galleryNames} onMenuClick={this.handleMenuClick}/>)
    }

    render() {
        return (
            <DoubleViewContainer topView={this.menu()} bottomView={this.gallery()} currentView={this.state.manualChangeView}/>
        );
    }
}

Book.propTypes = {
    gallery: PropTypes.array.isRequired
};