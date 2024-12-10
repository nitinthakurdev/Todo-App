import { IButtonProp } from '@/types/Types';
import React, { FC, ReactElement } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button: FC<IButtonProp> = ({
  style,
  textStyle,
  text,
  onPress,
}): ReactElement => {
  return (
    <TouchableOpacity className={`${style}`} onPress={onPress}>
      <Text className={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
