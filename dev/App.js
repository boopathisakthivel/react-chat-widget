import React, { Component } from 'react';
import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addUserCustomComponent } from '../index';

class Suggestion extends Component {
  render() {
    return (
      <div className={this.props.className}>{this.props.text}</div>
    );
  }
};

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {    
    toggleMsgLoader();
    
    setTimeout(() => {
      toggleMsgLoader();      
      if (newMessage === 'fruits') {
        setQuickButtons([ { label: 'Apple', value: 'apple', type: "image", imagelink: "https://cdn-images-1.medium.com/max/1600/1*o6syWN_N3DPnAQ1zQM7z6g.jpeg" }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage(newMessage);
      }
      
      addUserCustomComponent(Suggestion, {"className": "rcw-client", "text": "test"}, false);
    }, 2000);
  }

  handleQuickButtonClicked = (e) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  render() {
    return (
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
      />
    );
  }
}
