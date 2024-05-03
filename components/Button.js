import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Button ({text, onPress, color, theme}) {
    if (theme === undefined){
        return( 
            <View style={[styles.centered]}>
                <Pressable
                    style={[styles.button, styles.centered, {backgroundColor: color}]}
                    onPress = {onPress}
                >
                    <Text>
                        {text}
                    </Text>
                </Pressable>
            
            </View>
        )
    }
    else if (theme === 'back'){
        return( 
            <View style={[styles.centered]}>
                <Pressable
                    style={[styles.button, styles.centered, {backgroundColor: color}]}
                    onPress = {onPress}
                >
                    <Text>
                        {text}
                    </Text>
                </Pressable>
            
            </View>
        )
    }
}
   
        
   



const styles = StyleSheet.create({
    centered:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 5,
        width: 300,
        height: 100,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    text: {
        // flex: 1,
    }, 
})