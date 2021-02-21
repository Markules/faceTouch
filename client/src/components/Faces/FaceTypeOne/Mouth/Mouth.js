import React, { useEffect } from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';

import Sound from 'react-native-sound';
// Mouth component
const Mouth = (props) => {

  let voice = null;

  useEffect(() => {
    voice = new Sound('mouth.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error)
      console.log('Error when init SoundPlayer');
    });
  }, []);

  const onPressMouth = () => {
    if (voice !== null) {
      voice.play((success) => {
        if (!success) {
          console.log('Error when play SoundPlayer');
        }
      });
    }
    props.onTouchedMouth();
  };

  return (
    //If Mouth pressed, set the name as "Mouth"
    <TouchableOpacity onPress={() => onPressMouth()} style={styles.Mouth}>
      <View style={styles.Tongue}></View>
      <View style={[styles.Teeth, styles.LeftTeeth]}></View>
      <View style={[styles.Teeth, styles.RightTeeth]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Mouth: {
    position: 'relative',
    width: 100,
    borderWidth: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    bottom: '15%',
    left: '35%',
    height: 50,
    backgroundColor: '#ff9b93',
    borderTopWidth: 0,
  },
  Tongue: {
    backgroundColor: 'red',
    width: 55,
    height: 20,
    position: 'relative',
    top: '60%',
    left: '23%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  Teeth: {
    width: 30,
    height: 15,
    backgroundColor: 'white',
    position: 'relative',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  LeftTeeth: {
    left: 20,
    bottom: 21,
  },
  RightTeeth: {
    left: 51,
    bottom: 36,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    // Send an action to set name as "Mouth"
    onTouchedMouth: () => dispatch(actions.tocuhedMouth()),
  };
};

export default connect(null, mapDispatchToProps)(Mouth);
