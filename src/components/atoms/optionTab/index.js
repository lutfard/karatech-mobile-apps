import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const OptionTab = ({text, style}) => {
  return (
    <TouchableOpacity style={[styles.Button, style]}>
      <Text style={[styles.txtButton, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

OptionTab.propTypes = {
    text: PropTypes.string.isRequired,
    // onPress: PropTypes.func,
    style: PropTypes.object,
  };

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#E1E1E1',
        // borderColor: '#D7B356',
        width: 150,
        height: 35,
        borderRadius: 10,
        // borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
    },
    txtButton: {
        fontSize: 16,
        fontWeight: 500,
        color: '#A7A7A7'
    }
})


export default OptionTab;
