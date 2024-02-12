import { StyleSheet } from 'react-native';

const textSize = StyleSheet.create({
    14: { fontSize: 14 },
    16: { fontSize: 16 },
    18: { fontSize: 18 },
    20: { fontSize: 20 },
    22: { fontSize: 22 },
    24: { fontSize: 24 },
    26: { fontSize: 26 },
    28: { fontSize: 28 },
});

const textWeight = StyleSheet.create({
    100: { fontWeight: 100 },
    200: { fontWeight: 200 },
    300: { fontWeight: 300 },
    400: { fontWeight: 400 },
    500: { fontWeight: 500 },
    600: { fontWeight: 600 },
    700: { fontWeight: 700 },
    800: { fontWeight: 800 },
});

const colorPallete = {
    primary: '#1D1C68',
    secondary: '#3A4750',
    dark: '#303841',
    light: '#ffffff',
    black: 'black',
    white: 'white',
}

const flexDirection = StyleSheet.create({
    row: { flexDirection: 'row'},
    column: { flexDirection: 'column' },
})

const general = StyleSheet.create({
    card: {
        // width: 330,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        borderRadius: 10, // Adjust the border radius as needed
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // This property is for Android shadow
        // padding: 20, // Adjust padding as needed
        backgroundColor: '#fff', // Adjust background color as needed
        },
})


export { textSize, textWeight, flexDirection, general, colorPallete };
