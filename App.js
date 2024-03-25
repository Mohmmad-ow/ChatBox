import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoadScreen from './src/pages/LoadScreen';
import welcome from './src/pages/auth/Welcome';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="welcome"
          component={welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loading Screen"
          component={LoadScreen}
          options={{headerTitle: null}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
