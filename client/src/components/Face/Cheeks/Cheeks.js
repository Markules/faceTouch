import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Cheeks = () => {
  return (
      <>
    <TouchableOpacity style={[styles.Cheeks, styles.LeftCheek]}></TouchableOpacity>
    <TouchableOpacity style={[styles.Cheeks, styles.RightCheek]}></TouchableOpacity>
    </>
    );
};

const styles = StyleSheet.create({
  Cheeks: {
    position: 'relative',
    borderRadius: 20,
    borderStyle: 'solid',
    height: 65,
    width: 65,
    margin: 0,
    backgroundColor: '#FFB395'
},
LeftCheek: {
    top: '53%',
    left: '5%'
},

RightCheek: {
    top: '38%',
    left:'75%'
}
});

export default Cheeks;
