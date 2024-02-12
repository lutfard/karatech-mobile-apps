import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useAppContext } from '../../context'; 

const InfoScreen = () => {
  const { paramAction } = useAppContext();
  const { dataResult } = useAppContext();

  return (
    <View>
      <Text>DATA INFO</Text>
      {/* {paramAction && (
        <Text>{JSON.stringify(paramAction , null, 2)}</Text>
      )} */}

      <Text>{dataResult ? JSON.stringify(dataResult) : 'empty'}</Text>
      <Text>{paramAction}</Text>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({})