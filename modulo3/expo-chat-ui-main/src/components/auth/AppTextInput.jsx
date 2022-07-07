import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

import { theme } from '../../theme';
import { inputStyles } from '../../styles';

const AppTextInput = ({ icon, placeholder, ...otherProps }) => {
	return (
		<View style={inputStyles.mainContainer}>
			<View style={styles.icon}>
				<Icon name={icon} size={30} color={theme.colors.primary} />
			</View>
			<TextInput 
				placeholder={placeholder} 
				style={styles.input} 
				{...otherProps} 
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	icon: {
		alignSelf: 'center',
		flex: 1,
		fontWeight: '500',
		color: theme.colors.primary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		borderLeftWidth: 4,
		borderLeftColor: theme.colors.primary,
		flex: 2.8,
		backgroundColor: theme.colors.white,
		color: theme.colors.black,
		width: '100%',
		fontSize: 15,
		paddingLeft: 10
	}
})

export default AppTextInput;