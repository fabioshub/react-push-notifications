import React, { Component } from 'react';
import Storage, { Note } from './Storage';
import { notStrictEqual } from 'assert';

interface p {
    children: JSX.Element;
};

const callHome = (): void => {
    console.log('hi');
}

class NotificationWrapper extends Component {
    state = {
        p: ''
    }

    reRender() {
        this.setState({ p: Math.random() });
    }

    render() {
        return this.state.p + Storage.getCurrentStorage();
    };
}



export default NotificationWrapper;