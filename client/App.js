import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/store/reducers';
import ReduxThunk from 'redux-thunk';

import Face from './src/components/Face/Face';
import FacePartsName from './src/components/FacePartsNames/FacePartsNames';

const App = (props) => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <View>
        <Face />
      </View>
      <FacePartsName />
    </Provider>
  );
};

const styles = StyleSheet.create({ 
})

export default App;
