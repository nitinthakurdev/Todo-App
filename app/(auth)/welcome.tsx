import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { FC, ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/app/components/Button';
import { router } from "expo-router"
import { image } from '@/utils/images';

const welcome:FC = ():ReactElement => {
  return (
    <SafeAreaView className='flex h-full items-center justify-between bg-white '>

      <View className='flex-1 items-center justify-center px-2 w-full  ' >
        <Image source={image.wel} className=' w-full h-[300px]' resizeMode='contain' />
        <Text className='text-3xl text-black font-bold mx-10 text-center ' >The Perfect Todo App is just a tap Away</Text>
      <Text className='text-md text-center text-[#858585] mx-10 mt-5' >
      A To-Do App helps users manage tasks effectively by allowing them to create, update, delete, and organize their tasks
      </Text>
      </View>
      <View className='w-full  items-end justify-end pb-10 px-5'>
        <Button style=' px-5 py-2 bg-button rounded-lg ' textStyle='text-black text-lg font-semibold text-white ' text='Next' onPress={() => router.replace("/(auth)/signin")} />
      </View>
    </SafeAreaView>
  );
};

export default welcome;