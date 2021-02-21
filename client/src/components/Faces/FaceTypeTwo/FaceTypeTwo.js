import React from 'react';
import {View, StyleSheet} from "react-native";
import Cheeks from './Cheeks/Cheeks';
import Ears from './Ears/Ears';
import Eyes from './Eyes/Eyes';
import Hair from './Hair/Hair';
import Mouth from './Mouth/Mouth';
import Nose from './Nose/Nose';

// Face component
const FaceTypeTwo = (props) => {

    return(
        <View {...props} style={styles.Face}>
            <Hair />
            <Eyes />
            <Ears />
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
    width: '85%',
    height: '50%',
    position: 'absolute',
    marginLeft: 30,
    marginTop: 140,
    backgroundColor: "#B06C49",
    
}

})

export default FaceTypeTwo;