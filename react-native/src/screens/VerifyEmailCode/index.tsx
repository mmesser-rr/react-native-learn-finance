import { Auth } from 'aws-amplify';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import { useAppDispatch, useAppSelector } from "src/store";
import { addAthleteOnly, setVerifyingStatusThunk } from 'src/store/slices/onboarding.slice';
import { VerifyEmailProps } from 'src/types/routerTypes';
import styles from './styles';

type FormData = {
  code: string;
};

const VerifyEmailCode: React.FC<VerifyEmailProps> = ({
  route,
  navigation,
}: VerifyEmailProps) => {
  const dispatch = useAppDispatch();
  const { email, verifying } = useAppSelector(o => o.onboarding);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<FormData>({
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
  });
  const code = watch("code");

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(email);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  const onSubmit = async (data: FormData) => {
    try {
      const res = await Auth.confirmSignUp(email, code);
      console.log("🚀 ~ file: index.tsx:48 ~ onSubmit ~ res", res);
      dispatch(setVerifyingStatusThunk(true));
      dispatch(addAthleteOnly());
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  const swipeRight = () => {
    navigation.goBack()
  }

  return (
    <GestureRecognizer
      onSwipeRight={swipeRight}
      style={{ flex: 1 }}
    >
      <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
        <View>
          <View>
            <Text type="Headline/Medium" style={styles.head}>
              Enter your verification code
            </Text>
          </View>
          <View>
            <Text type="Body/Large" style={styles.caption}>
              Confirming your email address helps protect your personal info. We
              sent a verification code to {email}.
            </Text>
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: { value: true, message: 'Field is required' },
                minLength: { value: 6, message: 'The length should be 6' },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Enter 6-digit Code"
                  showErrorMessage
                  value={value}
                  errorMessage={errors?.code?.message}
                  maxLength={6}
                  autoFocus
                  isNumeric
                  keyboardType="number-pad"
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
              name="code"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.askAction} onPress={resendConfirmationCode}>
              <Text type="Body/Large" style={styles.askActionLabel}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <SubmitButton
            isValid={isValid && !verifying}
            actionLabel={verifying ? "Verifying..." : "Verify code"}
            style={styles.submit}
            onSubmit={handleSubmit(onSubmit)}
          />
        </View>
      </AppLayout>
    </GestureRecognizer>
  );
};

export default VerifyEmailCode;
