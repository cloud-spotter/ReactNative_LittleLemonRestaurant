import * as React from 'react';
import { View, Text } from 'react-native'

export default function LittleLemonHeader() {
    return (
    <View style={{ height: 110, backgroundColor: '#F4CE14', justifyContent: 'flex-end' }}>
        <Text style={{ paddingTop: 20, paddingBottom: 15, fontSize: 30, color: 'black', textAlign: 'center' }}>
            Little Lemon
        </Text>
    </View>
    );
}