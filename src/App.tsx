import React from 'react';
import './App.css';
import Button from './components/Buttons/Button';
import Searchbar from './components/Searchbars/Searchbar';
import NotificationWrapper from './notifications/NotificationWrapper';
// import Storage from './notifications/Storage';

function App(props: any) {

  // React.useEffect(() => {
  //   console.log(Storage.getCurrentStorage())
  // }, [Storage.Storage])

  console.log(props)

  const addNote = (): void => {
    // Storage.add('title', 'message' + Math.random());
    props.onIncrement();
  };

  const readNotes = (): void => {
    // console.log(Storage.Storage);
  }
  return (
    <>
      <div className="App">
        <Button icon={<i className="fas fa-ad"></i>} onClick={addNote}></Button>
        <Button icon={<i className="fas fa-ad"></i>} variant='light' onClick={readNotes}>Login</Button>
        <Searchbar>hey</Searchbar>
      </div>
    </>
  );
}

export default NotificationWrapper(App);
