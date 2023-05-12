import { Storage } from 'aws-amplify';
import { format } from 'date-fns-tz';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Button from 'src/components/common/Button';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';
import { Text } from 'src/components/common/Texts';
import NavigationService from 'src/navigation/NavigationService';
import { useAppDispatch, useAppSelector } from "src/store";
import { createEventStatus, setActiveEventItemId } from "src/store/slices/opportunities/event.slice";
import { Event } from 'src/types/API';
import { log } from 'src/utils/functions';
import { getCloudFrontImgeUrl } from 'src/utils/functions';
import commonStyles from '../styles';
import styles from './styles';

interface EventItemProps {
  data: Event;
}
const EventItem: React.FC<EventItemProps> = ({
  data
}: EventItemProps) => {
  log("title", "EventItem");
  const dispatch = useAppDispatch();
  const { eventStatusByEventItemId } = useAppSelector(o => o.event);
  const athleteId = useAppSelector(o => o.user.user?.id || "");

  const [imgSrc, setImgSrc] = useState("https://reactjs.org/logo-og.png");

  const formattedDateTime = format(new Date(data.dateTime), "MMMM do 'at' hh:mmaaa zzz");
  const formattedCategory = data.category.replace("_", " ");

  const onPressRSVP = () => {
    dispatch(setActiveEventItemId(data.id));

    if (!eventStatusByEventItemId[data.id]) {
      dispatch(createEventStatus({ athleteId, eventItemId: data.id }));
    }
    NavigationService.navigate('AboutEventScreen');
  };

  // useEffect(() => {
  //   const setBackgroundImage = async () => {
  //     if (data.heroPhotoUri.length) {
  //       const bgImage = await Storage.get(data.heroPhotoUri, { download: false });
  //       setImgSrc(bgImage);
  //     }
  //   };

  //   setBackgroundImage();
  // }, []);

  return (
    <ImageCard backgroundImage={getCloudFrontImgeUrl(data.heroPhotoUri)}>
      <Text type="Body/Medium" variant='white' style={styles.sponsor}>
        Presented by {' '}
        <Text type="Body/Medium" variant='white' style={commonStyles.bold}>{data.sponsor}</Text>
      </Text>
      <Text type="Headline/Medium" variant='white'>{data.title}</Text>
      <View style={commonStyles.flexRow}>
        <Text type="Body/Medium" variant='white'>{formattedCategory}</Text>
        <Oval />
        <Text type="Body/Medium" variant='white'>{`${data.reward} $WEALTH`}</Text>
      </View>
      <Text type="Body/Medium" variant='white'>{formattedDateTime}</Text>
      <View style={styles.buttonGroup}>
        <Button variant='transparent' actionStyle={styles.notify}>
          <Text type="Body/Medium" variant='white'>Notify Me</Text>
        </Button>
        <View style={styles.buttonGap}></View>
        <Button variant='red' actionStyle={styles.rsvp} onPress={onPressRSVP}>
          <Text type="Body/Medium" variant='white'>RSVP</Text>
        </Button>
      </View>
    </ImageCard>
  );
};

export default EventItem;
