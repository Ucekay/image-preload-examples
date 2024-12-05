import { useHeaderHeight } from '@react-navigation/elements';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { FlatList, Image as RNImage, Text, View, StyleSheet } from 'react-native';

const _data = [
	{
		key: 'user1',
		userName: 'Tanaka Yuki',
		imageUrl: 'https://picsum.photos/400/400?random=1',
		avatarColor: '#FFB5B5',
	},
	{
		key: 'user2',
		userName: 'Suzuki Akiko',
		imageUrl: 'https://picsum.photos/400/300?random=2',
		avatarColor: '#B5D8FF',
	},
	{
		key: 'user3',
		userName: 'Sato Hiroshi',
		imageUrl: 'https://picsum.photos/600/400?random=3',
		avatarColor: '#FFE5B5',
	},
	{
		key: 'user4',
		userName: 'Yamamoto Mai',
		imageUrl: 'https://picsum.photos/480/270?random=4',
		avatarColor: '#B5FFB5',
	},
	{
		key: 'user5',
		userName: 'Watanabe Ken',
		imageUrl: 'https://picsum.photos/600/300?random=5',
		avatarColor: '#E5B5FF',
	},
	{
		key: 'user6',
		userName: 'Ito Yumi',
		imageUrl: 'https://picsum.photos/300/400?random=6',
		avatarColor: '#FFE5E5',
	},
	{
		key: 'user7',
		userName: 'Nakamura Ryo',
		imageUrl: 'https://picsum.photos/400/600?random=7',
		avatarColor: '#B5FFE5',
	},
	{
		key: 'user8',
		userName: 'Kobayashi Anna',
		imageUrl: 'https://picsum.photos/270/480?random=8',
		avatarColor: '#E5FFB5',
	},
	{
		key: 'user9',
		userName: 'Kato Takeshi',
		imageUrl: 'https://picsum.photos/500/500?random=9',
		avatarColor: '#FFB5E5',
	},
	{
		key: 'user10',
		userName: 'Yoshida Mika',
		imageUrl: 'https://picsum.photos/640/360?random=10',
		avatarColor: '#B5E5FF',
	},
	{
		key: 'user11',
		userName: 'Yamada Kenji',
		imageUrl: 'https://picsum.photos/800/400?random=11',
		avatarColor: '#E5FFE5',
	},
	{
		key: 'user12',
		userName: 'Sasaki Rin',
		imageUrl: 'https://picsum.photos/400/533?random=12',
		avatarColor: '#FFD6D6',
	},
	{
		key: 'user13',
		userName: 'Inoue Shota',
		imageUrl: 'https://picsum.photos/533/400?random=13',
		avatarColor: '#D6FFE5',
	},
	{
		key: 'user14',
		userName: 'Kimura Nana',
		imageUrl: 'https://picsum.photos/450/300?random=14',
		avatarColor: '#E5D6FF',
	},
	{
		key: 'user15',
		userName: 'Hayashi Taro',
		imageUrl: 'https://picsum.photos/300/450?random=15',
		avatarColor: '#FFE5D6',
	},
	{
		key: 'user16',
		userName: 'Saito Yuka',
		imageUrl: 'https://picsum.photos/600/600?random=16',
		avatarColor: '#D6E5FF',
	},
	{
		key: 'user17',
		userName: 'Shimizu Daiki',
		imageUrl: 'https://picsum.photos/720/405?random=17',
		avatarColor: '#FFD6E5',
	},
	{
		key: 'user18',
		userName: 'Yamaguchi Emi',
		imageUrl: 'https://picsum.photos/500/375?random=18',
		avatarColor: '#E5FFD6',
	},
	{
		key: 'user19',
		userName: 'Abe Kenta',
		imageUrl: 'https://picsum.photos/375/500?random=19',
		avatarColor: '#D6FFD6',
	},
	{
		key: 'user20',
		userName: 'Mori Sakura',
		imageUrl: 'https://picsum.photos/700/350?random=20',
		avatarColor: '#FFE5F2',
	},
	{
		key: 'user21',
		userName: 'Ikeda Jun',
		imageUrl: 'https://picsum.photos/450/450?random=21',
		avatarColor: '#E5F2FF',
	},
	{
		key: 'user22',
		userName: 'Hashimoto Ayumi',
		imageUrl: 'https://picsum.photos/600/338?random=22',
		avatarColor: '#F2FFE5',
	},
	{
		key: 'user23',
		userName: 'Aoki Kazuki',
		imageUrl: 'https://picsum.photos/400/266?random=23',
		avatarColor: '#F2E5FF',
	},
	{
		key: 'user24',
		userName: 'Ishikawa Saki',
		imageUrl: 'https://picsum.photos/266/400?random=24',
		avatarColor: '#FFE5CC',
	},
	{
		key: 'user25',
		userName: 'Fujita Riku',
		imageUrl: 'https://picsum.photos/533/300?random=25',
		avatarColor: '#CCE5FF',
	},
	{
		key: 'user26',
		userName: 'Ogawa Hina',
		imageUrl: 'https://picsum.photos/300/400?random=26',
		avatarColor: '#FFCCE5',
	},
	{
		key: 'user27',
		userName: 'Okada Sota',
		imageUrl: 'https://picsum.photos/400/300?random=27',
		avatarColor: '#E5FFCC',
	},
	{
		key: 'user28',
		userName: 'Matsumoto Aoi',
		imageUrl: 'https://picsum.photos/500/500?random=28',
		avatarColor: '#CCF2FF',
	},
	{
		key: 'user29',
		userName: 'Nakajima Yuto',
		imageUrl: 'https://picsum.photos/640/320?random=29',
		avatarColor: '#FFE5E0',
	},
	{
		key: 'user30',
		userName: 'Takeuchi Mio',
		imageUrl: 'https://picsum.photos/480/640?random=30',
		avatarColor: '#E0FFE5',
	},
];

