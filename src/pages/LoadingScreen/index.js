/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Iloading} from '../../assets';
import {Button} from '../../components';
import {useAppContext} from '../../context';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';
import scaleFont from '../../style/FontScaler';
import {clearSpace} from '../../style';
import Colors from '../../style/Color';

const FROM_COLOR = 'rgb(69, 233, 246)';
const TO_COLOR = 'rgb(29,28,104)';

const LoadingScreen = ({navigation}) => {
  const {paramLimit, paramLimitValue} = useAppContext();
  const [timer, setTimer] = useState(paramLimitValue);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    if (paramLimit === 'Timer') {
      const intervalId = setInterval(() => {
        setTimer(prevTime => {
          const newTime = prevTime - 1;

          if (newTime === 0) {
            console.log('kepanggil dong');
            navigation.navigate('ResultScreen');
          }
          return newTime;
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
        setIsTimerRunning(false);
      };
    }
  }, [isTimerRunning]);

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={FROM_COLOR} />
            <Stop offset="1" stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <Image source={Iloading} />
      <Text style={styles.txt}>Measuring...</Text>
      <View style={clearSpace[40]} />
      {paramLimit === 'Repetition' ? (
        <Button
          text="Force Stop"
          onPress={() => navigation.navigate('ResultScreen')}
          style={styles.button}
        />
      ) : (
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>{timer} second</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    fontSize: scaleFont(20),
    fontFamily: 'Poppins-Light',
    color: '#F4F4F4',
    marginTop: 20,
  },

  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    color: '#3A4750',
  },

  timerContainer: {
    width: '50%',
    borderRadius: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 4,
  },

  timer: {
    fontFamily: 'Poppins-Medium',
    fontSize: scaleFont(20),
    color: Colors.darkBlue,
  },
});

export default LoadingScreen;
