import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import Store from './store/Store';

// Importing Store file (Redux)

class App extends Component {

  render() {
   
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;