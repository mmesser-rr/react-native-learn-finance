import React, { useState } from 'react';
import { View } from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInputMask from 'src/components/common/TextInputMask';
import { Text } from 'src/components/common/Texts';
import styles from './styles';

const label = 'SSN (xxx-xx-xxxx)';

interface CaptureSSNProps {
  goToNextStep: () => void;
  updateLoading: (status: boolean) => void;
  updateSSN: (code: string) => void;
}

const CaptureSSN: React.FC<CaptureSSNProps> = ({ goToNextStep, updateLoading, updateSSN }) => {
  const [ssn, setSsn] = useState('');
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setIsValid(value.length === 9);
    setSsn(value);
    updateSSN(value);
  };

  const handleContinue = () => {
    goToNextStep();
  };

  return (
    <View style={styles.contentContainer}>
      <View>
        <View>
          <Text type="Body/Large" style={styles.head}>
            What's the last four digits of your Social Security Number?
          </Text>
        </View>
        <View style={styles.phoneNumber}>
          <TextInputMask
            label={label}
            mask="[000]-[00]-[0000]"
            autoFocus
            isSecure
            keyboardType="number-pad"
            changeValue={changeValue}
          />
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={handleContinue}
        />
      </View>
    </View>
  );
};

export default CaptureSSN;
