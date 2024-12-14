import { View, Text, BackHandler, Image, TouchableOpacity } from 'react-native';
import React, { FC, ReactElement, useEffect } from 'react';
import { router } from 'expo-router';
import { icons } from '@/utils/images';
import { SafeAreaView } from 'react-native-safe-area-context';

const profiledetail: FC = (): ReactElement => {

  useEffect(() => {
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => {
      router.replace("/Profile")
      return true
    })
    return () => backhandler.remove()
  }, []);
  return (
    <SafeAreaView className='p-5 flex-1 bg-white'>
      <View className='flex-row justify-between items-center' >
        <TouchableOpacity onPress={() => router.replace("/Profile")} >
          <Image source={icons.back} className='h-8 w-8' resizeMode='contain' />
        </TouchableOpacity>
        <Text className='text-2xl font-semibold' >Profile Details</Text>
        <Text>{" "}</Text>
      </View>
      <View className='py-10' >
        <View className='mt-5'>
          <Text className='text-lg font-medium '>Name</Text>
          <View className='my-2 p-4 bg-gray-100 rounded-lg' >
            <Text className='text-lg font-medium px-3' >Nitin</Text>
          </View>
        </View>
        <View className='mt-5'>
          <Text className='text-lg font-medium '>Username</Text>
          <View className='my-2 p-4 bg-gray-100 rounded-lg' >
            <Text className='text-lg font-medium px-3' >Nitin@1</Text>
          </View>
        </View>
        <View className='mt-5'>
          <Text className='text-lg font-medium '>Email</Text>
          <View className='my-2 p-4 bg-gray-100 rounded-lg' >
            <Text className='text-lg font-medium px-3' >nitin@gmail.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profiledetail;