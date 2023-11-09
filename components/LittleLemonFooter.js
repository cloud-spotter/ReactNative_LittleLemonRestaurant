import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#3d524b', padding: 10, }}>
            <Text style={{ fontSize: 14, color: '#F4CE14', textAlign: 'center', }}>
                All rights reserved by Little Lemon, 2023
            </Text>
        </View>
    );
}