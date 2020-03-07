import React from 'react';
import NotificationWrapper from './NotificationWrapper';

export class Notification {
    title: string;
    message: string;
    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
    }
}


class Storage {
    Storage: Array<Notification> = [];
    Listeners: Array<any> = [];

    notifyListeners = (): void => {
        this.Listeners.forEach((NotifyListener: any) => NotifyListener(this.Storage));
    };

    popAndPush = () => {
        console.log(this.Listeners)
        this.Storage.pop();
        this.notifyListeners();
    };

    setTimer = async () => {
        await setTimeout(() => this.popAndPush(), 3000);
    };

    addListener = (listener: any): void => {
        console.log('added listener', listener)
        this.Listeners.push(listener);
    };

    addNotification = (title: string, message: string): void => {
        this.add(new Notification(title, message));
        this.notifyListeners();
    };

    add = (note: Notification): Array<Notification> => {
        this.Storage.push(note);
        this.setTimer();
        return this.Storage;
    };


}

export default new Storage();