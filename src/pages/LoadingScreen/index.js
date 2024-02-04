import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { Iloading } from '../../assets';
import { Button } from '../../components';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={Iloading} style={{opacity:0.5}}></Image>
        <Text style={styles.txt}>measuring...</Text>
        <Button text="Force Stop" onPress={null} style={styles.button}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        backgroundColor: '#1D1C68', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 18,
        fontWeight: 500,
        color: 'white',
        marginTop: 20,
        opacity: 0.5
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'white',
        color: '#3A4750',
        
    }
})

export default LoadingScreen;

