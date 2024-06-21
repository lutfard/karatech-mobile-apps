import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import {AppProvider} from '../../../context';
import scaleFont from '../../../style/FontScaler';

const Input = ({txtPlaceholder, value, setAction}) => {
  // const { paramName, setParamName } = useAppContext();

  return (
    <AppProvider>
      <View style={styles.input}>
        <TextInput
          style={styles.txtInput}
          placeholder={txtPlaceholder}
          value={value}
          onChangeText={setAction}
        />
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
    width: '100%',
    marginTop: 20,
    paddingLeft: 15,
  },
  txtInput: {
    fontSize: scaleFont(16),
    fontWeight: '400',
  },
});

export default Input;
