import React, {useEffect} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';

import Sound from 'react-native-sound';
// Cheeks component
const Cheeks = (props) => {
  let voice = null;

  useEffect(() => {
    voice = new Sound('cheeks.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer', ToastAndroid.SHORT);
    });
  }, []);

  onPressCheeks = () => {
    if (voice !== null) {
      voice.play((success) => {
        if (!success) {
          ToastAndroid.show('Error when play SoundPlayer', ToastAndroid.SHORT);
        }
      });
    }
    props.onTouchedCheeks();
  };

  return (
    // If one of the cheeks pressed, set the name as "Cheeks"
    <>
      <TouchableOpacity
        onPress={() =>  onPressCheeks()}
        style={[styles.Cheeks, styles.LeftCheek]}></TouchableOpacity>
      <TouchableOpacity
        onPress={() =>  onPressCheeks()}
        style={[styles.Cheeks, styles.RightCheek]}></TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  Cheeks: {
    position: 'relative',
    borderRadius: 30,
    borderStyle: 'solid',
    height: 62,
    width: 62,
    margin: 0,
    backgroundColor: '#FFB395',
  },
  LeftCheek: {
    top: '7%',
    left: '7%',
  },

  RightCheek: {
    bottom: '12%',
    left: '75%',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    // Send an action to set name as "Cheeks"
    onTouchedCheeks: () => dispatch(actions.tocuhedCheeks()),
  };
};

export default connect(null, mapDispatchToProps)(Cheeks);
