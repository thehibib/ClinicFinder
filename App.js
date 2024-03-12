import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Button from './components/Button.js';
import TextBox from './components/TextBox.js';
import {schedulePushNotification} from './components/Notification.js';
import {storeDataStr, getDataStr, storeDataObj, getDataObj} from './components/Storage.js';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Alpha"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Beta"
          component={ScreenBeta}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Start = ({navigation}) => {
  
  return(
    <View style={styles.container}>
      <Text style={styles.bigText}>
        Clinic Finder
      </Text>
      <View style={styles.smallContainer}>
        <Button text='Screen 1' onPress={() => navigation.navigate('Beta')} color='#aac961'/>
        <Button text='Module 2!' 
          onPress={async () => alert(await getDataStr('data'))} 
          color='#aac961'/>
        <StatusBar style="auto" />
      </View>
    </View>
  )
  
}
const ScreenBeta = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Button text='Screen 2' onPress={() => navigation.navigate('Alpha')} color='#aac961'/>
      <StatusBar style="auto" />
      <Button text='ello' onPress={async () => { 
        await schedulePushNotification({
          title:'Clinic A Updates', 
          body:'A is officially open! Tap to learn more', 
          data:'goes here'
        });
      }} color='#aac961'/>
      {/* <Notification title='Clinic A Updates' body='A is officially open! Tap to learn more' data='goes here' /> */}
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
    justifyContent: 'flex-end',
    
  },
  bigText: {
    // flex: 1,
    fontSize: 48,
    fontFamily: 'Cochin',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
//ryan fitzpatrick
