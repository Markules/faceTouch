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
      top: -10,
      left: 120,
      height: '27%',
      width: '22%',
      backgroundColor: 'transparent',
      borderLeftColor: 'yellow',
      borderBottomColor: 'yellow',
      borderRadius: 500,
      borderLeftWidth: 10,
      borderBottomWidth: 25


     


    }
})

const mapDispatchToProps = (dispatch) => {
    return{
    onTouchedHair: () => dispatch(actions.tocuhedHair())
    }
};

export default connect(null, mapDispatchToProps)(Hair);