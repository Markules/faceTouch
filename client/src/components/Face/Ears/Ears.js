import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Eyes = (props) => {

  return (
    <>
      <TouchableOpacity onPress={() => props.onTouchedEars()} style={[styles.LeftEar, styles.Ears]}></TouchableOpacity>
      <TouchableOpacity onPress={() => props.onTouchedEars()} style={[styles.RightEar, styles.Ears]}></TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
 Ears: {
    backgroundColor: '#ffdbac',
    height: 45,
    width: 30,
    borderRadius: 50,
    position: 'relative',
 },
LeftEar: {
    left: -20,
    top: '35%'
}, 

RightEar: {
    left: 325,
    top: '22%'
    
}


});

const mapDispatchToProps = (dispatch) => {
  return{
  onTouchedEars: () => dispatch(actions.tocuhedEars())
  }
};

export default connect(null, mapDispatchToProps)(Eyes);
