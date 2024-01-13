import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Button = ({text, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.Button, style]} onPress={onPress}>
      <Text style={[styles.txtButton, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
    Button: {
        // backgroundColor: 'red',
        // borderColor: '#D7B356',
        width: 190,
        height: 50,
        borderRadius: 50,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75
    },
    txtButton: {
        fontSize: 18,
        fontWeight: 500,
        color: '#D7B356'
    }
})

export default Button;
