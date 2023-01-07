import {Feather} from "@expo/vector-icons";
import {Pressable, Text, TextInput, View} from "react-native";

const SearchInput = () => {
return	<View className="relative text-gray-600 focus-within:text-gray-400 bg-whiteBlue rounded-lg ">
      <Text className="absolute left-1 top-[30%] flex items-center pl-2">
	        <Feather name="search" className='items-center p-1 focus:outline-none items-center  focus:shadow-outline' size={18} color="#8C8C8C" />
      </Text>
		<TextInput className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
		       placeholder="SearchInput..."/>
	</View>
}

export default SearchInput