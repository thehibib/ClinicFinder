import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-reanimated'; //needed for SDK 51 screen bug fix
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Button from './components/Button.js';
import TextBox from './components/TextBox.js';
import {schedulePushNotification} from './components/Notification.js';
import {getLocation} from './components/Location.js';
import {searchClinics} from './components/Sorter.js'
import {storeDataStr, getDataStr, storeDataObj, getDataObj} from './components/Storage.js';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//gets location
// (async() => {
//   location = await getLocation()
//   console.log(location)
// })()






//REALLY BROKEN
//maybe just use fs to read the file and JSON.parse it?? might be easier/simpler than this
// const getClinics = async () => {
//   try {
//   //fetch only works for urls, would need to create a local host :(
//   let response = await fetch ('./clinicData.json') 
//   let data = await response.json() 
//   return data
//   } catch (e) {
//     console.log(e)
//   }
// }
// const storeClinics = async () => {
//   data = await getClinics()
//   console.log(data)
// }
// storeClinics()



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeScreens} options={{headerShown: false}}/>
        <Tab.Screen name="SettingStack" component={SettingScreens} options={{headerShown: false}}/>
        <Tab.Screen name="SearchStack" component={SearchScreens} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const HomeStack = Stack
const HomeScreens = ({navigation}) => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Alpha"
        component={Welcome}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Beta"
        component={Defaults}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  )
}
const SettingStack = Stack
const SettingScreens = ({navigation}) => {
  return(
    <SettingStack.Navigator>
      <SettingStack.Screen
        name = "Settings"
        component={Setting}
        options={{headerShown: false}}
      />
    </SettingStack.Navigator>
  )
}
const SearchStack = Stack
const SearchScreens = ({navigation}) => {
  return(
    <SearchStack.Navigator>
      <SearchStack.Screen
        name = "SearchResults"
        component = {Results}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
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
const Setting = ({navigation}) => {
  return(
      <View style={styles.container}>
        <Text>
          Setings ig
        </Text>
      </View>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </View>
      <View style={{alignItems: "flex-start", flex: 5/16}}>
        <Button text='PROCEED WITH DEFAULTS' onPress={() => navigation.navigate('SearchStack', {screen: 'SearchResults'})} color='#aac961'/>
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
const Results = ({navigation}) => {
  const [clinicData, setClinicData] = useState(null)
  return(
    <View style={styles.container}>
      <View style={{flex: 6/8, alignItems: 'flex-start', padding: 1}}>
        <Text style={[styles.leftText, {fontSize: 38}]}>
          ClinicSearch
        </Text>
        <View style = {{alignItems: 'flex-start', paddingLeft: 50}}>
          <Button text = "run search!" onPress={async () => searchClinics(setClinicData)} color='#aac961'/>
          <Text style={{fontSize: 20}}>
            {"\n"}{"\n"}Closest clinic to your location: {"\n"}
            {clinicData && `Clinic Name: ${clinicData['Clinic Name']}`}
          </Text>
        </View>
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
