import React, { FC } from 'react';
import { Stack } from 'expo-router';

const StackLayout: FC = () => {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="newPassword" options={{ headerShown: false }} />
      <Stack.Screen name="profiledetail" options={{ headerShown: false }} />
      <Stack.Screen name="help" options={{ headerShown: false }} />
      <Stack.Screen name="privacy" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
