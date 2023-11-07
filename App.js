import * as React from 'react';
import { View } from 'react-native';

// Import local component
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    // <View style={{flex: 1, justifyContent: "flex-start", padding: 45}}>
    <View style={{flex: 1, backgroundColor: '#495E57',}}>
      <LittleLemonHeader />
      <LittleLemonFooter />
    </View>
  );
}