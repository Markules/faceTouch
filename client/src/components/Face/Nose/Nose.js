import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Nose = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onTouchedNose()} style={styles.Nose}>
      <View style={styles.LeftNostril}></View>
      <View style={styles.RightNostril}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Nose: {
    backgroundColor: '#ffdbac',
    borderStyle: 'solid',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: 80,
    height: 50,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
    top: '22%',
    left: '38%',
  },

});

const mapDispatchToProps = (dispatch) => {
  return{
  onTouchedNose: () => dispatch(actions.tocuhedNose())
  }
};

export default connect(null, mapDispatchToProps)(Nose);