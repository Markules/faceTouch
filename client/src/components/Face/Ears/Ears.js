import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

// Ears component
const Ears = (props) => {

  return (
    // If one of the ears is pressed, set the name to "Ears"
    <>
      <TouchableOpacity onPress={() => props.onTouchedEars()} style={[styles.LeftEar, styles.Ears]}></TouchableOpacity>
      <TouchableOpacity onPress={() => props.onTouchedEars()} style={[styles.RightEar, styles.Ears]}></TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
 Ears: {
    backgroundColor: '#ffdbac',
    height: 75,
    width: 30,
    borderRadius: 50,
    position: 'relative',
 },
LeftEar: {
    left: -15,
    top: '35%'
}, 

RightEar: {
    left: 290,
    top: '13%'
    
}


});

const mapDispatchToProps = (dispatch) => {
  return{
    // Send an action to set name as "Ears"
  onTouchedEars: () => dispatch(actions.tocuhedEars())
  }
};

export default connect(null, mapDispatchToProps)(Ears);
