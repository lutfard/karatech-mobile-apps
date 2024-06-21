import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../../style/Color';
import scaleFont from '../../style/FontScaler';
import Dimension from '../../style/Dimension';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>Data Info</Text>
        <View style={styles.underLine} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec elementum arcu, eget porta est. Aenean finibus neque risus,
            volutpat consectetur est condimentum eu. Quisque eu lectus odio.
            Praesent cursus tortor a porta placerat. Fusce sit amet condimentum
            elit, in venenatis mi. Aenean fermentum purus leo, ut blandit massa
            luctus vel.
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Workflow:</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec elementum arcu, eget porta est. Aenean finibus neque risus,
            volutpat consectetur est condimentum eu. Quisque eu lectus odio.
            Praesent cursus tortor a porta placerat. Fusce sit amet condimentum
            elit, in venenatis mi. Aenean fermentum purus leo, ut blandit massa
            luctus vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec elementum arcu, eget porta est. Aenean finibus neque
            risus, volutpat consectetur est condimentum eu. Quisque eu lectus
            odio. Praesent cursus tortor a porta placerat. Fusce sit amet
            condimentum elit, in venenatis mi. Aenean fermentum purus leo, ut
            blandit massa luctus vel.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
    marginVertical: 50,
  },

  contentContainer: {
    paddingHorizontal: 24,
  },

  content: {
    marginBottom: 20,
  },

  title: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
  },

  description: {
    fontSize: scaleFont(16),
    fontFamily: 'Poppins-Light',
    color: Colors.black,
    textAlign: 'justify',
  },
});
