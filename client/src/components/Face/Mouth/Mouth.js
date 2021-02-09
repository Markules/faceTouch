import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Mouth = (props) => {
  return <TouchableOpacity onPress={props.onTouchedMouth} style={styles.Mouth}>
      <View style={styles.Tongue}></View>
      <View style={styles.Teeth}></View>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  Mouth: {
    position: 'relative',
    width: 130,
    borderWidth: 2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    top: '30%',
    left: '29%',
    height: 70,
    backgroundColor: 'black',
    borderBottomWidth: 5,
    borderTopWidth: 0,
  },
  Tongue: {
      backgroundColor: 'red',
      width: 70,
      height: 25,
      position: 'relative',
      top: '67%',
      left: '20%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
  },
  Teeth: {
      width: 30,
      height: 15,
      backgroundColor: 'white',
      position: 'relative',
      bottom: '38%',
      left: 85,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10

  }
});

const mapDispatchToProps = (dispatch) => {
  return{
  onTouchedMouth: () => dispatch(actions.tocuhedMouth())
  }
};

export default connect(null, mapDispatchToProps)(Mouth);
