import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import OnboardingSteps from 'src/components/common/OnboardingSteps';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInputMask from 'src/components/common/TextInputMask';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import { useAppDispatch } from "src/store";
import { updateOnboardingStatus } from "src/store/slices/onboarding.slice";
import { validateDOB } from 'src/utils/validation';
import styles from './styles';

const CaptureDOB: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = useState(false);
  const [dateOfBirthString, setDateOfBirthString] = useState('');
  const [isError, setError] = useState(false);

  useEffect(() => {
    dispatch(updateOnboardingStatus({ isSignInLink: false, step: 7 }));
  }, []);

  const changeValue = (value: string) => {
    let valid = validateDOB(value);

    if (value.length === 8) {
      const date = `${value.substring(0, 2)}/${value.substring(
        2,
        4,
      )}/${value.substring(4, 8)}`;
      valid = dayjs(date).isBefore(dayjs().subtract(18, 'year'));
      setError(!valid);
    }

    setIsValid(valid);
    if (valid) {
      setDateOfBirthString(value);
    }
  };

  const goToNextStep = () => {
    const year = dateOfBirthString.slice(-4);
    const month = dateOfBirthString.slice(0, 2);
    const day = dateOfBirthString.slice(2, 4);
    const dateOfBirth = year + '-' + month + '-' + day;
    dispatch(updateOnboardingStatus({ dateOfBirth }));
    NavigationService.navigate('CaptureAddress');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewStyle}>
      <View>
        <View>
          <OnboardingSteps />
        </View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            What's your date of birth?
          </Text>
        </View>
        <View>
          <TextInputMask
            label="Date of Birth (mm/dd/yyyy)"
            mask="[00]/[00]/[0000]"
            autoFocus
            keyboardType="number-pad"
            error={
              isError
                ? 'You must be 18 years or older to open a checking account in your name only. Please come back later.'
                : ''
            }
            changeValue={changeValue}
          />
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={goToNextStep}
        />
      </View>
    </AppLayout>
  );
};

export default CaptureDOB;
