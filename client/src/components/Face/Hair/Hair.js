import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import * as actions from '../../../store/actions';

import Sound from 'react-native-sound';
// Hair component
const Hair = (props) => {


  let voice = null;

  useEffect(() => {
    voice = new Sound('hair.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error)
      console.log('Error when init SoundPlayer');
    });
  }, []);

  const onPressHair = () => {
    if (voice !== null) {
      voice.play((success) => {
        if (!success) {
          console.log('Error when play SoundPlayer');
        }
      });
    }
    props.onTouchedHair();
  };

  return (
      // If hair is pressed, set the name as "Hair"
    <TouchableOpacity
      onPress={() => onPressHair()}
      style={styles.Hair}></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Hair: {
    position: 'absolute',
    top: -10,
    left: 120,
    height: '27%',
    width: '22%',
    backgroundColor: 'transparent',
    borderLeftColor: 'yellow',
    borderBottomColor: 'yellow',
    borderRadius: 500,
    borderLeftWidth: 10,
    borderBottomWidth: 25,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
      // Send action to set name as "Hair"
    onTouchedHair: () => dispatch(actions.tocuhedHair()),
  };
};

export default connect(null, mapDispatchToProps)(Hair);
