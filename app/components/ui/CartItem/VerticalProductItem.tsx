import {AntDesign} from "@expo/vector-icons";
import {FC} from "react";
import {Image, Pressable, Text, View} from "react-native";
import {useTypedNavigation} from "../../../hook/useTypedNavigation";
import {Product} from "../../../types/products.types";
import {currencyFormat} from "../../../utils/CurrencyFormat";

const VerticalProductItem: FC<Product> = (props) => {
	const {navigate} = useTypedNavigation()
	return <Pressable onPress={() => navigate('Product', {id: props.id})}
	                  className=' items-center mb-4 p-2 flex-row w-full bg-[#fff] rounded-xl'>
		<Image
			source={{uri: props.CartImage}}
			className='h-[100px] w-[100px]  mr-5 rounded-xl'/>
		<View className='w-[220px] m-0 pr-4'>
			<Text className='font-bold text-blue text-2xl'>{props.name} </Text>
			<Text numberOfLines={2} className='text-gray w-full mt-1 leading-5'>{props.description}</Text>
			<View className='items-center flex-row justify-between pt-3 gap-3'>
				<Text className='font-bold  text-black text-2xl'>{currencyFormat(props.price)}</Text>
				
				<View className='flex-row items-center justify-between z-50'>
					<View className='bg-[#393939] p-1.5 rounded-xl items-center justify-center  '>
						<AntDesign name="minus" className='items-center p-4 focus:outline-none items-center  focus:shadow-outline'
						           size={18} color="white"/>
					</View>
					<Text className='mr-2 ml-2'>1</Text>
					<View className='bg-[#393939] p-1.5 rounded-xl items-center justify-center  '>
						<AntDesign name="plus" className='items-center p-4 focus:outline-none items-center  focus:shadow-outline'
						           size={18} color="white"/>
					</View>
				</View>
			</View>
		</View>
	
	</Pressable>
}

export default VerticalProductItem