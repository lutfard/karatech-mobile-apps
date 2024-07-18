import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Ilogopunch, Ilogokick, SqrBackground} from '../../assets';
import {general} from '../../style';
import {AppProvider, useAppContext} from '../../context';
import Dimension from '../../style/Dimension';
import scaleFont from '../../style/FontScaler';
import Colors from '../../style/Color';

const HomeScreen = ({navigation}) => {
  const {updateParamAction} = useAppContext();
  const [typeAction, setTypeAction] = useState(null);

  const ToInputHome = async action => {
    try {
      updateParamAction(action);
      // fetchDataFromAPI();
      navigation.navigate('InputHomeScreen');
    } catch (error) {
      console.error('Error get data.', error);
    }
  };

  const actionButtonHandle = type => {
    if (type === typeAction) {
      setTypeAction(null);
    } else {
      setTypeAction(type);
    }
  };

  return (
    <AppProvider>
      <SafeAreaView style={style.container}>
        <Image source={SqrBackground} style={style.imgBackground} />
        <View style={style.contentContainer}>
          <View>
            <View style={style.greetingContainer}>
              <Text style={style.textWelcome}>Welcome!</Text>
              <Text style={style.textSelect}>Please Select.</Text>
            </View>
            <View style={style.sectionMenu}>
              <View style={style.buttonContainer}>
                <TouchableOpacity
                  style={[
                    style.card,
                    typeAction === 'punch' ? general.cardPicked : general.card,
                  ]}
                  onPress={() => actionButtonHandle('punch')}>
                  <Image
                    style={style.imgMenu}
                    source={Ilogopunch}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text style={style.txtMenu}>PUNCH</Text>
              </View>
              <View style={style.buttonContainer}>
                <TouchableOpacity
                  style={[
                    style.card,
                    typeAction === 'kick' ? general.cardPicked : general.card,
                  ]}
                  onPress={() => actionButtonHandle('kick')}>
                  <Image
                    style={style.imgMenu}
                    source={Ilogokick}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text style={style.txtMenu}>KICK</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={
              typeAction !== null ? style.buttonLight : style.buttonDisabled
            }
            onPress={() => ToInputHome(typeAction)}
            disabled={typeAction !== null ? false : true}>
            <Text style={style.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </AppProvider>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 80,
    paddingTop: '20%',
    width: '100%',
  },

  greetingContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  textWelcome: {
    fontSize: scaleFont(32),
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
    includeFontPadding: false,
  },

  textSelect: {
    fontSize: scaleFont(16),
    color: Colors.white,
    fontFamily: 'Poppins-Light',
  },

  sectionMenu: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  buttonContainer: {
    alignItems: 'center',
  },

  card: {
    height: Math.round(Dimension.dimTotal * 0.14),
    width: Math.round(Dimension.dimTotal * 0.14),
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtMenu: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-Light',
    color: Colors.darkBlue,
    marginTop: 12,
  },

  imgMenu: {
    width: Math.round(Dimension.dimTotal * 0.1),
    height: Math.round(Dimension.dimTotal * 0.112),
  },

  buttonLight: {
    backgroundColor: Colors.semiDarkBlue,
    borderRadius: 100,
    alignSelf: 'center',
    width: '50%',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 10,
  },

  buttonDisabled: {
    backgroundColor: Colors.darkGrey,
    borderRadius: 100,
    alignSelf: 'center',
    width: '50%',
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

  imgBackground: {
    position: 'absolute',
    width: '100%',
    height: '45%',
    resizeMode: 'stretch',
  },

  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 24,
  },

  modalTitle: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-Light',
    color: Colors.semiDarkBlue,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 18,
  },

  modalTextInput: {
    borderWidth: 1,
    borderColor: Colors.semiDarkBlue,
    borderRadius: 10,
    paddingHorizontal: 18,
    fontWeight: '500',
    fontSize: scaleFont(16),
    color: Colors.darkBlue,
  },

  modalBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  modalButtonApproved: {
    width: '47.5%',
    borderRadius: 100,
    alignItems: 'center',
    backgroundColor: Colors.semiDarkBlue,
    paddingTop: 8,
    paddingBottom: 6,
  },

  modalButtonApprovedText: {
    fontSize: scaleFont(15),
    fontFamily: 'Poppins-Medium',
    color: Colors.white,
  },

  modalButtonCancel: {
    width: '47.5%',
    borderRadius: 100,
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingTop: 6,
    paddingBottom: 4,
    borderWidth: 2,
    borderColor: Colors.semiDarkBlue,
  },

  modalButtonCancelText: {
    fontSize: scaleFont(15),
    fontFamily: 'Poppins-Medium',
    color: Colors.semiDarkBlue,
  },
});
