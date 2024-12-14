import { View, BackHandler, ScrollView } from 'react-native';
import React, { FC, ReactElement, useEffect } from 'react';
import { router } from 'expo-router';
import StackHead from '@/app/components/StackHead';
import InputField from '@/app/components/Input';
import Button from '@/app/components/Button';

const newPassword: FC = (): ReactElement => {
  useEffect(() => {
    const backhandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        router.replace('/Profile');
        return true;
      },
    );
    return () => backhandler.remove();
  }, []);
  return (
    <ScrollView className="p-5 bg-white flex-1">
      <StackHead title="Change Password" />
      <View className="py-5">
        <InputField label={'Old Password'} value={''} />
        <InputField label={'New Password'} value={''} />
        <Button
          style={'bg-button py-4 rounded-xl mt-5'}
          textStyle={'text-center text-xl font-medium text-white '}
          text={'Change'}
        />
      </View>
    </ScrollView>
  );
};

export default newPassword;
