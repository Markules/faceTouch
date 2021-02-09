import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cheeks = (props) => {
  return (
    <View style={styles.Container}><Text style={styles.FacePartName}>Name</Text></View>
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
        color: 'gray'
    }
});

export default Cheeks;
