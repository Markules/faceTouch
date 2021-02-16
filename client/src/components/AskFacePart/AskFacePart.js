import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Text, View} from 'react-native';

const AskFacePartsName = (props) => {
  // Name of face part state, defualt null
  const [partName, updatePartName] = useState(null);
  // Should fuction needs to be triggered again state 
  const [triggeredFunction, updateFunction] = useState(
    props.touched === partName,
  );

  // Mount component when part name is the same as props touched
  useEffect(() => {
    if (props.touched === partName) {
      updatePartName(null);
      pickAFacePart();
    } else pickAFacePart();
  }, [props.touched === partName]);

  // Picks a random face part function
  const pickAFacePart = async () => {
    if (!triggeredFunction) {
      const facePartName = await ['Hair', 'Nose', 'Eyes', 'Cheeks', 'Ears', 'Mouth'];
      const randomPart = await facePartName[
        Math.floor(Math.random() * facePartName.length)
      ];

      updateFunction(true);

      return updatePartName(randomPart);
    }
    return updateFunction(false);
  };

  // If part name is the same as props touched "CORRECT" text will appear
  const correctAnswer = <Text style={styles.Correct}>CORRECT!</Text>;

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
