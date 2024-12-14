import { View, Text, ScrollView, Image } from 'react-native';
import React, { FC, ReactElement } from 'react';
import { image } from '@/utils/images';
import InputField from '@/app/components/Input';
import Button from '@/app/components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { router } from 'expo-router';

const signin: FC = (): ReactElement => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username or email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="flex-1 bg-white py-20 ">
        <View className="w-full ">
          <Image
            source={image.logo}
            className="h-[200px] w-full "
            resizeMode="contain"
          />
        </View>
        <View>
          <Text className="text-2xl text-black font-semibold text-center">
            Login Your Account
          </Text>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(value) => {
              console.log(value);
            }}
          >
            {({
              values,
              handleBlur,
              handleSubmit,
              handleChange,
              errors,
              touched,
            }) => (
              <View className="px-5 py-3">
                <InputField
                  label="username or email"
                  value={values.username}
                  onChange={handleChange('username')}
                  onblur={handleBlur('username')}
                  error={
                    touched.username && errors.username ? errors.username : ''
                  }
                />
                <InputField
                  label="Password"
                  secure={true}
                  value={values.password}
                  onChange={handleChange('password')}
                  onblur={handleBlur('password')}
                  error={
                    touched.password && errors.password ? errors.password : ''
                  }
                />
                <View className="justify-end items-end pb-3">
                  <Text
                    className="text-lg text-button "
                    onPress={() => router.replace('/(auth)/forget')}
                  >
                    Forgot password
                  </Text>
                </View>
                <Button
                  style="bg-button flex items-center justify-center py-4 mt-3 rounded-xl"
                  text="Sign In"
                  textStyle="text-white text-center font-medium text-xl"
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>

        <Text className="text-center">Don't have an account</Text>
        <Text
          className="text-center text-lg text-button font-medium "
          onPress={() => router.replace('/(auth)/signup')}
        >
          Sign Up
        </Text>
      </View>
    </ScrollView>
  );
};

export default signin;
