import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { FC, ReactElement } from 'react';
import { icons } from '@/utils/images';
import { router } from 'expo-router';

interface IHead {
  title: string;
}

const StackHead: FC<IHead> = ({ title }): ReactElement => {
  return (
    <View className="flex-row justify-between items-center">
      <TouchableOpacity onPress={() => router.replace('/Profile')}>
        <Image source={icons.back} className="h-8 w-8" resizeMode="contain" />
      </TouchableOpacity>
      <Text className="text-2xl font-semibold">{title}</Text>
      <Text> </Text>
    </View>
  );
};

export default StackHead;
