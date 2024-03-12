import {StyleSheet, View, TextInput} from 'react-native';
import {useState} from 'react';
export default function TextBox({onChange}){
  const [input, setInput] = useState(null)
  const handleChange = (text) => {
    setInput(text)
    onChange(text)
  }
  return(
      <View>
          <TextInput
              style={styles.input}
              onChangeText={handleChange}
              value={input}
          />
      </View>
  )
}

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});