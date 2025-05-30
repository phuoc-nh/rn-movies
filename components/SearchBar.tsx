import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

type Props = {
	onPress?: () => void
	value?: string
	placeholder: string
	onChangeText?: (text: string) => void
}

export default function SearchBar({ onPress, placeholder, value, onChangeText }: Props) {


	return (
		<View className='flex-row items-center bg-dark-200 rounded-full px-4 py-2'>
			<Image
				source={icons.search}
				className='w-5 h-5 mr-2'
				resizeMode='contain'
				tintColor={"aba8ff"}
			/>
			<TextInput
				onPress={onPress}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				placeholderTextColor={'#a8b5db'}
				className='flex-1 text-white ml-2'
			></TextInput>
		</View>
	)
}