import React from 'react';
import { TextStyle, TouchableOpacity, View, Text } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics } from 'src/config/dimentions';

import { generateTextStyle } from 'src/utils/functions';

import styles from './styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'black' | 'red' | 'outred' | 'transparent' | 'darkgray' | 'alltransparent' | 'white',
  actionStyle?: TextStyle | TextStyle[];
  labelStyle?: TextStyle | TextStyle[];
  disabled?: boolean;
  noRadius?: boolean;
  align?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  actionStyle: propsActionStyle,
  labelStyle: propsLabelStyle,
  disabled,
  noRadius = false,
  align = 'center',
  onPress,
}) => {
  const backgroundColor =
    variant === 'red' ? AppColors.accentRed100
      : variant === 'transparent' || variant === 'outred' ? AppColors.transparent
        : variant === 'darkgray' ? AppColors.coreBlack80
        : variant === 'white' ? AppColors.coreWhite100
          : AppColors.coreBlack100;
          
  const borderColor =
     variant === 'outred' ? AppColors.accentRed100 
      : variant === 'alltransparent' ? AppColors.transparent
        : AppColors.coreWhite100;

  const borderWidth = variant === 'transparent' || variant === 'outred' ? Metrics.pixels.size1 : 0;

  const actionStyle = generateTextStyle(
    noRadius ? {
      ...styles.noRadiusAction,
      backgroundColor,
      borderColor,
      borderWidth
    } : {
      ...styles.action,
      backgroundColor,
      borderColor,
      borderWidth
    },
    propsActionStyle
  );
  const labelStyle = generateTextStyle(align === 'left' ? styles.leftLabel : styles.label, 
    propsLabelStyle);

  return (
    <TouchableOpacity onPress={onPress} style={actionStyle} disabled={disabled}>
      <View style={labelStyle}>{children}</View>
    </TouchableOpacity>
  );
};

export default Button;
