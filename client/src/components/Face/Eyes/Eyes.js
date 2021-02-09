import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Eyes = (props) => {

  return (
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
    height: '70%',
    position: 'relative',
    top: '15%',
    left: '20%',
    borderRadius: 50,
  },
  InnerPupil: {
    backgroundColor: 'white',
    width: '50%',
    height: '35%',
    borderRadius: 50
  },
  LeftEye: {
    width: '25%',
    height: '25%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '25%',
    left: '20%',
    borderRadius: 50,
  },
  OutterPupil: {
    height: '60%',
    backgroundColor: '#3abeff',
    width: '75%',
    borderRadius: 50,
    position: 'relative',
    top: '15%',
    left: '15%'
  },
  RightEye: {
    width: '25%',
    height: '25%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '25%',
    right: '20%',
    borderRadius: 50,
  },
  RightPupil: {
 
  },
});

const mapDispatchToProps = (dispatch) => {
  return{
  onTouchedEyes: () => dispatch(actions.tocuhedEyes())
  }
};

export default connect(null, mapDispatchToProps)(Eyes);
