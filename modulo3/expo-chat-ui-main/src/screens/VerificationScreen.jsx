import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { authStyles } from '../styles';
import { theme } from '../theme';

import Header from '../components/auth/Header';
import AppTextInput from '../components/auth/AppTextInput';
import AppButton from '../components/auth/AppButton';

const VerificationScreen = ({ navigation }) => {
	return (
		<View style={authStyles.container}>
			<View style={authStyles.form}>
				<Header title="Verification" icon="check-circle" />
				<AppTextInput icon="lock" placeholder="123456" />
			</View>
			<View style={authStyles.buttonContainer}>
				<AppButton 
					onPress={() => navigation.navigate("HomeScreen")} 
					color={theme.colors.primary} 
					title="Verify" 
				/>
			</View>
		</View>
	)
};

export default VerificationScreen;