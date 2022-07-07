import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FAIcon from "@expo/vector-icons/FontAwesome5";
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../../theme";

const CallItem = ({ username, picture, callStatus, time }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: picture }} />
			</View>
			<View style={styles.usernameAndCall}>
				<View style={styles.usernameAndStatus}>
					<Text style={styles.username}>{username}</Text>
					<View style={styles.callStatusContainer}>
						<FAIcon
							style={styles.iconStyles}
							name={
								callStatus === 0 || callStatus === 1
									? "arrow-right"
									: "arrow-left"
							}
							size={15}
							color={
								callStatus === 0 || callStatus === 2
									? theme.colors.danger
									: theme.colors.success
							}
						/>
						<Text style={styles.time}>{time}</Text>
					</View>
				</View>
				<View style={{ flexDirection: "row" }}>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("MessagesScreen", {
								username: username,
								picture: picture,
							})
						}
						style={{ padding: 10 }}
					>
						<MCIcon
							name="chat"
							size={25}
							color={theme.colors.primary}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("OnCallScreen", {
								username: username,
								picture: picture,
							})
						}
						style={{ padding: 10 }}
					>
						<FAIcon
							name="phone"
							size={25}
							color={theme.colors.primary}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 25,
		paddingRight: 20,
		paddingLeft: 10,
		flexDirection: "row",
	},
	imageContainer: {
		borderRadius: 25,
		height: 50,
		width: 50,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 25,
	},
	usernameAndCall: {
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		alignItems: "center",
	},
	usernameAndStatus: {
		paddingHorizontal: 10,
	},
	username: {
		color: theme.colors.title,
		fontSize: 18,
	},
	callStatusContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconStyle: {
		alignSelf: 'center'
	},
	time: {
		color: theme.colors.description,
		paddingHorizontal: 5
	}
});

export default CallItem;
