import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const AskFacePartsName = (props) => {
  const [partName, updatePartName] = useState(null);
  const [triggeredFunction, updateFunction] = useState(props.touched === partName);
  const [initalState, activateFacePart] = useState(partName);

  useEffect(() => {
    pickAFacePart();
  }, [props.touched === partName]);

  const pickAFacePart = () => {
    if(!triggeredFunction){
    const facePartName = ['Hair', 'Nose', 'Eyes', 'Cheeks', 'Ears', 'Mouth'];
    const randomPart =
      facePartName[Math.floor(Math.random() * facePartName.length)];

      updateFunction(true);

    return setTimeout(() => {
      updatePartName(randomPart);
    }, 500);
  }
  return updateFunction(false);

  };

const correctAnswer = (
  <Text style={styles.Correct}>Correct!</Text>
)
  
console.log(triggeredFunction);
  return (
    <View style={styles.Container}>
      {props.touched === partName ? correctAnswer : null}
      <Text style={[styles.FacePartName]}>{partName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: 'relative',
    width: '85%',
    height: 100,
    top: '2%',
    left: '7%',
  },
  FacePartName: {
    fontSize: 32,
    marginLeft: '37%',
    marginTop: '5%',
    color: 'white',
  },
  Correct: {
    fontSize: 28,
    marginLeft: '35%',
    marginTop: '2%',
    color: 'green',
  },
});

const mapStateToProps = (state) => {
  return {
    touched: state.face.name,
  };
};

export default connect(mapStateToProps)(AskFacePartsName);
