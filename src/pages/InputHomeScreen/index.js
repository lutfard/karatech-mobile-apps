import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { Button, OptionTab, Input, DropdownComponent } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../context';

const InputHomeScreen = () => {
    const { paramName, updateParamName } = useAppContext();

    const selectGender = [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' },
    ];

    const selectParam = [
        { label: '10s', value: 10 },
        { label: '15s', value: 15 },
        { label: '25s', value: 25 },
    ];

    const txtPlaceholder = 'Select Gender';

    const navigation = useNavigation();

    const btnStartPress = () => {
        updateParamName(paramName);
        navigation.navigate('ResultScreen');
    };

    return (
        <View style={style.container}>
            {/* <TouchableOpacity>
                <Text style={style.txtBack}>Back</Text>
            </TouchableOpacity> */}
            <Input txtPlaceholder='Insert Name' value={paramName} setAction={updateParamName}/>
            <DropdownComponent options={selectGender} labelPlaceholder={'Select Gender'}/>
            <Text style={style.txtOption}>Select Side</Text>
            <View style={style.row}>
                <OptionTab text='Left'/>
                <OptionTab text='Right'/>
            </View>
            <Text style={style.txtOption}>Select Parameter</Text>
            <View style={style.row}>
                <OptionTab text='Reps'/>
                <OptionTab text='Timer'/>
            </View>
            <DropdownComponent options={selectParam} labelPlaceholder={'Select Time'}/>
            <Button text='Start' style={style.button}
            onPress={btnStartPress}/>
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
        backgroundColor: '#1D1C68',
        borderColor: '#1D1C68',
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtOption: {
        fontSize: 18,
        fontWeight: 400,
        marginTop: 20,
    },
    txtBack: {
        fontSize: 16,
        fontWeight: 600,
        alignSelf: 'flex-start'
    },
})

export default InputHomeScreen;

