import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  Animated, TextInput as RNTextInput, TextInputProps as RNTextInputProps,
  TouchableOpacity, View
} from 'react-native';

import { Text } from '../Texts';
import Alert from '../Alert';
import EyeSlashIcon from 'src/assets/icons/eye-slash.svg';
import EyeIcon from 'src/assets/icons/eye.svg';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';
import styles from './styles';

type TextInputProps = RNTextInputProps & {
  label?: string;
  isNumeric?: boolean;
  errorMessage?: string;
  showErrorMessage?: boolean;
  left?: ReactNode;
  isSecure?: boolean;
  editable?: boolean;
  multiline?: boolean;
  makeFocus?: number;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
};

const TextInput: React.FC<TextInputProps> = ({
  value,
  showErrorMessage,
  errorMessage,
  isNumeric,
  label,
  onChangeText,
  onBlur,
  makeFocus,
  left,
  isSecure,
  editable = true,
  multiline = false,
  ...rest
}) => {
  const [text, setText] = React.useState('');
  const [focused, setFocused] = useState(false);
  const [possibleErrorMessage, setPossibleErrorMessage] = useState(false);
  const [securityState, setSecurityState] = useState(true);
  const [labelVisible, setLabelVisible] = useState(true);
  const translateYAnim = useRef(new Animated.Value(0)).current;

  const textRef = useRef<RNTextInput | null>(null);

  useEffect(() => {
    setText(value || '');
    if (value) {
      focusHandler();
    }
  }, [value]);

  useEffect(() => {
    if (makeFocus && makeFocus > 0) {
      textRef && textRef.current && textRef.current.focus()
    } else if (makeFocus === 0) {
      textRef && textRef.current && textRef.current.blur()
    }
  }, [makeFocus])

  useEffect(() => {
    const timeoutId = setTimeout(() => setPossibleErrorMessage(true), 1000);
    if (multiline && text && labelVisible) {
      setLabelVisible(false)
    } else if (!text) {
      setLabelVisible(true)
    }
    
    return () => clearTimeout(timeoutId);
  }, [text]);

  const textChangeHandler = (txt: string) => {
    const updated = isNumeric ? txt.replace(/[^0-9]/g, '') : txt;
    setText(updated);
    onChangeText(updated);
  };

  const blurHandler = () => {
    setFocused(false);

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
    setFocused(true);
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

  const isError = possibleErrorMessage && !!showErrorMessage && !!errorMessage;

  const labelStyle = {
    color: isError ? AppColors.accentRed100 : AppColors.coreBlack40,
    fontSize: focused || !!text ? scale(14) : scale(16),
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.inputContainer}>
        {labelVisible && <Animated.View style={[styles.animatedStyle, transformStyle]}>
          <Text type="Body/Medium" style={labelStyle}>
            {label}
          </Text>
        </Animated.View>}
        <View
          style={[
            styles.inputWrapper,
            {
              borderBottomColor: isError
                ? AppColors.accentRed100
                : AppColors.gray20,
            },
          ]}>
          {(!!text || focused) && !!left && <>{left}</>}
          <RNTextInput
            value={text}
            autoCapitalize="none"
            style={styles.input}
            selectionColor={AppColors.accentRed100}
            secureTextEntry={isSecure && securityState}
            onChangeText={text => textChangeHandler(text)}
            onFocus={() => focusHandler()}
            onBlur={() => blurHandler()}
            onSelectionChange={() => setPossibleErrorMessage(false)}
            editable={editable}
            ref={textRef}
            multiline={multiline}
            {...rest}
          />
          {isSecure && (
            <TouchableOpacity onPress={() => setSecurityState(!securityState)}>
              {securityState ? <EyeSlashIcon /> : <EyeIcon />}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {isError && (
        <Alert style={styles.error}>{errorMessage}</Alert>
      )}
    </View>
  );
};

export default TextInput;
