import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {PrivacyProps} from 'src/types/routerTypes';
import CloseIcon from 'src/assets/icons/close.svg';
import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import {SignUpSteps} from 'src/utils/constants';

import styles from './styles';

const Privacy: React.FC<PrivacyProps> = ({navigation, route}: PrivacyProps) => {
  const onClose = () => {
    if (route.params && route.params.fromScreen === 'AccountCreateSuccess') {
      navigation.goBack();
    } else {
      navigation.navigate('SignUp', {step: SignUpSteps[5]});
    }
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewStyle}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <CloseIcon />
        </TouchableOpacity>
        <Text type="Title/Large">Terms & Privacy</Text>
      </View>
      <View>
        <View>
          <Text type="Body/Large" style={styles.text}>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </Text>
        </View>

        <View>
          <Text type="Body/Large" style={styles.text}>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </Text>
        </View>

        <View>
          <Text type="Title/Medium" style={styles.text}>
            Interpretation and Definitions.
          </Text>
        </View>

        <View>
          <Text type="Body/Large" style={styles.text}>
            Interpretation The words of which the initial letter is capitalized
            have meanings defined under the following conditions. The following
            definitions shall have the same meaning regardless of whether they
            appear in singular or in plural.
          </Text>
        </View>

        <View>
          <Text type="Body/Large">
            Definitions
          </Text>
        </View>

        <View>
          <Text type="Body/Large" style={styles.text}>
            For the purposes of this Privacy Policy: Account means a
            unique account created for You to access our Service or parts of our
            Service. AF(iliate means an entity that controls, is controlled by
            or is under common control with a party, where "control" means
            ownership of 50% or more of the shares, equity interest or other
            securities entitled to vote for election of directors or other
            managing authority.
          </Text>
        </View>

        <View>
          <Text type="Body/Large" style={styles.text}>
            Application means the software program provided.
          </Text>
        </View>
      </View>
    </AppLayout>
  );
};

export default Privacy;
