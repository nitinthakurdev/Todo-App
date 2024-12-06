import { View, Text, ScrollView, Image } from 'react-native';
import React, { FC, ReactElement } from 'react';
import { image } from '@/utils/images';
import InputField from '@/components/Input';

const signin:FC = ():ReactElement => {
  return (
    <ScrollView className='flex-1 bg-white '>
      <View className='flex-1 bg-white py-[50%] ' >
        <View className='w-full '>
          <Image source={image.logo} className='h-[250px] w-full ' resizeMode="contain" />
        </View>
        <View>
          <Text className='text-2xl text-black font-semibold text-center'>Login Your Account</Text>
          <View className='px-5'>
            <InputField label='username or email'   />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default signin;