import { View, Text, BackHandler } from 'react-native';
import React, { FC, ReactElement, useEffect } from 'react';
import { router } from 'expo-router';

const help:FC = ():ReactElement => {
   useEffect(() => {
      const backhandler = BackHandler.addEventListener('hardwareBackPress', () => {
        router.replace("/Profile")
        return true
      })
      return ()=>backhandler.remove()
    }, []);
  return (
    <View>
      <Text>help</Text>
    </View>
  );
};

export default help;