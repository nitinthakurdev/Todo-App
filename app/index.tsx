import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

const Welcome = () => {
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }, []);

  return loader ? (
    <Redirect href={'/(stack)/(tab)/Home'} />
  ) : (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Welcome;
