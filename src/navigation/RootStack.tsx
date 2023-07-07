import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WaiterStack} from './waiterStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {ClientStack} from './clientStack';
import ScannerScreen from '../screens/main/scanner';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Waiter"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Client" component={ClientStack} />
        <Stack.Screen name="Waiter" component={WaiterStack} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
