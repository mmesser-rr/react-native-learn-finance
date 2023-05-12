import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import Alert from 'src/components/common/Alert';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import { SignUpProps } from 'src/types/routerTypes';
import { useAppDispatch } from 'src/store/index';
import CheckedIcon from 'src/assets/icons/checked.svg';
import UnCheckIcon from 'src/assets/icons/uncheck.svg';
import styles from './styles';
import { updateOnboardingStatus } from 'src/store/slices/onboarding.slice';

interface ISignUpForm {
  email: string;
  password: string;
}

const Verification: React.FC<SignUpProps> = ({
  route,
  navigation,
}: SignUpProps) => {
  const dispatch = useAppDispatch();
  const [isAccountExisted, setIsAccountExisted] = useState(false);
  const [isLimitExceeded, setIsLimitExceeded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [contains816C, setContains816C] = useState(false); // 8-16 characters
  const [containsUL, setContainsUL] = useState(false); // uppercase and lowercase letter
  const [containsN, setContainsN] = useState(false); // number
  const [containsSC, setContainsSC] = useState(false); // special character

  const rules = [
    ['8-16 characters', contains816C],
    ['Upper and lower cases', containsUL],
    ['Numbers', containsN],
    ['Special characters (! @ # $ % ^ & *)', containsSC],
  ];

  const validatePassword = (value: string) => {
    console.log('validate password')
    
    let valid = true;
    // check 8-16 characters
    if (value.length >= 8 && value.length <= 16) {
      setContains816C(true);
    } else {
      setContains816C(false);

      if (valid) {
        valid = false;
      }
    }

    // check uppercase and letter
    if (value.toLowerCase() !== value && value.toUpperCase() !== value) {
      setContainsUL(true);
    } else {
      setContainsUL(false);

      if (valid) {
        valid = false;
      }
    }

    // check number
    if (/\d/.test(value)) {
      setContainsN(true);
    } else {
      setContainsN(false);

      if (valid) {
        valid = false;
      }
    }

    // check special character
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(value)) {
      setContainsSC(true);
    } else {
      setContainsSC(false);

      if (valid) {
        valid = false;
      }
    }

    return valid;
  };

  const handleEmailChange = (value: string) => {
    const reg = /\S+@\S+\.\S+/;
    setIsEmailValid(!!value && reg.test(value));
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setIsPasswordValid(validatePassword(value));
    setPassword(value);
  };

  const handleSignUp = async () => {
    setIsAccountExisted(false);
    // setIsLimitExceeded(false);

    // try {
    //   Auth.confirmSignUp(email, "000000")
    //     .then(res => {
    //       console.log("🚀 ~ file: index.tsx:111 ~ handleSignUp ~ res", res);
    //     })
    //     .catch(async err => {
    //       console.log("🚀 ~ file: index.tsx:114 ~ handleSignUp ~ err.message", JSON.stringify(err));
    //       switch (err.name) {
    //         case "ExpiredCodeException": // user is existed/not signed up
              Auth.signUp({
                username: email,
                password,
              }).then(response => {
                dispatch(updateOnboardingStatus({ athleteId: response.userSub, email, password }));
                // Auth.resendSignUp(email);
                navigation.navigate("VerifyEmailCode");
              }).catch(e => {
                console.log('sign up exception = ', e)
                if (e.name === "UsernameExistsException") {
                  setIsAccountExisted(true);
                }
              });
    //           break;
    //         case "LimitExceededException": 
    //           setIsLimitExceeded(true);
    //           break;
    //       }
    //     });
    // } catch (error: any) {
    //   /*       if (error.message === "Invalid verification code provided, please try again.") { // registered user
    //           Auth.resendSignUp(email);
    //           navigation.navigate("VerifyEmailCode");
    //         }
    //         else if (error.message === "Invalid code provided, please request a code again.") { // unregistered user
              
    //         }
    //         console.log("🚀 ~ file: index.tsx:121 ~ handleSignUp ~ error.message", error.message);
    //         setError(error.message || 'Unknown Error'); */
    // }
  };

  const goToLogin = () => {
    navigation.navigate('UserLoginStack');
  }

  const swipeRight = () => {
    navigation.navigate('UserLoginStack');
  }

  return (
    <GestureRecognizer
      onSwipeRight={swipeRight}
      style={{ flex: 1 }}
    >
      <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
        <View>
          <Text type="Headline/Medium" style={styles.head}>
            Create your account
          </Text>
          <TextInput
            value={email}
            label="Email Address"
            placeholder="Email Address"
            showErrorMessage
            autoFocus
            onChangeText={handleEmailChange}
            allowFontScaling={false}
          />
          <TextInput
            value={password}
            isSecure
            label="Password"
            placeholder="Password"
            onChangeText={handlePasswordChange}
            allowFontScaling={false}
          />
          <View style={styles.rulesWrapper}>
            {rules.map((rule, index) => (
              <View key={`rule_${index}`} style={styles.rule}>
                {rule[1] ? <CheckedIcon /> : <UnCheckIcon />}
                <Text type="Body/Large" style={styles.ruleLable}>
                  {rule[0]}
                </Text>
              </View>
            ))}
          </View>
          {isAccountExisted && (
            <View>
              <Alert style={styles.error}>
                This email is already registered. Please {' '}
                <Text type="Body/Large" style={styles.loginInLabel} onPress={goToLogin}>log in</Text>
                {' '}instead.
              </Alert>
            </View>
          )}
          {isLimitExceeded && (
            <View>
              <Alert style={styles.error}>
                Sign up limit exceeded. Please try again later.
              </Alert>
            </View>
          )}
        </View>

        <View>
          <SubmitButton
            isValid={isEmailValid && isPasswordValid}
            actionLabel="Sign Up"
            onSubmit={handleSignUp}
          />
        </View>
      </AppLayout>
    </GestureRecognizer>
  );
};

export default Verification;
