import React from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { BlackRedGradient } from 'src/utils/constants';
import AppLayout from 'src/components/layout/AppLayout';
import LogoIcon from 'src/assets/icons/logo/learn-logo.png';

import styles from './styles';

interface OnBoardingStartLayoutProps {
  content: React.ReactNode;
  action: React.ReactNode;
}

const OnBoardingStartLayout: React.FC<OnBoardingStartLayoutProps> = ({ content, action }) => {
  return (
    <View style={styles.welcomeContainer}>
      <LinearGradient colors={BlackRedGradient} style={styles.container}>
        <View style={styles.contentWrapper}>
          <View>
            <Image source={LogoIcon} resizeMode={'contain'} />
          </View>
          <View style={styles.content}>
            {content}
          </View>
        </View>
        
        <View style={styles.actionWrapper}>
          {action}
        </View>
      </LinearGradient>
    </View>
  );
};

export default OnBoardingStartLayout;
