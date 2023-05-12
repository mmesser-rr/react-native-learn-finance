import React, { useRef, useState, useEffect } from 'react';
import { KeyboardType, View, Animated, TouchableOpacity } from 'react-native';
import RNTextInputMask from 'react-native-text-input-mask';

import AppColors from 'src/config/colors';
import EyeSlashIcon from 'src/assets/icons/eye-slash.svg';
import EyeIcon from 'src/assets/icons/eye.svg';
import ExclamationIcon from 'src/assets/icons/exclamation.svg';
import { scale } from 'src/config/dimentions';
import { Text } from '../Texts';

import styles from './styles';
import Alert from '../Alert';

interface TextInputMaskProps {
  label: string;
  mask: string;
  value?: string;
  error?: string;
  autoFocus?: boolean;
  isSecure?: boolean;
  keyboardType?: KeyboardType;
  changeValue: (text: string) => void;
  onBlur?: () => void;
}

const TextInputMask: React.FC<TextInputMaskProps> = ({
  label,
  mask,
  value,
  error,
  autoFocus,
  isSecure,
  keyboardType,
  changeValue,
  onBlur
}) => {
  const [text, setText] = useState('');
  const [securityState, setSecurityState] = useState(true);
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setText(value || '');
  }, [value]);

  const textChangeHandler = (txt: string | undefined) => {
    setText(txt || '');
    changeValue(txt || '');
  };

  const blurHandler = () => {
    if (!text) {
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    if (onBlur) {
      onBlur();
    }
  };

  const focusHandler = () => {
    Animated.timing(translateYAnim, {
      toValue: scale(-16),
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const transformStyle = {
    transform: [
      {
        translateY: translateYAnim,
      },
    ],
  };

  const labelStyle = !!error ? styles.errorLabel : styles.label;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Animated.View style={[styles.animatedStyle, transformStyle]}>
          <Text type="Body/Medium" style={labelStyle}>
            {label}
          </Text>
        </Animated.View>
        <View style={styles.inputWrapper}>
          <RNTextInputMask
            value={text}
            autoFocus={!!autoFocus}
            style={styles.input}
            keyboardType={keyboardType}
            selectionColor={AppColors.accentRed100}
            mask={mask}
            secureTextEntry={isSecure && securityState}
            onChangeText={(formatted, extracted) => {
              textChangeHandler(extracted);
            }}
            onFocus={() => focusHandler()}
            onBlur={() => blurHandler()}
          />
          {isSecure && (
            <TouchableOpacity onPress={() => setSecurityState(!securityState)}>
              {securityState ? <EyeSlashIcon /> : <EyeIcon />}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!!error && (
        <Alert style={styles.error}>{error}</Alert>
      )}
    </View>
  );
};

export default TextInputMask;
