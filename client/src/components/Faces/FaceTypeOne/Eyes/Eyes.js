import React, { useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';

import Sound from 'react-native-sound';
// Eyes Component
const Eyes = (props) => {

  let voice = null;

  useEffect(() => {
    voice = new Sound('eyes.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error)
      console.log('Error when init SoundPlayer');
    });
  }, []);

  const onPressEyes = () => {
    if (voice !== null) {
      voice.play((success) => {
        if (!success) {
          console.log('Error when play SoundPlayer');
        }
      });
    }
    props.onTouchedEyes();
  };

  return (
    // If one of the eyes touched, set name as "Eyes"
    <>
      <TouchableOpacity onPress={() => onPressEyes()} style={styles.LeftEye}>
          <TouchableOpacity onPress={() => onPressEyes()} style={styles.OutterPupil}>
        <TouchableOpacity onPress={() => onPressEyes()} style={[styles.LeftPupil, styles.Pupil]}>
        <TouchableOpacity onPress={() => onPressEyes()} style={styles.InnerPupil}></TouchableOpacity>

        </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPressEyes()} style={styles.RightEye}>
          <TouchableOpacity onPress={() => onPressEyes()} style={styles.OutterPupil}>
        <TouchableOpacity onPress={() => onPressEyes()} style={[styles.RightPupil, styles.Pupil]}>
            <TouchableOpacity onPress={() => onPressEyes()} style={styles.InnerPupil}></TouchableOpacity>
        </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  Pupil: {
    backgroundColor: '#000',
    width: '65%',
    height: '65%',
    position: 'relative',
    top: '15%',
    left: '20%',
    borderRadius: 50,
  },
  InnerPupil: {
    backgroundColor: 'white',
    width: '35%',
    height: '35%',
    borderRadius: 50
  },
  LeftEye: {
    width: '20%',
    height: '20%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '30%',
    left: '20%',
    borderRadius: 50,
  },
  OutterPupil: {
    height: '80%',
    backgroundColor: '#3abeff',
    width: '80%',
    borderRadius: 50,
    position: 'relative',
    top: '15%',
    left: '15%'
  },
  RightEye: {
    width: '20%',
    height: '20%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '30%',
    right: '20%',
    borderRadius: 50,
  },

});

const mapDispatchToProps = (dispatch) => {
  return{
    // Send an action to set name as "Eyes"
  onTouchedEyes: () => dispatch(actions.tocuhedEyes())
  }
};

export default connect(null, mapDispatchToProps)(Eyes);
