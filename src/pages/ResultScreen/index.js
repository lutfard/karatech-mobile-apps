import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { Line, Button, Card } from '../../components';
import { iconTimer, iconUser } from '../../assets';
import PropTypes from 'prop-types';
import { textSize, textWeight, flexDirection, general, colorPallete, } from '../../style';

const DATA = [
    {
        axisX: 2390,
        axisY: 2390,
        axisZ: 2390,
        speed: 200
    },
    {
        axisX: 7832,
        axisY: 5434,
        axisZ: 5224,
        speed: 205
    },
    {
        axisX: 7832,
        axisY: 5434,
        axisZ: 5224,
        speed: 205
    },
    {
        axisX: 7832,
        axisY: 5434,
        axisZ: 5224,
        speed: 205
    } ,
    {
        axisX: 7832,
        axisY: 5434,
        axisZ: 5224,
        speed: 205
    }      
];

const DataValue = ({label, value}) => (
    <View style={flexDirection.row}>
        <View style={styles.boxLabel}>
            <Text style={[{color: colorPallete.black}, textWeight[500], textSize[14]]}>{label}</Text>
        </View>
        <Text style={[{marginRight:15}, textSize[14], textWeight[500]]}>{value}</Text>
    </View>
);

const Item = ({x, y, z, speed}) => (
    <View style={styles.item}>
        <View style={flexDirection.row}>
            <DataValue label='x' value={x}/>
            <DataValue label='y' value={y}/>
            <DataValue label='z' value={z}/>
            <Text style={[{color:colorPallete.black}, textSize[18], textWeight[800]]}>{speed} m/s</Text>
        </View>
    </View>
);

Item.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
    speed: PropTypes.number,
  };

const ResultScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>Result</Text>
            <Line/>
            <View style={[styles.card, general.card]}>
                <View style={flexDirection.row}>
                    <Image source={iconUser} resizeMode='contain'/>
                    <Text style={[ styles.textName, textSize[18], textWeight[500] ]}>  Lutfi Ardiansyah</Text>
                    <Text style={textSize[18]}> / </Text>
                    <Text style={textSize[18]}>male</Text>
                </View>
                <View style={flexDirection.row}>
                    <Image source={iconTimer} resizeMode='contain'/>
                    <Text style={textSize[18]}>  30 seconds</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={{color:colorPallete.white}}>Left Punch</Text>
                </View>
            </View>
            <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item x={item.axisX} y={item.axisY} z={item.axisZ} speed={item.speed} />}
                    // keyExtractor={item => item.speed}
                />
            <Button text='nana' onPress={null} style={styles.button}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        backgroundColor: 'white', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        marginBottom: 20,
    },
    txtTitle: {
        fontSize: 28,
        fontWeight: 300,
        color: 'black',
        marginTop: 50,
        marginBottom: 30
    },
    textName: {
        color: 'black',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#1D1C68',
        borderColor: '#1D1C68',
        color: 'white'
    },
    textBox: {
        width: 290,
        height: 28,
        borderRadius: 5,
        backgroundColor: "#7F9CAF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        // backgroundColor: '#f9c2ff',
        padding: 5,
        marginVertical: 5,
        // marginHorizontal: 16,
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
        opacity: 50
    }
})

export default ResultScreen;

