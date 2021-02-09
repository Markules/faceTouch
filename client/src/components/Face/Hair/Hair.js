import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const Hair = () => {
    return (
        <TouchableOpacity style={styles.Hair}>
            
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
      backgroundColor: 'yellow' ,
      margin: 'auto',
      borderTopLeftRadius: 150,
      borderBottomLeftRadius: 80,
      borderBottomRightRadius: 100,
      borderTopRightRadius: 50


    }
})


export default Hair;