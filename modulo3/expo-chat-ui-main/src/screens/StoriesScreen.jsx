import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Stories from '../components/stories/Stories';
import Icon from '@expo/vector-icons/FontAwesome';
import { theme } from '../theme';
import  { fabStyles } from '../styles';

const StoriesScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<Stories />
			</ScrollView>
			<TouchableOpacity style={fabStyles.style}>
				<Icon name="camera" size={25} color={theme.colors.primary} />
			</TouchableOpacity>
		</View>
	)
}

export default StoriesScreen