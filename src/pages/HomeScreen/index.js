import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components';
import { Ilogopunch, Ilogokick } from '../../assets'
import Svg, { G, Path } from 'react-native-svg';
import { colorPallete } from '../../style';


const HomeScreen = ({navigation}) => {
  return (
    <View style={style.container}>
        {/* <View style={style.halfBox}> */}
        <Text style={style.textWelcome}>Welcome!</Text>
        <Text style={style.textSelect}>Please Select.</Text>
        <View style={style.sectionMenu}>
            <View style={style.boxMenu}>
                <Image style={style.imgMenu} source={Ilogopunch} resizeMode='contain'/>
            </View>
            <View style={style.boxMenu}>
                <Image style={style.imgMenu} source={Ilogokick} resizeMode='contain'/>
            </View>
        </View>
        <View style={style.sectionMenu}>
            <Text style={style.txtMenu}>PUNCH</Text>
            <Text style={style.txtMenu}>KICK</Text>
        </View>
        <Button text="Next" style={style.button}
            onPress={() => navigation.navigate('InputHome')}
        />
        {/* </View> */}
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
        color: '#1D1C68',
    },
    textSelect: {
        fontSize: 16,
        color: '#1D1C68',
    },
    sectionMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    halfBox: {
        height: 500,
        width: 500,
        backgroundColor: colorPallete.dark
    },
    // boxMenu: {
    //     height: 150,
    //     width: 150,
    //     margin: 15,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 80,
    //     borderStyle: 'solid',
    //     borderColor: 'black',
    //     borderRadius: 1,
    //     elevation: 3, // For Android box shadow
    //     // shadowColor: '#000', // For iOS box shadow
    //     shadowOffset: { width: 0, height: 0 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 0.2,
    // },
    boxMenu: {
        height: 150,
        width: 150,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: '#1D1C68',
    },
    txtMenu: {
        marginRight: 65,
        marginLeft: 65,
        fontSize: 18,
        fontWeight: '500',
        color: '#1D1C68'
    },
    imgMenu: {
        width: 90,
        color: '#1D1C68'
    },
    button: {
        backgroundColor: '#1D1C68',
        borderColor: '#1D1C68',
        color: 'white',
    }
})