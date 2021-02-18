import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/store/reducers';
import ReduxThunk from 'redux-thunk';

import FaceGame from './src/containers/FaceGame/FaceGame';
import Welcome from './src/components/Welcome/Welcome';
import { Route, NativeRouter, Switch } from 'react-router-native';


const App = (props) => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <NativeRouter>
      <View style={styles.body}>
        <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/game" component={FaceGame} />
        </Switch>
      </View>
      </NativeRouter>
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fa7d09',
    height: '100%',
  

  } 
})

export default App;
