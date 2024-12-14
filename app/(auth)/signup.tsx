import { View, Text, ScrollView, Image } from 'react-native';
import React, { FC, ReactElement } from 'react';
import { image } from '@/utils/images';
import InputField from '@/app/components/Input';
import Button from '@/app/components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { router } from 'expo-router';

const signup: FC = (): ReactElement => {
  const validationSchema = Yup.object({
    name: Yup.string().min(2).max(32).required('Full Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('invalid Email').required('Email is required'),
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
            Create Your Account
          </Text>
          <Formik
            initialValues={{ name: '', username: '', email: '', password: '' }}
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
                  label="Full Name "
                  value={values.username}
                  onChange={handleChange('name')}
                  onblur={handleBlur('name')}
                  error={touched.name && errors.name ? errors.name : ''}
                />
                <InputField
                  label="Username "
                  value={values.username}
                  onChange={handleChange('username')}
                  onblur={handleBlur('username')}
                  error={
                    touched.username && errors.username ? errors.username : ''
                  }
                />
                <InputField
                  label="Email "
                  value={values.email}
                  onChange={handleChange('email')}
                  onblur={handleBlur('email')}
                  error={touched.email && errors.email ? errors.email : ''}
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
                <Button
                  style="bg-button flex items-center justify-center py-4 mt-3 rounded-xl"
                  text="Sign Up"
                  textStyle="text-white text-center font-medium text-xl"
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>

        <Text className="text-center">Already have an account</Text>
        <Text
          className="text-center text-lg text-button font-medium "
          onPress={() => router.replace('/(auth)/signin')}
        >
          Sign in
        </Text>
      </View>
    </ScrollView>
  );
};

export default signup;
