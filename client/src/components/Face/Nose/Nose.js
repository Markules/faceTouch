import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Nose = () => {
  return (
    <TouchableOpacity style={styles.Nose}>
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
  LeftNostril: {
    // backgroundColor: 'black',
    // width: 8,
    // height: 8,
    // borderRadius: 50,
    // position: 'relative',
    // left: 8,
    // top: '65%'

  },
  RightNostril: {
    // backgroundColor: 'black',
    // width: 8,
    // height: 8,
    // borderRadius: 50,
    // position: 'relative',
    // left: 60,
    // top: '53%'

  },
});

export default Nose;
