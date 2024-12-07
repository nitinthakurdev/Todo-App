import { IInputProp } from '@/types/Types';
import React, { FC, ReactElement } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const InputField:FC<IInputProp> = ({labelstyle,label,inputStyle,secure = false,value,onChange,onblur,error,numberOfLines}):ReactElement => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="my-2 w-full">
                <Text className={`text-lg font-semibold mb-3 ${labelstyle}`}>{label}</Text>
                
                <TextInput  placeholder={label}    className={` rounded-xl  p-4 font-semibold border-2  text-[15px] ${inputStyle} `} secureTextEntry={secure} value={value} onChangeText={onChange} onBlur={onblur} numberOfLines={10} />
                {error && <Text className='text-red-500 px-3 pt-1 text-lg font-medium' >{error}</Text>}
                
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;