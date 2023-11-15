import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={footerStyles.container}>
            <Text style={footerStyles.footerText}>
                All rights reserved by Little Lemon, 2023
            </Text>
        </View>
    );
}

const footerStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: '#3d524b', 
        padding: 10,
    },
    footerText: {
        fontSize: 14, 
        color: '#F4CE14', 
        textAlign: 'center',
    },
});