import React, { Component } from 'react';
import './Menu.css';
import PropTypes from 'prop-types';

export class Menu extends Component {

    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(name) {
        if (typeof this.props.onMenuClick === "function") {
            this.props.onMenuClick(name);
        }
    }

    menuItems() {
        return (
            <div className="menuGrid">
                {this.props.collections.map((collectionName) => {
                    return (<div className="item" key={collectionName} onClick={() => this.onMenuClick(collectionName)}>
                        <div>{collectionName}</div>
                    </div>);
                })}
            </div>);
    }

    render() {
        return (
            <div className="Menu">
                <div className="gridWrapper">
                    <div className="gridMiddleCentered">
                        {this.menuItems()}
                    </div>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    collections: PropTypes.array.isRequired,
    onMenuClick: PropTypes.func
};

Menu.defaultProps = {
    collections: ['configure', 'your', 'menu', 'items']
};