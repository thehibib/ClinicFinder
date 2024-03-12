import AsyncStorage from '@react-native-async-storage/async-storage';


export async function storeDataObj(value, key){
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        // saving error
      }
}

export async function storeDataStr(value, key){
  try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
}


export async function getDataObj(key){
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      console.log(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }

};

export async function getDataStr(key){
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return(value)
    }
  }  catch (e) {
    // error reading value
  }
};



