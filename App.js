/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import { Provider as PaperProvider, TextInput, Button, Switch, Chip, Surface } from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const saluda = (textAMostrar) => { return (<Text style={{ color: 'blue', fontSize: 25 }}> Hola {textAMostrar}</Text>); };

const saluda2 = () => {
  return (
    <View>
      {saluda('Duende')}
      {saluda('Venom')}
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const isMarvel = true;
  return (
    <PaperProvider>
      {/*{isMarvel ? saluda('Spider Man') : saluda('Sergio')}
       {saluda('IronMan')}
    {saluda('Spiderman')}
    {saluda('DoctorStrange')} */}
    {isMarvel&&saluda('SpiderMan')}
    {saluda2()}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mio: {
    color: "black",
    marginTop: 18,
    fontSize: 18,
    fontWeight: '700',
  },
  chips: {
    marginLeft: 10,
    marginTop: 110,
    width: 300,
    bottom: 100,
    flexDirection: 'row',
  }

});

export default App;
