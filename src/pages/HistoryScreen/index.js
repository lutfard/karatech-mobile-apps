import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { Line, Button, Card } from '../../components';
import { iconTimer, iconUser, iconUserWhite } from '../../assets';
import PropTypes from 'prop-types';
import { textSize, textWeight, flexDirection, general, colorPallete, } from '../../style';

const DATA = [
    {
        id: 101,
        name: 'Lutfi Ardiansyah',
        action: 'Left Punch',
        recordDate: '04/02/2024 14:28'
    },
    {
        id: 102,
        name: 'Lutfi Ardiansyah',
        action: 'Right Punch',
        recordDate: '04/02/2024 15:28'
    },
    {
        id: 103,
        name: 'Lutfi Ardiansyah',
        action: 'Right Punch',
        recordDate: '04/02/2024 16:58'
    },
];

const CardItem = ({name, action, recordDate}) => (
    <View style={[{marginBottom:10}, general.card]}>
            <View style={[styles.row, flexDirection.row]}>
                <View style={styles.boxIcon}>
                    <Image source={iconUserWhite}/>
                </View>
                <View style={flexDirection.row}>
                    <View style={[styles.textarea, flexDirection.col]}>
                    <Text style={[{color:colorPallete.black}, textWeight[700], textSize[16]]}>{name}</Text>
                    <View style={[flexDirection.row]}>
                        <Text>{action}</Text>
                        <Text style={{marginLeft:90}}>{recordDate}</Text>
                    </View>
                    </View>
                </View>
            </View>
        </View>
);

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
        <Text>History</Text>
        <FlatList
            data={DATA}
            renderItem={({item}) => <CardItem name={item.name} action={item.action} recordDate={item.recordDate} />}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        alignItems: 'center'
    },
    textarea: {
        marginLeft: 10,
        justifyContent: 'center',
    }
})

export default HistoryScreen;
