import { View, Text, ScrollView } from 'react-native';
import React, { FC, ReactElement } from 'react';
import InputField from '@/app/components/Input';
import { Formik } from 'formik';
import Button from '@/app/components/Button';
import * as yup from 'yup';

const AddTask: FC = (): ReactElement => {
  const validation = yup.object({
    title: yup.string().required('Title is required'),
    description: yup
      .string()
      .min(10, 'Message must be minimum 10 characters')
      .max(500, 'Message must be at least 500 Characters')
      .required('Message is required'),
  });
  return (
    <ScrollView className="flex-1 bg-white ">
      <Text className="text-3xl text-center py-10 font-bold ">
        Add New Task
      </Text>
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={validation}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <View className="px-7 mb-10">
            <InputField
              label="Title"
              value={values.title}
              onChange={handleChange('title')}
              onblur={handleBlur('title')}
              error={touched.title && errors.title ? errors.title : ''}
            />
            <InputField
              label="Message"
              value={values.description}
              onChange={handleChange('description')}
              onblur={handleBlur('description')}
              error={
                touched.description && errors.description
                  ? errors.description
                  : ''
              }
              multiline={true}
              inputStyle="h-52"
            />
            <Button
              text="Add Task"
              style="bg-button my-4 rounded-lg  "
              textStyle=" text-center text-xl text-white font-medium py-2 "
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddTask;
