import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Mouth = (props) => {
  return <TouchableOpacity onPress={props.onTouchedMouth} style={styles.Mouth}>
      <View style={styles.Tongue}></View>
      <View style={[styles.Teeth, styles.LeftTeeth]}></View>
      <View style={[styles.Teeth, styles.RightTeeth]}></View>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  Mouth: {
    position: 'relative',
    width: 130,
    borderWidth: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    top: '0%',
    left: '29%',
    height: 50,
    backgroundColor: '#ff9b93',
    borderTopWidth: 0,
  },
  Tongue: {
      backgroundColor: 'red',
      width: 70,
      height: 20,
      position: 'relative',
      top: '60%',
      left: '25%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderWidth: 1,
      borderColor: 'gray'
  },
  Teeth: {
      width: 30,
      height: 15,
      backgroundColor: 'white',
      position: 'relative',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10

  },
  LeftTeeth: {
    left: 35,
    bottom: 21
  },
  RightTeeth: {
    left: 65,
    bottom: 36
  }
});

const mapDispatchToProps = (dispatch) => {
  return{
  onTouchedMouth: () => dispatch(actions.tocuhedMouth())
  }
};

export default connect(null, mapDispatchToProps)(Mouth);
