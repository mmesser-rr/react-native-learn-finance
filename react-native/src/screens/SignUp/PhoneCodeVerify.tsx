import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Text } from 'src/components/common/Texts';
import { increaseAthletesCount as INCREASE_ATHLETES_COUNT_MUTATION } from 'src/graphql/mutations';
import { useAppDispatch, useAppSelector } from "src/store";
import { addAthleteOnly, updateOnboardingStatus } from "src/store/slices/onboarding.slice";
import { loginRequest } from "src/store/slices/user.slice";
import { graphqlApi } from 'src/utils/functions';
import styles from './styles';

interface PhoneCodeVerifyProps {
  updateLoading: (status: boolean) => void;
}

const PhoneCodeVerify: React.FC<PhoneCodeVerifyProps> = ({
  updateLoading,
}) => {
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const { email, password } = useAppSelector(o => o.onboarding);

  useEffect(() => {
    dispatch(updateOnboardingStatus({ isSignInLink: true, step: 7 }));
  }, []);

  const changeValue = (value: string) => {
    setIsValid(value.length === 6);
    setCode(value);
  };

  const onboardingSilentSignIn = async () => {
    try {
      if (!email || !password) {
        throw new Error('email and password are required');
      }
      dispatch(addAthleteOnly());
      dispatch(loginRequest({ phone: "", password, rememberMe: false }));
    } catch (error) {
      console.log('Login attempt failed:', error);
    }
  };

  const handleSubmit = async () => {
    /* updateLoading(true);
    try {
      const response = await Auth.confirmSignUp(`+1${mobilePhone}`, code);
      console.log('confirmSignUp response:', response);

      // appUsageLog
      const athletesCount = await graphqlApi(INCREASE_ATHLETES_COUNT_MUTATION);
      console.log("🚀 ~ file: PhoneCodeVerify.tsx ~ line 66 ~ handleSubmit ~ athletesCount", athletesCount);
      
      await onboardingSilentSignIn();
    } catch (error: any) {
      console.log(error);
      setError(error.message || 'Unknown error');
    }
    updateLoading(false); */
  };

  return (
    <View style={styles.contentWrapper}>
      <View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            To continue, verify your phone number
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.description}>
            We sent a verification code to {email}
          </Text>
        </View>
        <View>
          <TextInput
            label="Enter 6-digit Code"
            maxLength={6}
            autoFocus
            showErrorMessage={true}
            errorMessage={error}
            onChangeText={changeValue}
            keyboardType="number-pad"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => { }}>
            <Text type="Body/Large" style={styles.askActionLabel}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Verify Code"
          onSubmit={handleSubmit}
        />
      </View>
    </View>
  );
};

export default PhoneCodeVerify;