interface UserItem {
	key: string;
	userName: string;
	imageUrl: string;
	avatarColor: string;
}

const Item = ({ item }: { item: UserItem }) => {
	const [size, setSize] = useState({ width: 0, height: 0 });
	useEffect(() => {
		const getImageSize = async () => {
			const { width, height } = await RNImage.getSize(item.imageUrl);
			setSize({ width, height });
		};
		getImageSize();
	}, [item.imageUrl]);
	if (size.width === 0 || size.height === 0) {
		return null;
	}
	const aspectRatio = size.width / size.height;
	return (
<View style={styles.itemContainer}>
			<View style={styles.side}>
				<View style={[styles.avatar, {backgroundColor: item.avatarColor}]} />
			</View>
			<View style={styles.contentsContainer}>
				<Text style={styles.user}>{item.userName}</Text>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: item.imageUrl }}
						style={[styles.image, { aspectRatio }]}
					/>
				</View>
			</View>
		</View>
	);
};

const RNExpoImageScreen = () => {
	const headerHeight = useHeaderHeight();
	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={{paddingTop: headerHeight}}
				data={_data}
				renderItem={({ item }) => <Item item={item} />}
				keyExtractor={(item) => item.key}
			/>
		</View>
	);
};

export default RNExpoImageScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		padding: 10,
	},
	itemContainer: {
		flexDirection: 'row',
		padding: 16,
		width: '100%',
		gap: 16,
	},
	side: {
		height: '100%',
	},
	avatar:{
		width: 40,
		height: 40,
		borderRadius: 28,
	},
	contentsContainer: {
		flex: 1,
		gap: 8,
	},
	user: {
		fontSize: 15,
	},
	imageContainer: {
		overflow: 'hidden',
		borderRadius: 12,
		borderCurve: 'continuous',
	},
	image:{
		width: '100%',
	},
});