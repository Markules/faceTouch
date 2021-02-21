import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Redirect, Link} from 'react-router-native';
import FaceGame from '../../containers/FaceGame/FaceGame';

const Welcome = (props) => {
  const [redirect, updateRedirect] = useState(false);

  const onStartClick = () => {
    updateRedirect(true);
  };

  if (redirect) {
    return <Redirect to={'/game'} />;
  } else {
    return (
      <View>
        <Image
          style={styles.Image}
          source={require('../../img/FaceTouch.png')}
        />
        <TouchableOpacity
          onPress={() => onStartClick()}
          style={styles.StartButton}>
          <Text style={styles.ButtonText}>Start Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  Title: {
    color: 'white',
    fontSize: 20,
  },

  Image: {
    width: '100%',
    height: '90%',
  },

  StartButton: {
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 150,
    width: '85%',
    height: 60,
    position: 'absolute',
    marginLeft: 30,
    marginTop: 540,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 7,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    alignItems: 'center',
  },

  ButtonText: {
    fontSize: 25,
    marginTop: 7,
    color: '#fa7d09',
  },
});

export default Welcome;
