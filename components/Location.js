import * as Location from 'expo-location';

export async function getLocation(){  
    try {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            let errMsg = ('Permission for location return denied')
            return(errMsg)
        }
        let curLocation = await Location.getCurrentPositionAsync({});
        return(JSON.stringify(curLocation))
    }
    catch (e){
        console.log('error :(')
    }
    
}