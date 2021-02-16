import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

// Eyes Component
const Eyes = (props) => {

  return (
    // If one of the eyes touched, set name as "Eyes"
    <>
      <TouchableOpacity onPress={() => props.onTouchedEyes()} style={styles.LeftEye}>
          <TouchableOpacity onPress={() => props.onTouchedEyes()} style={styles.OutterPupil}>
        <TouchableOpacity onPress={() => props.onTouchedEyes()} style={[styles.LeftPupil, styles.Pupil]}>
        <TouchableOpacity onPress={() => props.onTouchedEyes()} style={styles.InnerPupil}></TouchableOpacity>

        </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.onTouchedEyes()} style={styles.RightEye}>
          <TouchableOpacity onPress={() => props.onTouchedEyes()} style={styles.OutterPupil}>
        <TouchableOpacity onPress={() => props.onTouchedEyes()} style={[styles.RightPupil, styles.Pupil]}>
            <TouchableOpacity onPress={() => props.onTouchedEyes()} style={styles.InnerPupil}></TouchableOpacity>
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
