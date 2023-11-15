import * as React from 'react';
import { View, StyleSheet } from 'react-native';

// Import local component
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        <MenuItems />
      </View>
      <View>
        <LittleLemonFooter />
      </View>
    </>
  );
}

// export default function App() {
// return (
//   <>
//     <View style={{flex: 1, backgroundColor: '#495E57',}}>
//       <LittleLemonHeader />
//     </View>
//     <View style={{flex: 4, backgroundColor: '#495E57', justifyContent: 'flex-start'}}>
//       <WelcomeScreen />
//     </View>
//     <View style={{flex: 1, backgroundColor: '#495E57',}}>
//       <LittleLemonFooter />
//     </View>
//   </>
// );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#495E57'
  },
});