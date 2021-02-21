import React, { useEffect } from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';

import Sound from 'react-native-sound';
// Nose component 
const Nose = (props) => {

  let voice = null;

  useEffect(() => {
    voice = new Sound('nose.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error)
      console.log('Error when init SoundPlayer');
    });
  }, []);

  const onPressNose = () => {
    if (voice !== null) {
      voice.play((success) => {
        if (!success) {
          console.log('Error when play SoundPlayer');
        }
      });
    }
    props.onTouchedNose();
  };
  return (
    // If pressed on nose, set name as "Nose"
    <TouchableOpacity onPress={() => onPressNose()} style={styles.Nose}>
      <View style={styles.LeftNostril}></View>
      <View style={styles.RightNostril}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Nose: {
    backgroundColor: '#B06C49',
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: 70,
    height: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
    bottom: '30%',
    left: '40%',
  },

});

const mapDispatchToProps = (dispatch) => {
  return{
    // Send action to set name as "Nose"
  onTouchedNose: () => dispatch(actions.tocuhedNose())
  }
};

export default connect(null, mapDispatchToProps)(Nose);
