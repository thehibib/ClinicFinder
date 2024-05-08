import { StatusBar } from 'expo-status-bar';
import {TouchableWithoutFeedback, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-reanimated'; //needed for SDK 51 bug fix

const Stack = createNativeStackNavigator();
import Button from './components/Button.js';
import TextBox from './components/TextBox.js';
import {schedulePushNotification} from './components/Notification.js';
import {getLocation} from './components/Location.js';
import {storeDataStr, getDataStr, storeDataObj, getDataObj} from './components/Storage.js';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Alpha"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Beta"
          component={Defaults}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Welcome = ({navigation}) => {
  return(
    <TouchableWithoutFeedback onPress ={() => navigation.navigate('Beta')}>
      <View style={styles.container}>
        <View style={{ flex: 3/2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.bigText}>
          Clinic Finder
        </Text>
        </View>
        <View style={styles.smallContainer}>
          <Text>Tap to Start</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
  
}
const Defaults = ({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={{alignItems: "flex-start", flex: 3/8}}>
        <Text style={[styles.leftText, {fontSize: 38}]}>
          We use defaults
        </Text>
        <Text style={[styles.leftText, {fontSize: 20, paddingTop: 10}]}>
          To start searching the moment you open the app, wherever you are. {"\n"}{"\n"}
          We use presets found through your phone to find the following: {"\n"}{"\n"}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </View>
      <View style={{alignItems: "flex-start", flex: 5/16}}>
        <Button text='PROCEED WITH DEFAULTS' onPress={() => navigation.navigate('Alpha')} color='#aac961'/>
        <StatusBar style="auto" />
        <Button text='MANUALLY CHANGE PRESETS' onPress={async () => { 
          await schedulePushNotification({
            title:'Clinic A Updates', 
            body:'A is officially open! Tap to learn more', 
            data:'goes here'
          });
        }} color='#aac961'/>
        <Button text='Privacy Details'
          theme='silent'
          onPress={async () => alert('lmao we steal ur data')}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  smallContainer: {
    flex: 1/2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bigText: {
    // flex: 1,
    fontSize: 48,
    fontFamily: 'Cochin',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    fontFamily: 'Cochin',
    textAlign: 'left',
    width: 400,
    paddingHorizontal: 50,
  },
})
//ryan fitzpatrick
