import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { Button, OptionTab, Input, DropdownComponent } from '../../components';
import RNPickerSelect from 'react-native-picker-select';

const InputHomeScreen = () => {
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

    return (
        <View style={style.container}>
            <Text>Select Side</Text>
            <View style={style.row}>
                <OptionTab text='Left'/>
                <OptionTab text='Right'/>
            </View>
            <Input text='Insert Name'/>
            <DropdownComponent options={selectGender} labelPlaceholder={'Select Gender'}/>
            <View style={style.row}>
                <OptionTab text='Reps'/>
                <OptionTab text='Timer'/>
            </View>
            <DropdownComponent options={selectParam} labelPlaceholder={'Select Time'}/>
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
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default InputHomeScreen;

