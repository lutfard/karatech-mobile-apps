import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import scaleFont from '../../../style/FontScaler';

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
    width: '50%',
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  txtButton: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 4,
  },
});

export default Button;
