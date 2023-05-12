import {
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import { Storage } from "aws-amplify";
import { format } from 'date-fns-tz';
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "src/components/common/Button";
import BottomModal from "src/components/common/BottomModal";
import CustomReadMore from 'src/components/common/ReadMore';
import { Text } from "src/components/common/Texts";
import { IAboutEventProps } from "src/types/opportunitiesRouterTypes";
import { useAppSelector } from "src/store";
import { updateEventStatusById } from "src/store/slices/opportunities/event.slice";
import { Event } from "src/types/API";
import { getCloudFrontImgeUrl } from 'src/utils/functions';
import BackwardIcon from 'src/assets/icons/backward.png';
import WealthIcon from 'src/assets/icons/wealth.png';
import styles from './styles';
import awsInformation from 'src/aws-exports';

const AWS = require('aws-sdk');
const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: awsInformation.aws_project_region,
};
const AWS_SES = new AWS.SES(SES_CONFIG);

const Divider = () => (
  <View style={styles.divider} />
);
const AboutEvent: React.FC<IAboutEventProps> = ({
  navigation
}) => {

  const dispatch = useDispatch();
  const { events, activeEventItemId, eventStatusByEventItemId } = useAppSelector(o => o.event);
  const { email } = useAppSelector(o => o.athlete)

  const [heroPhotoSrc, setHeroPhotoSrc] = useState("");
  const [avatarSrc, setAvatarSrc] = useState("");
  const [confirmed, setConfirmed] = useState(eventStatusByEventItemId[activeEventItemId] ? eventStatusByEventItemId[activeEventItemId].registered : false);
  const [showModal, setShowModal] = useState(false);

  const data: Event = events.filter(o => o.id === activeEventItemId)[0];
  const date = format(new Date(data.dateTime), "MMMM do");
  const time = format(new Date(data.dateTime), "hh:mmaaa zzz");

  const handleConfirm = () => {
    dispatch(updateEventStatusById({ id: eventStatusByEventItemId[data.id].id, registered: true }));
    setConfirmed(true);
    return true;
  };

  const handleCancelConfirm = () => {
    dispatch(updateEventStatusById({ id: eventStatusByEventItemId[data.id].id, registered: false }));
    setConfirmed(false);
  };

  const onRSVP = () => {
    console.log('click rsvp')

    const managerMail = process.env.MANAGER_MAIL;
    const link = 'https://us02web.zoom.us/j/6097899331';

    let params = {
      Source: managerMail,
      Destination: {
        ToAddresses: [
          email
        ],
      },
      ReplyToAddresses: [managerMail],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: '<h3>Please click the link to Join The LEARNER Games live session.</h3><p>' + link + '</p>',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Meeting Link for LEARNER Games Live Session',
        }
      },
    };
    var sendPromise = AWS_SES.sendEmail(params).promise();
    console.log(managerMail, email, link)

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
      function (data) {
        console.log(data);
      }).catch(
        function (err) {
          console.error(err, err.stack);
        });
  }

  // useEffect(() => {
  //   const setImages = async () => {
  //     const _heroPhotoSrc = await Storage.get(data.heroPhotoUri, { download: false });
  //     const _avatarSrc = await Storage.get(data.logoUri, { download: false });

  //     setHeroPhotoSrc(_heroPhotoSrc);
  //     setAvatarSrc(_avatarSrc);
  //   };

  //   setImages();
  // }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View>
          {/* Profile */}
          {!!data.heroPhotoUri.length && !!data.logoUri.length && (
            <ImageBackground source={{ uri: getCloudFrontImgeUrl(data.heroPhotoUri) }} resizeMode="cover" style={styles.heroPhoto}>
              <TouchableOpacity style={styles.backward} onPress={() => navigation.goBack()}>
                <Text type="Body/Large" style={styles.label}>Go Back</Text>
              </TouchableOpacity>
              <Image source={{ uri: getCloudFrontImgeUrl(data.logoUri) }} style={styles.avatar} />
            </ImageBackground>
          )}

          {/* Event Details */}
          <View style={styles.paddingHorizontal16}>
            <Text type="Body/Medium" variant='white' style={styles.tagline}>{data.tagline}</Text>
            <Text type="Headline/Medium" variant='white' style={{ marginBottom: 4 }}>About</Text>
            <CustomReadMore
              numberOfLines={4}
              content={data.description}
            />
            <View style={styles.infoBox}>

              <View style={styles.infoRow}>
                <Text type="Body/Large" variant='white'>Date</Text>
                <Text type="Body/Large" variant='white'>{date}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Body/Large" variant='white'>Time</Text>
                <Text type="Body/Large" variant='white'>{time}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Body/Large" variant='white'>Location</Text>
                <Text type="Body/Large" variant='white'>{data.location}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Body/Large" variant='white'>Reward</Text>
                <View style={styles.wealthAmount}>
                  <Image source={WealthIcon} style={styles.wealthIcon} />
                  <Text type="Body/Large" variant='white'>{data.reward}</Text>
                </View>

              </View>
            </View>
          </View>

          <BottomModal
            title="Confirm Registration?"
            description="Event details will be sent via email, you can change/cancel your registration in your profile."
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            handleConfirm={handleConfirm}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </View>

        <View style={styles.paddingHorizontal16}>
          {!confirmed && (
            <Button variant="red" actionStyle={styles.rsvpButton} onPress={() => setShowModal(true)}>
              <Text type="Body/Large" variant='white'>RSVP</Text>
            </Button>
          )}

          {confirmed && (
            <View>
              <Button variant="red" actionStyle={styles.RegConfirmedButton} onPress={onRSVP}>
                <Text type="Body/Large" variant='white'>Registration Confirmed</Text>
              </Button>
              <Button variant="transparent" actionStyle={styles.cancelRegButton} onPress={handleCancelConfirm}>
                <Text type="Body/Large" variant='white'>Cancel Registration</Text>
              </Button>
            </View>
          )}
        </View>
      </View>
    </BottomSheetModalProvider>
  );
};

export default AboutEvent;