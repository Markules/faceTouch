import React from 'react';
import {View, Image, StyleSheet, Text} from "react-native";
import Cheeks from './Cheeks/Cheeks';
import Eyes from './Eyes/Eyes';
import Hair from './Hair/Hair';
import Mouth from './Mouth/Mouth';
import Nose from './Nose/Nose';

const Face = (props) => {

    return(
        <View {...props} style={styles.Face}>
            <Hair />
            <Eyes />
            <Cheeks />
            <Nose />
            <Mouth />
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
Face:{
    borderStyle: 'solid',
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 150,
    width: 340,
    height: 420,
    position: 'absolute',
    marginLeft: 30,
    marginTop: 100,
    backgroundColor: "#ffdbac",
    
}

})

export default Face;