import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import WealthIcon from 'src/assets/icons/wealth.png';
import ImageCard from 'src/components/common/ImageCard';
import { Text } from 'src/components/common/Texts';
import NavigationService from 'src/navigation/NavigationService';
import { useAppDispatch, useAppSelector } from "src/store";
import { createRewardStatus, setActiveRewardItemId } from "src/store/slices/opportunities/reward.slice";
import { Reward } from 'src/types/API';
import { getCloudFrontImgeUrl } from 'src/utils/functions';
import styles from './styles';

interface RewardItemProps {
  data: Reward;
}
const RewardItem: React.FC<RewardItemProps> = ({
  data
}: RewardItemProps) => {
  const dispatch = useAppDispatch();
  const { rewardStatusByRewardItemId } = useAppSelector(o => o.reward);
  const athleteId = useAppSelector(o => o.user.user?.id || "");

  const [heroPhotoSrc, setHeroPhotoSrc] = useState("https://reactjs.org/logo-og.png");
  const [logoSrc, setLogoSrc] = useState("https://reactjs.org/logo-og.png");

  const onPressRewardItem = () => {
    console.log('on press reward item')
    
    dispatch(setActiveRewardItemId(data.id));

    if (!rewardStatusByRewardItemId[data.id]) {
      dispatch(createRewardStatus({ athleteId, rewardItemId: data.id }));
    }
    NavigationService.navigate('RedeemScreen');
  };

  // useEffect(() => {
  //   const setBackgroundImage = async () => {
  //     if (data.heroPhotoUri?.length) {
  //       const img = await Storage.get(data.heroPhotoUri, { download: false });
  //       setHeroPhotoSrc(img);
  //     }
  //     console.log(data.heroPhotoUri)

  //     if (data.logoUri?.length) {
  //       const img = await Storage.get(data.logoUri, { download: false });
  //       setLogoSrc(img);
  //     }
  //   };

  //   setBackgroundImage();
  // }, []);

  return (
    <ImageCard backgroundImage={getCloudFrontImgeUrl(data.heroPhotoUri)} disabled={false} onPress={onPressRewardItem}>
      <View style={styles.wealthAmount}>
        <Image source={WealthIcon} style={styles.wealthIcon} />
        <Text type="Body/Medium" variant='white'>{data.wealthAmount}</Text>
      </View>
      <View style={styles.body}>
        <Image source={{ uri: getCloudFrontImgeUrl(data.logoUri) }} style={styles.logo} />
        <View style={styles.content}>
          <Text type="Headline/Medium" variant='white'>{data.title}</Text>
          <Text type="Paragraph/Medium" variant='white'>{data.description}</Text>
        </View>
      </View>
    </ImageCard>
  );
};

export default RewardItem;
