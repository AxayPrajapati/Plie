import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBar from './TabBar';
const Stack = createNativeStackNavigator();

const HomeStack = props => {
  return (
    <Stack.Navigator initialRouteName="TabBar">
      <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
