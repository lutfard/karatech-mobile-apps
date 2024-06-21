import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {OptionTab, Input, DropdownComponent} from '../../components';
import {useAppContext} from '../../context';
import {colorPallete} from '../../style';
import {clearSpace} from '../../style';
import {insertData} from '../../db';
import scaleFont from '../../style/FontScaler';
import Colors from '../../style/Color';
import {Icon} from '../../assets/icon/Icon';

const InputHomeScreen = ({navigation}) => {
  const {paramName, updateParamName} = useAppContext();
  const {paramGender, updateParamGender} = useAppContext();
  const {paramSide, updateParamSide} = useAppContext();
  const {paramLimit, updateParamLimit} = useAppContext();
  const {paramLimitValue, updateParamLimitValue} = useAppContext();

  const selectGender = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];

  const optionTimer = [
    {label: '10s', value: 10},
    {label: '15s', value: 15},
    {label: '25s', value: 25},
  ];

  const optionReps = [
    {label: '5 reps', value: 10},
    {label: '10 reps', value: 15},
    {label: '15 reps', value: 25},
  ];

  const selectedSide = value => {
    updateParamSide(value);
  };

  const selectedLimit = value => {
    updateParamLimit(value);
  };

  const btnStartPress = () => {
    const payload = {
      name: paramName,
      action: `Punch ${paramSide}`,
      type: paramLimit,
      gender: paramGender,
    };

    // insertData(payload);
    updateParamName(paramName);
    navigation.navigate('LoadingScreen');
  };

  return (
    <View style={style.container}>
      <View style={style.toolbar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.backButton}>
          <Icon.ChevronRight
            height={scaleFont(17.2)}
            width={scaleFont(10)}
            style={{color: Colors.black}}
          />
          <Text style={style.txtBack}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={style.contentContainer}>
        <Text style={style.txtOption}>Select Side</Text>
        <View style={style.row}>
          <OptionTab
            style={paramSide === 'Left' ? style.selectedTab : null}
            text="Left"
            setAction={() => selectedSide('Left')}
          />
          <OptionTab
            style={paramSide === 'Right' ? style.selectedTab : null}
            text="Right"
            setAction={() => selectedSide('Right')}
          />
        </View>
        <Input
          txtPlaceholder="Insert Name"
          value={paramName}
          setAction={updateParamName}
        />
        <DropdownComponent
          options={selectGender}
          labelPlaceholder={'Select Gender'}
          setAction={updateParamGender}
        />
        <View style={clearSpace[20]} />
        <View style={style.row}>
          <OptionTab
            style={paramLimit === 'Repetition' ? style.selectedTab : null}
            text="Repetition"
            setAction={() => selectedLimit('Repetition')}
          />
          <OptionTab
            style={paramLimit === 'Timer' ? style.selectedTab : null}
            text="Timer"
            setAction={() => selectedLimit('Timer')}
          />
        </View>
        <DropdownComponent
          options={paramLimit === 'Timer' ? optionTimer : optionReps}
          labelPlaceholder={'Select Time'}
          setAction={updateParamLimitValue}
        />
        <View style={clearSpace[40]} />
        <TouchableOpacity
          style={
            paramName === null ||
            paramGender === null ||
            paramLimitValue === null
              ? style.bottomButtonDisabled
              : style.bottomButton
          }
          onPress={btnStartPress}
          disabled={
            paramName === null ||
            paramGender === null ||
            paramLimitValue === null
              ? true
              : false
          }>
          <Text
            style={
              paramName === null ||
              paramGender === null ||
              paramLimitValue === null
                ? style.bottomButtonTextDisabled
                : style.bottomButtonText
            }>
            START
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  toolbar: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  txtBack: {
    fontSize: scaleFont(16),
    fontFamily: 'Poppins-Light',
    color: Colors.black,
    lineHeight: 28,
    paddingTop: 4,
    marginLeft: 10,
  },

  contentContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txtOption: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-Light',
    color: Colors.semiDarkBlue,
  },

  selectedTab: {
    backgroundColor: colorPallete.primary,
    color: colorPallete.white,
  },

  bottomButtonDisabled: {
    backgroundColor: '#E1E1E1',
    width: '50%',
    alignItems: 'center',
    borderRadius: 100,
    paddingTop: 8,
    paddingBottom: 4,
  },

  bottomButtonTextDisabled: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: scaleFont(18),
    color: Colors.darkGrey,
  },

  bottomButton: {
    backgroundColor: Colors.darkBlue,
    width: '50%',
    alignItems: 'center',
    borderRadius: 100,
    paddingTop: 8,
    paddingBottom: 4,
  },

  bottomButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: scaleFont(18),
    color: Colors.white,
  },
});

export default InputHomeScreen;
