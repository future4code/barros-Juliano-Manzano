import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';

import { theme } from '../../theme';

const CustomCamera = () => {
	const [medias, setMedias] = useState([]);
	const [hasPermission, setHasPermission] = useState(false);

	useEffect(() => {
		(async () => {
			if (await requireCameraPermissions()) {
				setHasPermission(true);
			}
			if (await requireCameraRollPermissions()) {
				const files = await MediaLibrary.getAssetsAsync({
					first: 25,
					mediaType: ["photo", "video"],
					sortBy: ["creationTime"]
				})
				setMedias(files.assets);
			}
		})();
	}, []);

	const requireCameraRollPermissions = async () => {
		const { status } = await MediaLibrary.requestPermissionsAsync(false);
		return status === "granted";
	};

	const requireCameraPermissions = async () => {
		const { status } = await Camera.requestPermissionsAsync();
		return status === "granted";	
	}
	if (!hasPermission) {
		return <View style={{ 
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center' 
		}}>
			<Text style={{ color: '#fff' }}>No access to Camera</Text>
		</View>
	}

	return (
		<View style={styles.container}>
			<Camera style={styles.camera} />
			<View style={styles.footer}>
				<View style={styles.medias}>
					<FlatList
						data={medias}
						renderItem={({ item }) => <Image
							style={styles.media}
							source={{ uri: item.uri }}
							resizeMode="cover" 
						/>}
						keyExtractor={item => item.id}
						horizontal
					/>
				</View>
				<View style={styles.buttons}>
					<TouchableOpacity>
						<Icon name="flash" color={theme.colors.white} size={30} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon name="camera-iris" color={theme.colors.white} size={100} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon name="camera-party-mode" color={theme.colors.white} size={30} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	camera: {
		flex: 1
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		width: '100%'
	},
	medias: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 10
	},
	media: {
		width: 80,
		height: 80,
		marginHorizontal: 2
	},
	buttons: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 20
	}
})

export default CustomCamera