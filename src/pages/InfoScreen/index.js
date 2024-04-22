import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useAppContext } from '../../context'; 
import { colorPallete, textSize, textWeight } from '../../style';

const InfoScreen = () => {
  const { paramAction } = useAppContext();
  const { dataResult } = useAppContext();

  return (
    <View>
      <Text style={[textWeight[800], textSize[18], {color:colorPallete.black, marginTop:20}]}>Description</Text>
      <Text style={textSize[16]}>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.</Text>

      <Text style={[textWeight[800], textSize[18], {color:colorPallete.black, marginTop:20}]}>Workflow</Text>
      <Text style={textSize[16]}>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.</Text>

      {/* <Text>{dataResult ? JSON.stringify(dataResult) : 'empty'}</Text>
      <Text>{paramAction}</Text> */}
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({})