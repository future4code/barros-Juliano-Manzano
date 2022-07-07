import React, { useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';

import { inputStyles } from '../../styles';
import { theme } from '../../theme';

const AppPhoneInput = () => {
	const phoneInput = useRef();
	return (
		<View style={inputStyles.mainContainer}>
			<PhoneInput
				ref={phoneInput}
				defaultCode="BF"
				withDarkTheme
				withDarkShadow
				textInputStyles={styles.inputStyle}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: theme.colors.white,
		color: theme.colors.black,
		width: '100%',
		fontSize: 15,
		flex: 1,
		height: 50
	}
})

export default AppPhoneInput;