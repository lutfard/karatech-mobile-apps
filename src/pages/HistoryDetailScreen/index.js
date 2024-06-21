import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Button} from '../../components';
import {SqrBackgroundTwo, iconTimer, iconUser} from '../../assets';
import PropTypes from 'prop-types';
import {useAppContext} from '../../context';
import {
  textSize,
  textWeight,
  flexDirection,
  general,
  colorPallete,
} from '../../style';
import result from '../../dummy/dummy';
import {getLatestUserData, insertData} from '../../db';
import {useIsFocused} from '@react-navigation/native';
import scaleFont from '../../style/FontScaler';
import Dimension from '../../style/Dimension';
import Colors from '../../style/Color';

const DataValue = ({label, value}) => (
  <View style={flexDirection.row}>
    <View style={styles.boxLabel}>
      <Text
        style={[{color: colorPallete.white}, textWeight[500], textSize[14]]}>
        {label}
      </Text>
    </View>
    <Text style={[{marginRight: 15, width: 40}, textSize[14], textWeight[500]]}>
      {value}
    </Text>
  </View>
);

const Item = ({x, y, z, speed, index}) => (
  <View style={styles.item}>
    <View
      style={[
        flexDirection.row,
        {alignItems: 'center', justifyContent: 'space-between'},
      ]}>
      <Text
        style={[
          {color: colorPallete.black, marginRight: 12},
          textSize[18],
          textWeight[800],
        ]}>
        {index + 1}
      </Text>
      <DataValue label="X" value={x} />
      <DataValue label="Y" value={y} />
      <DataValue label="Z" value={z} />
      <Text
        style={[{color: colorPallete.black}, textSize[18], textWeight[800]]}>
        {speed} m/s
      </Text>
    </View>
  </View>
);

Item.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  speed: PropTypes.number,
};

const HistoryDetailScreen = ({navigation}) => {
  const {dataResult} = useAppContext();
  const {
    paramName,
    paramGender,
    paramAction,
    paramSide,
    paramLimitValue,
    paramLimit,
  } = useAppContext();
  const isFocused = useIsFocused();

  const deleteButtonHandler = () => {
    Alert.alert('Hapus Data', 'Anda yakin akan menghapus data ini?', [
      {text: 'Ya', onPress: btnDeletePress},
      {text: 'Tidak'},
    ]);
  };

  const btnDeletePress = () => {
    // insertData(paramName);
    Alert.alert('Sukses', 'Data berhasil di hapus!', [
      {
        text: 'Kembali',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  useEffect(() => {
    if (isFocused) {
      getLatestUserData();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Image source={SqrBackgroundTwo} style={styles.imgBackground} />
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>History Detail</Text>
        <View style={styles.underLine} />
      </View>
      <View style={styles.contentContainer}>
        <View style={[styles.card, general.card]}>
          <View style={styles.resultContainer}>
            <Image source={iconUser} resizeMode="contain" />
            <Text style={[styles.textName, textSize[18], textWeight[500]]}>
              {' '}
              {paramName}
            </Text>
            <Text style={textSize[18]}> / </Text>
            <Text style={textSize[18]}>{paramGender}</Text>
          </View>
          <View style={styles.resultContainer}>
            <Image source={iconTimer} resizeMode="contain" />
            <Text style={textSize[18]}>
              {' '}
              {paramLimitValue} {paramLimit === 'Timer' ? 'Second' : 'Reps'}
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text
              style={{
                color: colorPallete.white,
                fontFamily: 'Poppins-Medium',
                fontSize: scaleFont(13),
              }}>
              {paramSide} {paramAction}
            </Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={result.DATA}
          renderItem={({item, index}) => (
            <Item
              x={item.AXIS_X}
              y={item.AXIS_Y}
              z={item.AXIS_Z}
              speed={item.SPEED}
              index={index}
            />
          )}
          keyExtractor={item => item.SPEED}
          contentContainerStyle={{
            borderTopWidth: 1,
            borderTopColor: '#B6B6B6',
          }}
        />
        <View style={styles.bottomContentContainer}>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRed}
            onPress={deleteButtonHandler}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  imgBackground: {
    position: 'absolute',
    width: '100%',
    height: '28%',
    resizeMode: 'stretch',
  },

  contentContainer: {
    paddingHorizontal: 24,
    flex: 1,
    width: '100%',
  },

  card: {
    marginBottom: 20,
    paddingVertical: 24,
    paddingHorizontal: 32,
  },

  resultContainer: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },

  txtTitle: {
    fontSize: scaleFont(24),
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },

  underLine: {
    height: 2,
    width: Math.round(Dimension.width * 0.08),
    backgroundColor: Colors.white,
    alignSelf: 'center',
  },

  titleContainer: {
    marginTop: 50,
    marginBottom: 30,
  },

  textName: {
    color: 'black',
  },

  bottomContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 32,
  },

  btnSave: {
    // marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'green',
    borderColor: 'green',
    color: 'white',
  },

  btnDelete: {
    // marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
  },

  textBox: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#7F9CAF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    paddingBottom: 4,
  },

  item: {
    paddingVertical: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderBottomColor: '#B6B6B6',
  },

  title: {
    fontSize: 18,
  },

  boxLabel: {
    width: 26,
    height: 22,
    padding: 0,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorPallete.primary,
    opacity: 50,
  },

  buttonGreen: {
    backgroundColor: Colors.darkBlue,
    borderRadius: 100,
    alignSelf: 'center',
    width: '45%',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 10,
  },

  buttonText: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-Medium',
    color: Colors.white,
    borderColor: 'white',
    lineHeight: 24,
  },

  buttonRed: {
    backgroundColor: Colors.red,
    borderRadius: 100,
    alignSelf: 'center',
    width: '45%',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 10,
  },
});

export default HistoryDetailScreen;
