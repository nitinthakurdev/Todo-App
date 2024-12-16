import { View, Text, BackHandler, Alert, ScrollView, TouchableOpacity } from 'react-native';
import React, { FC, ReactElement, useEffect } from 'react';
import { router } from 'expo-router';
import StackHead from '@/app/components/StackHead';

const help: FC = (): ReactElement => {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login screen, tap on "Forgot Password," and follow the instructions.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact customer support through the "Contact Us" button below or email us at support@example.com.',
    },
    {
      question: 'How do I update my profile information?',
      answer: 'Navigate to the "Profile" section in the app, and tap on "Edit Profile" to update your information.',
    },
  ];

  const handleContactUs = () => {
    Alert.alert('Contact Us', 'You can reach us at support@example.com or call us at +1-234-567-890.');
  };

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
      <StackHead title='Help & Support'/>

    <View className=" mt-10 mb-8">
      {faqs.map((faq, index) => (
        <View key={index} className="mb-5">
          <Text className="text-lg font-semibold text-gray-700">{faq.question}</Text>
          <Text className="text-base text-gray-600 mt-1">{faq.answer}</Text>
        </View>
      ))}
    </View>

    <TouchableOpacity className="bg-blue-500 p-4 rounded-md items-center" onPress={handleContactUs}>
      <Text className="text-white text-lg font-bold">Contact Us</Text>
    </TouchableOpacity>
  </ScrollView>
  );
};

export default help;
