import React, { Component } from 'react';

import { ContextMenu } from '../../src/index';
import '../../src/react-chayns-contextmenu/index.scss';
import ExampleContainer from '../ExampleContainer';

export default class Example extends Component {
    constructor() {
        super();

        this.state = {
            x: 0,
            y: 0,
            hideContextMenu: true,
        };

        this.setContextMenu = this.setContextMenu.bind(this);
        this.removeContextMenu = this.removeContextMenu.bind(this);
        this.deleteOnClick = this.deleteOnClick.bind(this);
        this.addOnClick = this.addOnClick.bind(this);
    }

    setContextMenu(event) {
        this.setState({
            x: event.pageX,
            y: event.pageY,
            hideContextMenu: false
        });
    }

    removeContextMenu() {
        this.setState({
            hideContextMenu: true
        });
    }

    deleteOnClick() {
        console.log('Löschen');
        this.setState({
            hideContextMenu: true
        });
    }

    addOnClick() {
        console.log('Hinzufügen');
        this.setState({
            hideContextMenu: true
        });
    }

    render() {
        const items = [
            {
                className: 'fa fa-plus',
                onClick: this.addOnClick,
                text: 'Hinzufügen'
            },
            {
                className: 'fa fa-trash-o',
                onClick: this.deleteOnClick,
                text: 'Löschen'
            }
        ];

        return(
            <ExampleContainer headline="ContextMenu">
                <div style={{ margin: '15% 45%' }}>
                    <i className="fa fa-info-circle" style={{ fontSize: '5rem', alignSelf: 'center' }} onClick={this.setContextMenu}/>
                    <ContextMenu
                        x={this.state.x}
                        y={this.state.y}
                        hide={this.state.hideContextMenu}
                        items={items}
                        onLayerClick={this.removeContextMenu}
                    />
                </div>
            </ExampleContainer>
        );
    }
}
