import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';


const Input = ( {text} ) => {
  return (
    <View style={styles.input}>
        <TextInput style={styles.txtInput} placeholder={text}></TextInput>
    </View>
  );
};

Input.propTypes = {
    text: PropTypes.string.isRequired,
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
