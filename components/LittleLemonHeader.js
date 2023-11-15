import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function LittleLemonHeader() {
    return (
    <View style={headerStyles.container}>
        <Text style={headerStyles.headerText}>
            Little Lemon
        </Text>
    </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: '#F4CE14', 
        justifyContent: 'flex-end',
    },
    headerText: {
        paddingTop: 20,
        paddingBottom: 15,
        fontSize: 30,
        color: 'black',
        textAlign: 'center' 
    }
});