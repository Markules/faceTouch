import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

// Nose component 
const Nose = (props) => {
  return (
    // If pressed on nose, set name as "Nose"
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
