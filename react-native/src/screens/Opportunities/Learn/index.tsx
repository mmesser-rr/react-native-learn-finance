import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Button from 'src/components/common/Button';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';
import { Text } from 'src/components/common/Texts';
import NavigationService from 'src/navigation/NavigationService';
import { useAppDispatch, useAppSelector } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { createLearnStatus, setActiveDepositIndex, setActiveLearnItemId } from "src/store/slices/opportunities/learn.slice";
import { Learn } from 'src/types/API';
import { getCloudFrontImgeUrl } from 'src/utils/functions';
import { log } from 'src/utils/functions';
import DepositsProgressBar from "../components/DepositsProgressBar";
import commonStyles from '../styles';
import styles from './styles';

interface LearnItemProps {
  data: Learn | undefined,
  myKey: number; // Used for rerendering LearnItem when the Opportunities screen rerenders
}

const LearnItem: React.FC<LearnItemProps> = ({
  data,
  myKey
}: LearnItemProps) => {
  log("title", `LearnItem '${data?.title}'`);
  if (!data) return <></>;

  const dispatch = useAppDispatch();
  const athleteId = useAppSelector(o => o.user.user?.id) as string;
  const learnStatusByLearnItemId = useAppSelector(o => o.learn.learnStatusByLearnItemId);
  const activeRouteName = useAppSelector(o => o.navigation.activeRouteName)

  const [imgSrc, setImgSrc] = useState("");

  const activeLearnStatus = learnStatusByLearnItemId[data.id];
  const passedDepositsCount = activeLearnStatus?.passedDepositsCount || 0;

  const formattedLevel = data.level.at(0) + data.level.substring(1).toLowerCase();
  const depositsCount = data.deposits.length;

  const onPressLearnItem = async () => {
    console.log('on press learn item')
    // if (activeRouteName === "OpportunitiesScreen") {
      dispatch(setActiveLearnItemId(data.id));
      if (!learnStatusByLearnItemId[data.id]) {
        await dispatch(createLearnStatus({ athleteId, learnItemId: data.id }));
      }
      dispatch(updateActiveRouteName("DepositsScreen"));
      NavigationService.navigate('DepositsScreen');
    // }
  };

  const onPressContinue = () => {
    dispatch(setActiveDepositIndex(passedDepositsCount))
    dispatch(updateActiveRouteName("LearnVideoScreen"));
    NavigationService.navigate('OpportunitiesStack', { screen: 'LearnVideoScreen' });
  }

  const renderMetaInfo = () => (
    <View style={commonStyles.flexRow}>
      <Text type="Body/Medium" variant='white'>{formattedLevel}</Text>
      <Oval />
      <Text type="Body/Medium" variant='white'>{`${data.reward} $WEALTH`}</Text>
      <Oval />
      <Text type="Body/Medium" variant='white'>{`${depositsCount} Deposits`}</Text>
    </View>
  );

  // useEffect(() => {
  //   const setBackgroundImage = async () => {
  //     log("content", `data.bgImageUri: ${data.bgImageUri}`);
  //     if (data.bgImageUri?.length) {
  //       const bgImage = await Storage.get(data.bgImageUri, { download: false });
  //       setImgSrc(bgImage);
  //     }
  //   };

  //   setBackgroundImage();
  // }, [data]);

  return (
    <ImageCard backgroundImage={getCloudFrontImgeUrl(data.bgImageUri)} disabled={false} onPress={onPressLearnItem}>
      {passedDepositsCount > 0 && (
        <DepositsProgressBar 
          passedDepositsCount={passedDepositsCount}
          depositsCount={depositsCount}
        />
      )}
      <Text type="Body/Medium" variant='white'>
        Presented by <Text type="Body/Medium" variant='white' style={commonStyles.bold}>{data.sponsor}</Text>
      </Text>
      <Text type="Headline/Small" variant='white' style={styles.title}>{data.title}</Text>

      {renderMetaInfo()}

      {/* {(activeRouteName !== "OpportunitiesScreen") && passedDepositsCount > 0 && passedDepositsCount < depositsCount && (
        <Button variant='red' actionStyle={styles.bottomButton} onPress={onPressContinue}>
          <Text type="Body/Large" variant='white'>Continue</Text>
        </Button>
      )}  */}
    </ImageCard>
  );
};

export default React.memo(LearnItem);
