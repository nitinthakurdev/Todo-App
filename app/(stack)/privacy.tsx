import { View, Text, BackHandler, ScrollView } from 'react-native';
import React, { FC, ReactElement, useEffect } from 'react';
import { router } from 'expo-router';
import StackHead from '../components/StackHead';

const privacy: FC = (): ReactElement => {
  
  const policySections = [
    {
      title: 'Introduction',
      content: 'We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our application.',
    },
    {
      title: 'Information We Collect',
      content: 'We may collect information such as your name, email address, phone number, and usage data to provide and improve our services.',
    },
    {
      title: 'How We Use Your Information',
      content: 'Your information is used to enhance your experience, improve our services, and communicate with you. We do not sell or share your data with third parties without your consent.',
    },
    {
      title: 'Data Security',
      content: 'We implement industry-standard security measures to protect your information. However, no system is completely secure, and we cannot guarantee absolute security.',
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions or concerns about this Privacy Policy, please contact us at privacy@example.com.',
    },
  ];

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
    <ScrollView className="flex-1 p-5 bg-white">
      <StackHead title='Privacy Policy' />

      <View className="mt-10 mb-8">
        {policySections.map((section, index) => (
          <View key={index} className="mb-5">
            <Text className="text-xl font-semibold text-gray-700">{section.title}</Text>
            <Text className="text-base text-gray-600 mt-2">{section.content}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default privacy;
