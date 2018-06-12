import React, { Component } from 'react';
import './Menu.css';
import PropTypes from 'prop-types';

export class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentActiveElementIndex: -1
        };
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(name) {
        if (typeof this.props.onMenuClick === "function") {
            this.props.onMenuClick(name);
        }
        this.setState({currentActiveElementIndex:this.props.collections.indexOf(name)});
    }

    menuItems() {

        const menuItems = [];
        for (let i = 0 ; i < this.props.collections.length ; i++) {
            const collectionName = this.props.collections[i];
            const className = (this.state.currentActiveElementIndex === i) ? 'item selected' : 'item';
            menuItems.push(
                (<div className={className} key={collectionName} onClick={() => this.onMenuClick(collectionName)}>
                <div>{collectionName}</div>
            </div>)
            );

        }
        return (
            <div className="menuGrid">
                {menuItems}
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
