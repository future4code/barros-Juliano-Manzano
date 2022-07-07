import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProfilePicture from '../components/oncall/ProfilePicture';
import OptionButtons from '../components/oncall/OptionButtons';
import { theme } from '../theme';

const OnCallScreen = ({ navigation, route }) => {
	const { username, picture } = route.params;
	const [speakerOn, setSpeakerOn] = useState(false);
	const [isMuted, setIsMuted] = useState(false);

	return (
		<View style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
			<View style={styles.profileContainer}>
				<View style={styles.usernameAndTime}>
					<Text style={styles.username}>{username}</Text>
					<Text style={styles.time}>00:45</Text>
				</View>
				<ProfilePicture picture={picture} />
			</View>
			<View style={styles.optionsContainer}>
				<OptionButtons 
					onPress={() => setIsMuted(value => !value)}
					name="microphone-slash"
					size={60}
					color={isMuted ? theme.colors.secondary : theme.colors.halfOpacitySecondary}
				/>
				<OptionButtons 
					onPress={() => setSpeakerOn(value => !value)}
					name="volume-up"
					size={60}
					color={speakerOn ? theme.colors.primary : theme.colors.halfOpacityPrimary}
				/>
			</View>
			<View style={styles.endCallContainer}>
				<OptionButtons 
					onPress={() => navigation.goBack()}
					name="phone"
					size={60}
					color={theme.colors.danger}
				/>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	profileContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingBottom: 50
	},
	usernameAndTime: {
		paddingVertical: 50,
		alignItems: 'center'
	},
	username: {
		fontSize: theme.fontSize.title,
		color: theme.colors.white
	},
	time: {
		fontSize: theme.fontSize.description,
		color: theme.colors.searchBackground
	},
	optionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 50,
		paddingBottom: 90
	},
	endCallContainer: {
		alignItems: 'center'
	}
})

export default OnCallScreen