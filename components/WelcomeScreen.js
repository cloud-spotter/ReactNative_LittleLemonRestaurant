import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

// Reinstate after Ex below!
// export default function WelcomeScreen() {
//     return (
//     <View style={{ flex: 1 }}>
//         <Text
//             style={{
//             padding: 40,
//             fontSize: 30,
//             color: '#EDEFEE',
//             textAlign: 'center',
//             }}>
//             Welcome to Little Lemon
//         </Text>
//         <Text
//             style={{
//             fontSize: 24,
//             padding: 30,
//             marginVertical: 8,
//             color: '#EDEFEE',
//             textAlign: 'center',
//             }}>
//             Little Lemon is a charming neighborhood bistro that serves simple food
//             and classic cocktails in a lively but casual environment. We would love
//             to hear more about your experience with us!
//         </Text>
//     </View>
//     );
// }

// Starter code version from Wk1 Ex: Build a scrollable component
export default function WelcomeScreen() {
    return (
        <ScrollView 
            // persistentScrollbar={true} DEBUGGING
            indicatorStyle={"white"} 
            style={{ flex: 1 }}>
            <Text
                style={{
                    padding: 40,
                    fontSize: 36,
                    color: '#EDEFEE',
                    textAlign: 'center',
                }}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={{
                    fontSize: 24,
                    padding: 20,
                    marginVertical: 8,
                    color: '#EDEFEE',
                    textAlign: 'center',
                }}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
        </ScrollView>
    );
  }