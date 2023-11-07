// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from 'react';
import { View } from 'react-native';

// Import local component
import LittleLemonHeader from './components/LittleLemonHeader';

export default function App() {
  return (
    // <View style={{flex: 1, justifyContent: "flex-start", padding: 45}}>
    <View style={{flex: 1, backgroundColor: '#495E57'}}>
      <LittleLemonHeader />
    </View>
  );
}