import {Entypo} from "@expo/vector-icons";
import {Image, Text, View} from "react-native";
const ProductItemV2 = () => {
	return <View className='shadow-2xl w-[300px] bg-[#fff] p-4 shadow-gray rounded-3xl'>
		<Image source={{uri:'https://beebom.com/wp-content/uploads/2019/06/macbook-pro-16-inch-featured.jpg?w=750&quality=75'}} className='h-[210px] w-full rounded-xl'  />
		<View className='flex-row justify-between w-full mt-4 items-center'>
		<Text className='font-bold text-blue text-2xl'>MackBook M1 </Text>
			<View className='bg-[#393939] p-1.5 rounded-full items-center justify-center  '>
			<Entypo  name="heart" className='items-center p-4 focus:outline-none items-center  focus:shadow-outline' size={18} color="white"  />
			</View>
		</View>
		<Text numberOfLines={2} className='text-gray leading-5 mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thdasdsade industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Text>
		
		<View className='flex-row justify-between w-full mt-5 items-center'>
			<Text className='font-bold text-black text-3xl'>$500</Text>
			<View className='bg-primary p-1.5 rounded-xl items-center justify-center  '>
				<Entypo  name="plus" className='items-center p-4 focus:outline-none items-center  focus:shadow-outline' size={18} color="white"  />
			</View>
		</View>
	</View>
}

export default ProductItemV2