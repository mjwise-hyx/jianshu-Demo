import React, { Component, Fragment } from 'react';
import GlobalStyle from './style.js';
import IconFont from './statics/iconfont/iconfont'
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store = {store}>
          <Header/>
          <GlobalStyle />
          <IconFont />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
