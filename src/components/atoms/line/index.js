import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Line = () => {
    return (
        <View style={styles.line}></View>
    );
};

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 5,
        borderBottomColor: 'black',
    }
})

export default Line;
