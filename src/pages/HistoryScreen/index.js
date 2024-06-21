import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {iconTimer, iconUser, iconUserWhite} from '../../assets';
import PropTypes from 'prop-types';
import {
  textSize,
  textWeight,
  flexDirection,
  general,
  colorPallete,
} from '../../style';
import {getData} from '../../db';
import {useIsFocused} from '@react-navigation/native';
import scaleFont from '../../style/FontScaler';
import Dimension from '../../style/Dimension';
import Colors from '../../style/Color';

const DATA = [
  {
    id: 101,
    name: 'Lutfi Ardiansyah',
    action: 'Left Punch',
    recordDate: '04/02/2024 14:28',
  },
  {
    id: 102,
    name: 'Lutfi Ardiansyah',
    action: 'Right Punch',
    recordDate: '04/02/2024 15:28',
  },
  {
    id: 103,
    name: 'Lutfi Ardiansyah',
    action: 'Right Punch',
    recordDate: '04/02/2024 16:58',
  },
];

const CardItem = ({name, action, recordDate, onPress}) => (
  <TouchableOpacity
    style={[{marginBottom: 10}, general.card]}
    onPress={onPress}>
    <View style={[styles.row, flexDirection.row]}>
      <View style={styles.boxIcon}>
        <Image source={iconUserWhite} />
      </View>
      <View style={flexDirection.row}>
        <View style={[styles.textarea, flexDirection.col]}>
          <Text
            style={[
              {color: colorPallete.black},
              textWeight[700],
              textSize[16],
            ]}>
            {name}
          </Text>
          <View style={[flexDirection.row]}>
            <Text>{action}</Text>
            <Text style={{marginLeft: 90}}>{recordDate}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const HistoryScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // getData();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>History</Text>
        <View style={styles.underLine} />
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <CardItem
            name={item.name}
            action={item.action}
            recordDate={item.recordDate}
            onPress={() => navigation.navigate('HistoryDetail')}
          />
        )}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // alignItems: 'center',
  },

  txtTitle: {
    fontSize: scaleFont(24),
    color: Colors.black,
    fontFamily: 'Poppins-Light',
    alignSelf: 'center',
  },

  underLine: {
    height: 2,
    width: Math.round(Dimension.width * 0.08),
    backgroundColor: Colors.darkBlue,
    alignSelf: 'center',
  },

  titleContainer: {
    marginTop: 50,
    marginBottom: 30,
  },

  flatlistContainer: {flex: 1, paddingHorizontal: 24},

  boxIcon: {
    width: 37,
    height: 56,
    backgroundColor: colorPallete.primary,
    position: 'relative',
    padding: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textarea: {
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default HistoryScreen;
