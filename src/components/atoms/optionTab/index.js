import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {useAppContext} from '../../../context';
import scaleFont from '../../../style/FontScaler';
import Dimension from '../../../style/Dimension';

const OptionTab = ({style, text, setAction}) => {
  // const { paramSide, updateParamSide } = useAppContext();

  return (
    <TouchableOpacity style={[styles.Button, style]} onPress={setAction}>
      <Text style={[styles.txtButton, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

OptionTab.propTypes = {
  text: PropTypes.string.isRequired,
  setAction: PropTypes.func.isRequired,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#E1E1E1',
    // borderColor: '#D7B356',
    width: Math.round(Dimension.width * 0.41),
    paddingTop: 8,
    paddingBottom: 6,
    borderRadius: 10,
    // borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  txtButton: {
    fontSize: scaleFont(16),
    fontFamily: 'Poppins-Medium',
    color: '#A7A7A7',
  },
});

export default OptionTab;
