import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import { useAppContext } from '../../../context';


const DropdownComponent = ({ options, labelPlaceholder, setAction }) => {
    // const [selectedValue, setSelectedValue] = useState(null);
    // const { paramGender, updateParamgender } = useAppContext();
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
                onValueChange={setAction}
            />
        </View>
        
    );
    };


DropdownComponent.propTypes = {
    options: PropTypes.object.isRequired,
    setAction: PropTypes.func
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1D1C68',
        height: 55,
        width: 320,
        marginTop: 20,
        // paddingLeft: 15,
    },
})

export default DropdownComponent;

