import * as React from 'react';
import { View } from 'react-native';

// Import local component
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#495E57',}}>
        <LittleLemonHeader />
        <WelcomeScreen />
        <MenuItems />
        <LittleLemonFooter />
      </View>
    </>
  );
}

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