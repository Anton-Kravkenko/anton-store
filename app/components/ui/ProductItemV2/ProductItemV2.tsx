import {Image, Text, View} from "react-native";
const ProductItem = () => {
	return <View className='w-[250px]'>
		<Image source={{uri:'https://ilounge.ua/files/blog/MacBook-Air-M2-Chip-Purple-Feature.jpeg'}} className='h-[220px] w-full rounded-3xl'  />
		<View className='flex-row justify-between w-full mt-2'>
		<Text className='text-xl font-bold'>Apple M1 </Text>
			<Text className='text-xl font-bold'>$ 1000 </Text>
		</View>
		<Text numberOfLines={2} className='text-gray mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thdasdsade industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Text>
	</View>
}

export default ProductItem