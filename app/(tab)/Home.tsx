import { View, Text, ScrollView, Image, TouchableHighlight, ImageBackground } from 'react-native';
import React from 'react';
import { icons, image } from '@/utils/images';
import { router } from 'expo-router';
import Chart from '@/app/components/Chart';

const Home = () => {
  
  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex flex-row justify-between px-7 py-3 items-center  '>
        <Text className='text-xl font-medium' >Welcome🖐️ Nitin</Text>
        <TouchableHighlight className='h-12 w-12 p-1 bg-green-500 rounded-full justify-center items-center' onPress={() => router.replace("/(tab)/Profile")} >
          <View className='w-full h-full rounded-full bg-black '>
            <Image source={icons.profile} resizeMode='contain' className='h-10 w-10' />
          </View>
        </TouchableHighlight>
      </View>

      <View className='px-7 py-4 flex-1 '>
        <View>
          <Text className=' text-3xl font-medium '>Task Summery</Text>
        </View>
        <View className='w-full h-full py-10 ' >
          <View className=' flex flex-row justify-between items-center' >
            <ImageBackground source={image.all} className='h-40 w-[48%] rounded-lg p-3 overflow-hidden' resizeMode='cover'>
              <Text className='text-xl font-medium '>Total tasks </Text>
              <Text className='text-4xl font-medium  text-center pt-5'>10 </Text>
            </ImageBackground>
            <ImageBackground source={image.green} className='h-40 w-[48%] rounded-lg p-3 overflow-hidden' resizeMode='cover'>
              <Text className='text-xl font-medium text-white'>Completed Tasks</Text>
              <Text className='text-4xl font-medium text-white text-center pt-5'>10 </Text>
            </ImageBackground>
          </View>

          <View className=' flex flex-row justify-between items-center py-5' >
            <ImageBackground source={image.yellow} className='h-40 w-[48%] rounded-lg p-3 overflow-hidden' resizeMode='cover'>
              <Text className='text-xl font-medium text-white'>Pending Tasks</Text>
              <Text className='text-4xl font-medium text-white text-center pt-5'>10 </Text>
            </ImageBackground>
            <ImageBackground source={image.red} className='h-40 w-[48%] rounded-lg p-3 overflow-hidden' resizeMode='cover'>
              <Text className='text-xl font-medium text-white'>canceled Tasks</Text>
              <Text className='text-4xl font-medium text-white text-center pt-5'>10 </Text>
            </ImageBackground>
          </View>

          <Chart />
        </View>
      </View>

    </ScrollView>
  );
};

export default Home;