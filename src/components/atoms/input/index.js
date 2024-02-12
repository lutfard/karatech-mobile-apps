import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import { useAppContext } from '../../../context'; 
import { AppProvider } from '../../../context';


const Input = ( {txtPlaceholder, value, setAction } ) => {
    // const { paramName, setParamName } = useAppContext();


  return (
    <AppProvider>
        <View style={styles.input}>
        <TextInput style={styles.txtInput} placeholder={txtPlaceholder} value={value} onChangeText={setAction}></TextInput>
    </View>
    </AppProvider>
  );
};

Input.propTypes = {
    txtPlaceholder: PropTypes.string.isRequired,
    setAction: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1D1C68',
        height: 55,
        width: 320,
        marginTop: 20,
        paddingLeft: 15,
    },
    txtInput: {
        fontSize: 16,
        fontWeight: '400',
    }
})

export default Input;
