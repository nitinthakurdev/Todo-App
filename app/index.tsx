import React from 'react';
import { Redirect} from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useAuthContext } from '@/context';

const Welcome = () => {
  const { token, loading, } = useAuthContext()
  console.log(token)

  if (loading) {
    return <View className="flex-1 bg-white items-center justify-center">
      <ActivityIndicator size="large" />
    </View>
  }

 
  return token ? (
    <Redirect href={'/(stack)/(tab)/Home'} />
  ) : (
    <Redirect href={'/(auth)/welcome'} />
  );
};

export default Welcome;
