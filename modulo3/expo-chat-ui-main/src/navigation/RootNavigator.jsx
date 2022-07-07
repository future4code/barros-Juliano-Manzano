import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerificationScreen from '../screens/VerificationScreen';
import MessagesScreen from '../screens/MessagesScreen';
import OnCallScreen from '../screens/OnCallScreen';

import HomeNavigator from './HomeNavigator';
import Header from '../components/common/Header';

const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="LoginScreen" 
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
			<Stack.Screen name="VerificationScreen" component={VerificationScreen} />
			<Stack.Screen name="HomeScreen" component={HomeNavigator} options={{
				headerShown: true,
				header: () => <Header title="Chat" />
			}} />
			<Stack.Screen name="MessagesScreen" component={MessagesScreen} />
			<Stack.Screen name="OnCallScreen" component={OnCallScreen} />
		</Stack.Navigator>
	)
}

export default RootNavigator;