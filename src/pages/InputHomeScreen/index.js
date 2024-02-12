import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { Button, OptionTab, Input, DropdownComponent } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../context';
import { colorPallete } from '../../style';
import { clearSpace } from '../../style';

const InputHomeScreen = () => {
    const { paramName, updateParamName } = useAppContext();
    const { paramGender, updateParamGender } = useAppContext();
    const { paramSide, updateParamSide } = useAppContext();
    const { paramLimit, updateParamLimit } = useAppContext();
    const { paramLimitValue, updateParamLimitValue } = useAppContext();



    const selectGender = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ];

    // const selectParam = ({limit}) => {
    //     if (limit == 'Timer') {
    //         [
    //             { label: '10s', value: 10 },
    //             { label: '15s', value: 15 },
    //             { label: '25s', value: 25 },
    //         ]
    //     } else if (limit == 'Reps') {
    //         [
    //             { label: '5 reps', value: 10 },
    //             { label: '10 reps', value: 15 },
    //             { label: '15 reps', value: 25 },
    //         ]
    //     }
    // };

    const optionTimer = [
        { label: '10s', value: 10 },
        { label: '15s', value: 15 },
        { label: '25s', value: 25 },
    ];

    const optionReps = [
        { label: '5 reps', value: 10 },
        { label: '10 reps', value: 15 },
        { label: '15 reps', value: 25 },
    ];

    const txtPlaceholder = 'Select Gender';

    const navigation = useNavigation();

    const selectedSide = (value) => {
        updateParamSide(value);
    };

    const selectedLimit = (value) => {
        updateParamLimit(value);
    };

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
            <DropdownComponent options={selectGender} labelPlaceholder={'Select Gender'} setAction={updateParamGender}/>
            <Text style={style.txtOption}>Select Side</Text>
            <View style={style.row}>
                <OptionTab style={paramSide == 'Left' ? style.selectedTab : null} text='Left' setAction={() => selectedSide('Left')}/>
                <OptionTab style={paramSide == 'Right' ? style.selectedTab : null} text='Right' setAction={() => selectedSide('Right')}/>
            </View>
            <Text style={style.txtOption}>Select Parameter</Text>
            <View style={style.row}>
                <OptionTab style={paramLimit == 'Reps' ? style.selectedTab : null} text='Reps' setAction={() => selectedLimit('Reps')}/>
                <OptionTab style={paramLimit == 'Timer' ? style.selectedTab : null} text='Timer' setAction={() => selectedLimit('Timer')}/>
            </View>
            <DropdownComponent options={paramLimit === 'Timer' ? optionTimer : optionReps} labelPlaceholder={'Select Time'} setAction={updateParamLimitValue}/>
            <View style={clearSpace[40]}></View>
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
        color: 'white',
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
    selectedTab: {
        backgroundColor: colorPallete.primary,
        color: colorPallete.white,
    }
})

export default InputHomeScreen;

