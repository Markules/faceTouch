import React from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Text, View} from 'react-native';

const Cheeks = (props) => {
  let facePartName = props.touched !== null ? props.touched : null;

  return (
    <View style={styles.Container}>
      <Text style={styles.FacePartName}>{facePartName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: 'relative',
    width: '85%',
    height: 100,
    top: '75%',
    left: '7%',
  },
  FacePartName: {
    fontSize: 32,
    marginLeft: '37%',
    marginTop: '5%',
    color: 'gray',
  },
});

const mapStateToProps = (state) => {
  return {
    touched: state.face.name,
  };
};

export default connect(mapStateToProps)(Cheeks);
