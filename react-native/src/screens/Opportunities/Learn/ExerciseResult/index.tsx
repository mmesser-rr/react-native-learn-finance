import React, { useEffect, useState } from 'react';
import { View, Alert, Modal, Image } from 'react-native';

import Button from 'src/components/common/Button';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import AppStyles from 'src/config/styles';
import { useAppDispatch, useAppSelector } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { setActiveDepositIndex, updateShowCongratulationsMessage, updateWagerInLearnStatusById } from "src/store/slices/opportunities/learn.slice";
import { updateWealthBalance, updateAllWagered } from "src/store/slices/user.slice";
import { Learn } from 'src/types/API';
import { IExerciseResultProps } from 'src/types/opportunitiesRouterTypes';
import { log } from 'src/utils/functions';
import LearnItem from '..';
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import styles from './styles';

const ExerciseResult: React.FC<IExerciseResultProps> = ({
  navigation,
}) => {
  log("title", "ExerciseResult");
  const dispatch = useAppDispatch();
  const { activeLearnItemId, activeDepositIndex, learnByLearnItemId, learnStatusByLearnItemId, showCongratulationsMessage } = useAppSelector(o => o.learn);

  const [myKey, setMyKey] = useState(0);

  const activity = useAppSelector(o => o.user.user?.activity);
  const allWagered = activity?.allWagered || 0;

  const data: Learn = learnByLearnItemId[activeLearnItemId];
  const depositsCount = data.deposits.length;

  const learnStatus = learnStatusByLearnItemId[activeLearnItemId];
  const wagered = learnStatus.wagered || 0;

  const currentLearnId = learnStatus.learnItemId

  const onPressBeginNextDeposit = () => {
    console.log('on press begin next deposit')

    dispatch(setActiveDepositIndex(activeDepositIndex + 1))
    dispatch(updateActiveRouteName("LearnVideoScreen"));
    navigation.navigate('LearnVideoScreen');
  }

  const onPressBacktoModuleMenu = () => {
    console.log('on press back to module next')
    
    dispatch(updateActiveRouteName("DepositsScreen"));
    navigation.navigate('DepositsScreen');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      log("content", "ExerciseResult -> focus");
      setMyKey(Math.random());
    });

    return () => {
      if (showCongratulationsMessage) {
        dispatch(updateShowCongratulationsMessage(false));

        //clear all wager
        dispatch(updateAllWagered({ allWagered: (allWagered - wagered) }));
        // dispatch(updateWagerInLearnStatusById({ id: learnStatus.id, wagered: 0 }));
      }
      unsubscribe();
    }
  }, [navigation]);

  return (
    <AppLayout containerStyle={AppStyles.container} viewStyle={AppStyles.viewWrapper} scrollEnabled={false}>
      
      <View>
        <HeaderWithWealthBalance label="" onPressLabel={() => null} />
        <Text type="Headline/Large" variant='white' style={styles.headline}>
          Congratulations!
        </Text>
        {showCongratulationsMessage && (
          <Text type="Body/Medium" variant="white">{`You have earned ${data.reward + wagered} $WEALTH!`}</Text>
        )}
        <LearnItem data={data} myKey={myKey} />
      </View>

      <View>
        {activeDepositIndex < depositsCount - 1 && (
          <Button variant="red" onPress={onPressBeginNextDeposit}>
            <Text type="Body/Large" variant="white">Begin Next Deposit</Text>
          </Button>
        )}
        <Button variant="transparent" onPress={onPressBacktoModuleMenu}>
          <Text type="Body/Large" variant="white">Back to Module Menu</Text>
        </Button>
      </View>

    </AppLayout>
  );
};

export default ExerciseResult;
