import React from 'react';
import { StyleSheet} from 'react-native';

import AdsApp from '../src/AdsApp'

import store from '../src/store'
import {Provider} from 'react-redux'
export default class HomeScreen extends React.Component {

  render() {
    return (
      <Provider store={store} >
        <AdsApp/>
      </Provider>
    );
  }
}