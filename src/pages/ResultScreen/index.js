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
import {useAppContext} from '../../context';
import {
  textSize,
  textWeight,
  flexDirection,
  general,
  colorPallete,
} from '../../style';
import {useIsFocused} from '@react-navigation/native';
import scaleFont from '../../style/FontScaler';
import Dimension from '../../style/Dimension';
import Colors from '../../style/Color';
import axios from 'axios';
import {url_getData} from '../../api/endpoint';
import {LoadingComponent} from '../../components';
import {deleteUser, getLatestUserData, insertDataDetail} from '../../db';

const DataValue = ({label, value}) => (
  <View style={flexDirection.row}>
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
      <Text style={[styles.itemText, textSize[18], textWeight[800]]}>
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

const ResultScreen = ({navigation}) => {
  const [resultData, setResultData] = useState(null);
  const [latesUserData, setLatestUserData] = useState(null);
  const {
    paramName,
    paramGender,
    paramAction,
    paramSide,
    paramLimitValue,
    paramLimit,
  } = useAppContext();
  const isFocused = useIsFocused();

  const saveButtonHandler = () => {
    Alert.alert('Save Data', 'Anda yakin akan menyimpan data ini?', [
      {text: 'Ya', onPress: btnSavePress},
      {text: 'Tidak'},
    ]);
  };

  const btnSavePress = () => {
    const payload = resultData.DATA.map(x => {
      return {
        id: latesUserData.id,
        AXIS_X: x.AXIS_X,
        AXIS_Y: x.AXIS_Y,
        AXIS_Z: x.AXIS_Z,
        SPEED: x.SPEED,
        TIMESTAMP: x.TIMESTAMP,
      };
    });

    insertDataDetail(payload)
      .then(() => {
        Alert.alert('Sukses', 'Data berhasil di simpan!', [
          {
            text: 'Menuju History',
            onPress: () => navigation.navigate('History'),
          },
        ]);
      })
      .catch(error => {
        console.log('error insert: ', error);
        Alert.alert('Gagal', 'Data gagal di simpan! Harap Coba lagi', [
          {text: 'OK'},
        ]);
      });
  };

  const deleteButtonHandler = () => {
    Alert.alert('Hapus Data', 'Anda yakin akan menghapus data ini?', [
      {text: 'Ya', onPress: btnDeletePress},
      {text: 'Tidak'},
    ]);
  };

  const btnDeletePress = () => {
    deleteUser(latesUserData.id)
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
  };

  const getUserData = async () => {
    getLatestUserData()
      .then(data => {
        console.log('user data: ', data);

        setLatestUserData(data[0]);
      })
      .catch(error => console.error('error retrieve data: ', error));
  };

  const getData = async () => {
    try {
      const response = await axios.get(url_getData, {
        headers: {'Content-Type': 'application/json'},
      });

      console.log('response: ', response.data);

      setResultData(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getData();
      getUserData();
    }
  }, [isFocused]);

  if (!resultData) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <Image source={SqrBackgroundTwo} style={styles.imgBackground} />
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>Result</Text>
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
            <Text style={styles.textBoxContent}>
              {paramSide} {paramAction}
            </Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={resultData?.DATA || []}
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
          contentContainerStyle={styles.flatListContainer}
        />
        <View style={styles.bottomContentContainer}>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={saveButtonHandler}>
            <Text style={styles.buttonText}>Save</Text>
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
    backgroundColor: Colors.green,
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

  itemInnerContainer: {alignItems: 'center', justifyContent: 'space-between'},

  itemText: {color: colorPallete.black, marginRight: 12},
});

export default ResultScreen;
