import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';


const DropdownComponent = ({ options, labelPlaceholder }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const placeholder = {
        label: labelPlaceholder,
        value: null,
    };

    // const items = [
    //     { label: 'Option 1', value: 'option1' },
    //     { label: 'Option 2', value: 'option2' },
    //     { label: 'Option 3', value: 'option3' },
    // ];

    return (
        <View style={styles.input}>
            <RNPickerSelect
                placeholder={placeholder}
                items={options}
                onValueChange={(value) => setSelectedValue(value)}
            />
        </View>
        
    );
    };


const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#D7B356',
        height: 55,
        width: 320,
        marginTop: 20,
        // paddingLeft: 15,
    },
})

export default DropdownComponent;

