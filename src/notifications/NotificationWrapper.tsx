import React, { Component, ReactElement } from 'react';
import { Subtract } from 'utility-types';
import Storage, { Notification } from './Storage';


interface State {
  value: Array<Notification>;
}

  class NotificationWrapper extends React.Component {
    state: State = {
      value: [],
    };

    componentDidMount() {
      Storage.addListener((v: Array<Notification>): void => this.setState({value: v}));
    }

    render() {
      return (
          <>
            {this.state.value.map((note: Notification): JSX.Element => {
              return <span>{note.title} {note.message}</span>
            })}
        </>
      );
    }
  };

  
export default NotificationWrapper;