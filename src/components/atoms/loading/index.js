import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Dimension from '../../../style/Dimension';
import Colors from '../../../style/Color';
import scaleFont from '../../../style/FontScaler';

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingCard}>
        <ActivityIndicator size="large" color={Colors.semiDarkBlue} />
        <Text style={styles.loadingText}>Loading . . . .</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    position: 'absolute',
    height: Dimension.height,
    width: Dimension.width,
  },
  loadingCard: {
    backgroundColor: '#FFFFFF',
    width: '70%',
    height: '20%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    alignSelf: 'center',
    paddingTop: 20,
    fontFamily: 'Poppins-Medium',
    fontSize: scaleFont(18),
    color: Colors.darkBlue,
  },
});

export default LoadingComponent;
