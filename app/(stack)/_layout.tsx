import React, { FC } from 'react';
import { Stack } from 'expo-router';

const StackLayout:FC = () => {
  return (
   <Stack>
    <Stack.Screen name='newPassword' />
   </Stack>
  );
};

export default StackLayout;