import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import * as actions from '../../../store/actions';
const Hair = (props) => {

    const touch = () => {
        console.log('touched')
    }

    return (
        <TouchableOpacity onPress={() => props.onTouchedHair()} style={styles.Hair}>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Hair: {
      position: 'absolute',
      top: -20,
      left: 60,
      height: 80,
      width: '50%',
      backgroundColor: 'yellow',
      margin: 'auto',
      borderTopLeftRadius: 150,
      borderBottomLeftRadius: 80,
      borderBottomRightRadius: 100,
      borderTopRightRadius: 50


    }
})

const mapDispatchToProps = (dispatch) => {
    return{
    onTouchedHair: () => dispatch(actions.tocuhedHair())
    }
};

export default connect(null, mapDispatchToProps)(Hair);