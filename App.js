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
import { TextInput, Button, Switch, Chip, Surface } from 'react-native-paper';

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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Text style={styles.mio}>TextInput (Email)</Text>
        <TextInput label="Email" placeholder="Escriu el teu email: " />
        <View>
          <Text style={styles.mio}>Buttons(amb text i icona)</Text>
          <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>Alien</Button>
          <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>Alien</Button>
          <Button icon="alien" mode="contained-tonal" onPress={() => console.log('Pressed')}>Alien</Button>
          <Button icon="alien" mode="contained-tonal" onPress={() => console.log('Pressed')}>Alien</Button>


          <Text style={styles.mio}>Switch Necessites un descans?</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Text style={styles.mio}>Botó dins d´un component Surface?</Text>
          <Surface style={styles.surface} elevation={4}>
            <Button icon="alien" mode="outlined" onPress={() => console.log('Pressed')}>Alien</Button>
          </Surface>
          <Text style={styles.mio}>Provant Chips</Text>
          <View style={styles.chips}>
            <Chip icon="web" onPress={() => console.log('Pressed')}>Internet</Chip>
            <Chip icon="wifi" onPress={() => console.log('Pressed')}>Wifi</Chip>
          </View>


        </View>

        {/* <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Primer pas">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="Mira els teus canvis">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View> */}
      </ScrollView>
    </SafeAreaView>
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
    marginLeft:10,
    marginTop:110,
    width:300,
    bottom:100,
    flexDirection:'row',
  }

});

export default App;
