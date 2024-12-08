import { View, Text, ScrollView, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { icons } from '@/utils/images'
import { router } from 'expo-router'

const Home = () => {
  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex flex-row justify-between px-7 py-3 items-center  '>
        <Text className='text-xl font-medium' >Welcome🖐️ Name</Text>
        <TouchableHighlight className='h-12 w-12 bg-green-500 rounded-full justify-center items-center' onPress={()=>router.replace("/(tab)/Profile")} >
          <Image source={icons.profile} resizeMode='contain' className='h-10 w-10' />
        </TouchableHighlight>
      </View>
    </ScrollView>
  )
}

export default Home