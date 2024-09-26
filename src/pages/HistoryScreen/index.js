import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {iconUserWhite} from '../../assets';
import {
  textSize,
  textWeight,
  flexDirection,
  general,
  colorPallete,
} from '../../style';
import {getDataHistory} from '../../db';
import {useIsFocused} from '@react-navigation/native';
import scaleFont from '../../style/FontScaler';
import Dimension from '../../style/Dimension';
import Colors from '../../style/Color';
import {LoadingComponent} from '../../components';

const CardItem = ({name, action, recordDate, onPress}) => (
  <TouchableOpacity
    style={[styles.cardItemContainer, general.card]}
    onPress={onPress}>
    <View style={styles.cardContentContainer}>
      <View style={styles.boxIcon}>
        <Image source={iconUserWhite} />
      </View>
      <View style={(flexDirection.row, {flex: 1})}>
        <View style={[styles.textarea, flexDirection.col]}>
          <Text
            style={[
              {color: colorPallete.black},
              textWeight[700],
              textSize[16],
            ]}>
            {name}
          </Text>
          <View style={styles.cardDateContainer}>
            <Text>{action}</Text>
            <Text style={styles.cardItemDate}>{recordDate}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const HistoryScreen = ({navigation}) => {
  const [histData, setHistData] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getDataHistory()
        .then(dataHist => {
          console.log('history user list: ', dataHist);
          setHistData(dataHist);
        })
        .catch(error => {
          console.error('error retrieve history: ', error);
        });
    }
  }, [isFocused]);

  if (!histData) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>History</Text>
        <View style={styles.underLine} />
      </View>
      <FlatList
        data={histData}
        renderItem={({item}) => (
          <CardItem
            name={item.name}
            action={item.action}
            recordDate={item.create_date}
            onPress={() => navigation.navigate('HistoryDetail', {data: item})}
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

  flatlistContainer: {paddingHorizontal: 24},

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
    flex: 1,
  },

  cardItemContainer: {marginBottom: 10, flex: 1},

  cardContentContainer: {flex: 1, flexDirection: 'row'},

  cardDateContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },

  // cardItemDate: {marginLeft: 90},
});

export default HistoryScreen;
