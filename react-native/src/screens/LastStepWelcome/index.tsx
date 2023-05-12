import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import LogoIcon from 'src/assets/icons/logo/learn-logo.png';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import { useAppDispatch } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { loadEvents, loadEventStatuses } from "src/store/slices/opportunities/event.slice";
import { loadLearnItemIdsOrderedByUpdatedAt, loadLearnStatuses, loadLearnExerciseItems } from "src/store/slices/opportunities/learn.slice";
import { loadRewards, loadRewardStatuses } from "src/store/slices/opportunities/reward.slice";
import { BlackRedGradient } from 'src/utils/constants';
import styles from './styles';

const ProfileIntro: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('last step welcome did mount')

    dispatch(loadLearnItemIdsOrderedByUpdatedAt());
    dispatch(loadEvents());
    dispatch(loadRewards());
    dispatch(loadLearnStatuses());
    dispatch(loadEventStatuses());
    dispatch(loadRewardStatuses());
    dispatch(loadLearnExerciseItems());

    setTimeout(() => {
      // dispatch(updateHomeStep(PODsSteps[0]));
      // NavigationService.navigate('HomeStack');
      dispatch(updateActiveRouteName("OpportunitiesScreen"))
      NavigationService.navigate('OpportunitiesStack');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={BlackRedGradient} style={styles.container}>
        <View>
          <Image source={LogoIcon} resizeMode="contain" style={styles.logo} />
        </View>
        <View>
          <Text type="Headline/Large" style={styles.description}>"If knowledge is power learning is your superpower."</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProfileIntro;
