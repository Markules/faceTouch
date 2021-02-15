import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/store/reducers';
import ReduxThunk from 'redux-thunk';

import Face from './src/components/Face/Face';
import FacePartsName from './src/components/FacePartsNames/FacePartsNames';
import AskFacePart from './src/components/AskFacePart/AskFacePart';

const App = (props) => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <View style={styles.body}>
        <AskFacePart />
        <Face />
      </View>
      <FacePartsName />
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#eb5e0b',
    height: '100%',
  

  } 
})

export default App;
