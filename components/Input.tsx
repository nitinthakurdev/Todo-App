import { IInputProp } from '@/types/Types';
import React, { FC, ReactElement } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const InputField:FC<IInputProp> = ({labelstyle,label,inputStyle,secure = false,containerStyle}):ReactElement => {
  return (
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View className="my-2 w-full">
                <Text className={`text-lg font-semibold mb-3 ${labelstyle}`}>{label}</Text>
                
                <TextInput  placeholder={label}   className=" rounded-xl  p-4 font-semibold border-2  text-[15px] " secureTextEntry={secure} />
                
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;