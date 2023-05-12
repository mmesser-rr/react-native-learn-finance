import React from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import { useAppDispatch, useAppSelector } from "src/store";
import styles from './styles';

interface AppLayoutProps {
  children: React.ReactNode;
  containerStyle?: Object;
  viewStyle?: Object;
  scrollEnabled?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  containerStyle,
  viewStyle,
  scrollEnabled = true,
}) => {

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <KeyboardAvoidingView
        style={styles.avoidingViewContainer}
        contentContainerStyle={styles.avoidViewContent}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          {/* <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={scrollEnabled}
            bounces={false}
            alwaysBounceVertical={false}
          > */}
          <View style={styles.scrollViewContent}>
            <StatusBar barStyle = "light-content" />
            <View style={[styles.view, viewStyle]}>{children}</View>
          </View>
          {/* </ScrollView> */}
        {/* </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppLayout;
