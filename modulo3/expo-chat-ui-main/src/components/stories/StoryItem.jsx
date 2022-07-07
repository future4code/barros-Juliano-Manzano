import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../theme';

const StoryItem = ({ username, picture, time, stories }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => {}}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{ uri: picture }} />
				</View>
				<View style={styles.textsContainer}>
					<Text numberOfLine={1} style={styles.username}>{username}</Text>
					<Text numberOfLine={1} style={styles.time}>{time}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
	},
	button: {
		flexDirection: 'row',
		paddingBottom: 20,
		paddingRight: 20,
		paddingLeft: 10
	},
	imageContainer: {
		marginRight: 15,
		borderRadius: 25,
		height: 50,
		width: 50,
		overflow: 'hidden',
		borderColor: theme.colors.storyBorder,
		borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: "center"
	},
	image: {
		height: 55,
		width: 55,
	},
	textsContainer: {
		justifyContent: 'center'
	},
	username: {
		color: theme.colors.title,
		fontSize: theme.fontSize.title
	},
	time: {
		color: theme.colors.subTitle,
		fontSize: theme.fontSize.description		
	}
})

export default StoryItem