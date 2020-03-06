import React from 'react';
import NotificationWrapper from './NotificationWrapper';

export class Note {
    title: string;
    message: string;
    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
    }
}

function Storage(): JSX.Element {
    const add = (title: string, message: string): void => {
        this.Storage.push(new Note(title, message));
    }

    const Spawn = () => {
        console.log(this.Storage)
        return <h1>{this.Storage}</h1>
    }

    const getCurrentStorage = (): Array<Note> => {
        return this.Storage;
    }

    return this;
}

export default new Storage();