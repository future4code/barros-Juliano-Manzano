import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

const BigIcon = ({ icon, size, color }) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.imageContainer}>
				<Icon name={icon} size={size} color={color} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingBottom: 10
	},
	imageContainer: {
		marginTop: 5,
		alignItems: 'center',
		marginHorizontal: 80,
		marginBottom: 10
	}
})

export default BigIcon