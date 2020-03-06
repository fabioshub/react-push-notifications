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

class Storage {
    Storage: Array<Note> = [];
    add = (title: string, message: string): void => {
        this.Storage.push(new Note(title, message));
    }

    Spawn = () => {
        console.log(this.Storage)
        return <h1>{this.Storage}</h1>
    }

    getCurrentStorage = (): Array<Note> => {
        return this.Storage;
    }
}

export default new Storage();