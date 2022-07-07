import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { authStyles } from '../styles';
import { theme } from '../theme';

import Header from '../components/auth/Header';
import AppPhoneInput from '../components/auth/AppPhoneInput';
import AppTextInput from '../components/auth/AppTextInput';
import AppButton from '../components/auth/AppButton';

const SignUpScreen = ({ navigation }) => {
	return (
		<View style={authStyles.container}>
			<View style={authStyles.form}>
				<Header title="Sign Up" icon="user-plus" />
				<AppPhoneInput />
				<AppTextInput icon="user" placeholder="Username" />
			</View>
			<View style={authStyles.buttonContainer}>
				<AppButton 
					onPress={() => navigation.navigate("VerificationScreen")} 
					color={theme.colors.primary} 
					title="Sign Up" 
				/>
			</View>
		</View>
	)
};

export default SignUpScreen;