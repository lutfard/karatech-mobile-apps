import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={style.container}>
        <Text style={style.textWelcome}>Welcome!</Text>
        <Text style={style.textSelect}>Please Select.</Text>
        <View style={style.sectionMenu}>
            <View style={style.boxMenu}></View>
            <View style={style.boxMenu}></View>
        </View>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        backgroundColor: 'white', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWelcome: {
        fontSize: 32,
        color: 'black',
    },
    textSelect: {
        fontSize: 16,
        color: 'black',
    },
    sectionMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    boxMenu: {
        height: 150,
        width: 150,
        margin: 15,
        // borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        elevation: 5, // For Android box shadow
        // shadowColor: '#000', // For iOS box shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    }
})