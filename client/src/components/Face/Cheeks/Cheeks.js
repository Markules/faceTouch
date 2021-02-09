import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Cheeks = (props) => {
  return (
      <>
    <TouchableOpacity onPress={() => props.onTouchedCheeks()} style={[styles.Cheeks, styles.LeftCheek]}></TouchableOpacity>
    <TouchableOpacity onPress={() => props.onTouchedCheeks()} style={[styles.Cheeks, styles.RightCheek]}></TouchableOpacity>
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

const mapDispatchToProps = (dispatch) => {
    return{
    onTouchedCheeks: () => dispatch(actions.tocuhedCheeks())
    }
};

export default connect(null, mapDispatchToProps)(Cheeks);
