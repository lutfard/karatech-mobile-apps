/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SqrBackgroundTwo, iconTimer, iconUser} from '../../assets';
import PropTypes from 'prop-types';
import {
  textSize,
  textWeight,
  flexDirection,
  general,
  colorPallete,
} from '../../style';
import {deleteHistoryData, deleteUser, getDataDetailHistory} from '../../db';
import {useIsFocused} from '@react-navigation/native';
import scaleFont from '../../style/FontScaler';
import Dimension from '../../style/Dimension';
import Colors from '../../style/Color';
import result from '../../dummy/dummy';

const DataValue = ({label, value}) => (
  <View style={styles.dataValueContainer}>
    <View style={styles.boxLabel}>
      <Text
        style={[{color: colorPallete.white}, textWeight[500], textSize[14]]}>
        {label}
      </Text>
    </View>
    <Text style={[styles.dataValueText, textSize[14], textWeight[500]]}>
      {value}
    </Text>
  </View>
);

const Item = ({x, y, z, speed, index}) => (
  <View style={styles.item}>
    <View style={[flexDirection.row, styles.itemInnerContainer]}>
      <Text style={[styles.itemText, textSize[16], textWeight[800]]}>
        {index + 1}
      </Text>
      <DataValue label="X" value={x} />
      <DataValue label="Y" value={y} />
      <DataValue label="Z" value={z} />
      <Text style={[styles.speedText, textSize[14], textWeight[800]]}>
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

const HistoryDetailScreen = ({navigation, route}) => {
  const {data} = route.params;
  const [resultData, setResultData] = useState([]);
  const isFocused = useIsFocused();

  const deleteButtonHandler = () => {
    Alert.alert('Hapus Data', 'Anda yakin akan menghapus data ini?', [
      {text: 'Ya', onPress: btnDeletePress},
      {text: 'Tidak'},
    ]);
  };

  const btnDeletePress = () => {
    deleteUser(data.id)
      .then(() => {
        deleteHistoryData(data.id)
          .then(() => {
            Alert.alert('Sukses', 'Data berhasil di hapus!', [
              {
                text: 'Kembali',
                onPress: () => navigation.navigate('HomeScreen'),
              },
            ]);
          })
          .catch(error => {
            console.log('error: ', error);
            Alert.alert('Gagal', 'Data gagal di hapus! Harap Coba lagi', [
              {text: 'OK'},
            ]);
          });
      })
      .catch(error => {
        console.log('error: ', error);
        Alert.alert('Gagal', 'Data gagal di hapus! Harap Coba lagi', [
          {text: 'OK'},
        ]);
      });
  };

  useEffect(() => {
    if (isFocused) {
      console.log('data mas: ', data);
      getDataDetailHistory(data.id)
        .then(dataHist => {
          console.log('res data: ', dataHist);

          setResultData(dataHist);
        })
        .catch(error => {
          console.log('error retrieve history data');
        });
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
              {data.name}
            </Text>
            <Text style={textSize[18]}> / </Text>
            <Text style={textSize[18]}>{data.gender}</Text>
          </View>
          <View style={styles.resultContainer}>
            <Image source={iconTimer} resizeMode="contain" />
            <Text style={textSize[18]}>
              {' '}
              {data.limit} {data.type}
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textBoxContent}>{data.action}</Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={resultData}
          renderItem={({item, index}) => (
            <Item
              x={item.AXIS_X}
              y={item.AXIS_Y}
              z={item.AXIS_Z}
              speed={item.SPEED}
              index={index}
            />
          )}
          keyExtractor={(item, index) => index}
          contentContainerStyle={styles.flatListContainer}
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

  flatListContainer: {borderTopWidth: 1, borderTopColor: '#B6B6B6'},

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

  textBoxContent: {
    color: colorPallete.white,
    fontFamily: 'Poppins-Medium',
    fontSize: scaleFont(13),
  },

  item: {
    paddingVertical: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#B6B6B6',
    flex: 1,
  },

  title: {
    fontSize: 18,
  },

  dataValueContainer: {
    flex: 0.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
    // opacity: 50,
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

  dataValueText: {marginRight: 15, width: 40},

  itemInnerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    flexWrap: 'wrap',
  },

  itemText: {
    color: colorPallete.black,
    // flex: 0.1,
  },

  speedText: {color: colorPallete.black, flex: 0.15},
});

export default HistoryDetailScreen;
