import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { Button } from '../../components'

const InputHomeScreen = () => {
  return (
    <View style={style.container}>
        <Text>Select Side</Text>
        <TextInput placeholder='Name'/>
        <Button text='Start' style={style.button} onPress={null}/>
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        backgroundColor: 'white', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#D7B356',
        borderColor: '#D7B356',
        color: 'white'
    }
})

export default InputHomeScreen;

