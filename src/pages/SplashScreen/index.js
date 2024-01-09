import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Ilogo } from '../../assets';

const SplashScreen = () => {
  return (
    <View style={style.container}>
        <Image source={Ilogo}/>
        <View style={style.inlineContainer}>
            <Text style={style.appNameWhite}>kara</Text>
            <Text style={style.appNameGold}>tech</Text>
        </View>
        <Text style={style.tagLine}>P U S H   Y O U R   L I M I T</Text>
    </View>
  );
};


const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#3A4750', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'},
    inlineContainer: {
        flexDirection: 'row',
    },
    appNameWhite: {
        fontSize: 42, 
        fontWeight: 'bold',
        color: 'white',
        // fontFamily: 'Poppins-Medium'
    },
    appNameGold: {
        fontSize: 42, 
        fontWeight: 'bold',
        color: '#D7B356'
    },
    tagLine: {
        fontSize: 16,
        color: 'white'
    }
})


export default SplashScreen;
