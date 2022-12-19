/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenidor}>
        <View style={[styles.borders,{flex:1}]}></View>
        <View style={[styles.borders,{flex:6}]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
    borderColor: '',
    borderWidth: 5,
    backgroundColor:'orange',
  },
  borders:{
    borderWidth: 2,
    backgroundColor:'red',
    bordercolor: 'white',
  },
  borders2:{
    borderWidth: 2,
    bordercolor: 'white',
  },
  image: {
    width: 75,
    height: 100,
  },
  containerBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  datos: {
    borderWidth: 2,
    textAlign: 'center',
  }
});

export default App;
