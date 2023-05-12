import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Alert from 'src/components/common/Alert';
import Loading from 'src/components/common/Loading';
import SubmitButton from 'src/components/common/SubmitButton';
import Switch from "src/components/common/Switch";
import TextInput from 'src/components/common/TextInput';
import TextInputMask from 'src/components/common/TextInputMask';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import AppColors from "src/config/colors";
import { ILoginRequest } from "src/models/actions/user";
import NavigationService from 'src/navigation/NavigationService';
import { useAppDispatch, useAppSelector } from "src/store";
import { loginRequest } from "src/store/slices/user.slice";
import styles from './styles';
import { STORAGE_PASSWORD_KEY, STORAGE_EMAIL_KEY, STORAGE_REMEMBER_ME_KEY } from "src/config/data";

const UserLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(o => o.loading);
  const { loginError, userNotFound } = useAppSelector(o => o.user);

  const {
    control,
    handleSubmit,
    formState: { errors },
    formState: { isValid },
    reset,
  } = useForm<ILoginRequest>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    mode: 'onChange',
  });

  useFocusEffect(
    React.useCallback(() => {
      const resetFormData = async () => {
        const storageRememberMe = await AsyncStorage.getItem(STORAGE_REMEMBER_ME_KEY) as string;

        if (storageRememberMe === '0') {
          reset({
            email: '',
            password: '',
            rememberMe: false
          });
        }
        else {
          const storageEmail = await AsyncStorage.getItem(STORAGE_EMAIL_KEY) as string;
          const storagePassword = await AsyncStorage.getItem(STORAGE_PASSWORD_KEY) as string;

          reset({
            email: storageEmail || '',
            password: storagePassword || '',
            rememberMe: true
          });
        }
      };

      resetFormData();
    }, []),
  );

  const onSubmit = (data: ILoginRequest) => {
    dispatch(loginRequest({ email: data.email, password: data.password, rememberMe: data.rememberMe }));
  };

  const goToForgotPassword = () => {
    NavigationService.navigate('UserLoginStack', { screen: 'ForgotPassword' });
  };

  const goToSignUp = () => {
    NavigationService.navigate('SignUp');
  };

  const swipeRight = () => {
    NavigationService.navigate('Welcome');
  }

  return (
    <GestureRecognizer
      onSwipeRight={swipeRight}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        contentContainerStyle={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.viewWrapper}>
          <View>
            <View style={styles.signUp}>
              <TouchableOpacity onPress={goToSignUp}>
                <Text type="Body/Large" style={styles.signUpLabel}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text type="Headline/Small" style={styles.head}>
                Welcome back
              </Text>
            </View>
            {!!loginError && (
              <View style={styles.misMatchAlert}>
                <Alert>{loginError}</Alert>
              </View>
            )}
            <View style={styles.email}>
              <Controller
                control={control}
                rules={{
                  required: { value: true, message: 'Please fill out this field.' },
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Please input valid email string.' }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Email"
                    autoFocus
                    showErrorMessage
                    errorMessage={errors?.email?.message}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    allowFontScaling={false}
                  />
                )}
                name="email"
              />
              {userNotFound && (
                <View>
                  <Alert style={styles.emailAlert}>
                    This email hasn't been registered. Please{' '}
                    <Text
                      type="Body/Large"
                      style={styles.signUpLabel}
                      onPress={goToSignUp}>
                      sign up
                    </Text>{' '}
                    first.
                  </Alert>
                </View>
              )}
            </View>
            <View>
              <Controller
                control={control}
                rules={{
                  required: { value: true, message: 'Please fill out this field.' },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Password"
                    showErrorMessage
                    isSecure
                    value={value}
                    errorMessage={errors?.password?.message}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    allowFontScaling={false}
                  />
                )}
                name="password"
              />
            </View>
            <View style={styles.switchContainer}>
              <Controller
                control={control}
                name="rememberMe"
                render={({ field: { onChange, value } }) => (
                  <Switch
                    onValueChange={onChange}
                    backgroundInactive={AppColors.coreBlack90}
                    circleActiveColor={AppColors.coreBlue75}
                    circleInActiveColor={AppColors.gray120}
                    circleSize={28}
                    value={value}
                    width={56}
                  />
                )}
              />
              <Text variant="white" type="Body/Large" style={styles.rememberMeSwitch}>Remember</Text>
            </View>
            {/* <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={goToForgotPassword}>
            <Text type="Body/Large" style={styles.forgotPasswordLabel}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View> */}
          </View>

          <View>
            <SubmitButton
              isValid={isValid}
              actionLabel="Continue"
              onSubmit={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      {isLoading && <Loading />}
    </GestureRecognizer>
  );
};

export default UserLogin;
