import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from '../../components';
import { Ilogopunch, Ilogokick, SqrBackground } from '../../assets'
import Svg, { G, Path } from 'react-native-svg';
import { colorPallete, general } from '../../style';
import { useNavigation } from '@react-navigation/native';
import { AppProvider, useAppContext } from '../../context';
import { GetData } from '../../api';



const HomeScreen = () => {

    const { paramAction, updateParamAction } = useAppContext();
    const { dataResult, setDataResult } = useAppContext();
    const { fetchDataFromAPI } = useAppContext();
    const navigation = useNavigation();
    // const [clickedValue, setClickedValue] = useState('');
    // const [activeButton, setActiveButton] = useState(null);

   

    const ToInputHome = async (action) => {
        try {
            updateParamAction(action);
            fetchDataFromAPI();
            navigation.navigate('InputHomeScreen');
        } catch (error) {
            console.error('Error get data.', error);
        }
    };

    // const btnActionClicked = (btnIndex) => {
    //     if (activeButton !== null) {
    //         setActiveButton(null);
    //     }

    //     setActiveButton(btnIndex);
    //     setClickedValue(btnIndex);
    // };

    // const isButtonActive = (buttonIndex) => activeButton === buttonIndex;

    return (
        <AppProvider>
            <View style={style.container}>
            <Image source={SqrBackground} style={style.imgBackground}/>
            <Text style={style.textWelcome}>Welcome!</Text>
            <Text style={style.textSelect}>Please Select.</Text>
            <View style={style.sectionMenu}>
                {/* <View style={style.boxMenu}>
                    <Image style={style.imgMenu} source={Ilogopunch} resizeMode='contain'/>
                </View> */}
                {/* <View style={style.boxMenu}>
                    <Image style={style.imgMenu} source={Ilogokick} resizeMode='contain'/>
                </View> */}
                <TouchableOpacity style={[style.card, general.card]} onPress={() => ToInputHome('punch')}>
                    <Image style={style.imgMenu} source={Ilogopunch} resizeMode='contain'/>
                </TouchableOpacity>
                <TouchableOpacity style={[style.card, general.card]} onPress={() => ToInputHome('kick')}>
                    <Image style={style.imgMenu} source={Ilogokick} resizeMode='contain'/>
                </TouchableOpacity>
            </View>
            <View style={style.sectionMenu}>
                <Text style={style.txtMenu}>PUNCH</Text>
                <Text style={style.txtMenu}>KICK</Text>
            </View>
            {/* <Button text="Next" style={style.button}
                onPress={ToInputHome}
            /> */}
            <Button text="Take a Sample" style={style.buttonLight}
                onPress={ToInputHome}
            />
        </View>
        </AppProvider>
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
    card: {
        height: 150,
        width: 150,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
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
    boxMenuClicked: {
        backgroundColor: colorPallete.secondary,
    },
    txtMenu: {
        marginRight: 65,
        marginLeft: 65,
        fontSize: 18,
        fontWeight: '500',
        color: '#1D1C68',
        marginBottom: 70
    },
    imgMenu: {
        width: 90,
        color: '#1D1C68'
    },
    button: {
        backgroundColor: '#1D1C68',
        borderColor: '#1D1C68',
        color: 'white',
    },
    buttonLight: {
        backgroundColor: colorPallete.white,
        borderColor: colorPallete.primary,
        color: colorPallete.primary,
    },
    imgBackground: {
        position: 'absolute',
        width: '100%',
        resizeMode: 'stretch',
        top: 0,
        // zIndex: 1,
    }
})