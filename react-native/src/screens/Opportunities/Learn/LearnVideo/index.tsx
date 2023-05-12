import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';
import * as Progress from 'react-native-progress';
import CloseIcon from 'src/assets/icons/close-gray.png';
import Backward5Icon from 'src/assets/icons/learn-video/backward.png';
import Forward5Icon from 'src/assets/icons/learn-video/forward.png';
import PauseIcon from 'src/assets/icons/learn-video/pause.png';
import PlayIcon from 'src/assets/icons/learn-video/play.png';
import Button from 'src/components/common/Button';
import { Text } from 'src/components/common/Texts';
import { useAppDispatch, useAppSelector } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { Deposit, Quiz } from 'src/types/API';
import { ILearnVideoProps } from 'src/types/opportunitiesRouterTypes';
import { log, getCloudFrontVideo } from 'src/utils/functions';
import styles from './styles';

const LearnVideo: React.FC<ILearnVideoProps> = ({
  route,
  navigation
}) => {
  log("title", "LearnVideo");
  const dispatch = useAppDispatch();
  const { activeLearnItemId, activeDepositIndex, learnByLearnItemId } = useAppSelector(o => o.learn);
  const activeRouteName = useAppSelector(o => o.navigation.activeRouteName);

  const [myKey, setMyKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [ended, setEnded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  // For component test without video
  /* let ct = currentTime; */
  // End test

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      log("content", "LearnVideo -> focus");
      setLoading(true);
      setEnded(false);
      setCurrentTime(0);
      setMyKey(Math.random());

      // For component test without video
      /* ct = 0;
      setLoading(false);
      const updateCurrentTime = () => {
        if (ct < duration) {
          ct += 0.25;
          setCurrentTime(ct);
          setTimeout(() => updateCurrentTime(), 250);
        }
        else {
          setEnded(true);
        }
      };
      updateCurrentTime(); */
      // End test
    });

    return unsubscribe;
  }, [navigation]);
  const videoRef = useRef<Video>(null);

  const bug1: boolean = activeRouteName !== route.name;
  if (bug1) {
    return <></>;
  }

  log("content", "Video will be rendered.");
  const deposits = learnByLearnItemId[activeLearnItemId].deposits
  const depositData: Deposit = deposits[activeDepositIndex];
  const questions: Quiz[] = depositData?.questions;

  const onPressCloseVideo = () => {
    navigation.navigate("DepositsScreen");
  };

  const onPressBackward5 = () => {
    const timestamp = Math.min(currentTime, 5);
    videoRef.current?.seek(currentTime - timestamp);
  };

  const onPressPause = () => {
    setPaused(true);
  };

  const onPressPlay = () => {
    setPaused(false);
  };

  const onPressForward5 = () => {
    const timestamp = Math.min(duration - currentTime, 5);
    videoRef.current?.seek(currentTime + timestamp);
  };

  const onPressTakeQuiz = () => {
    dispatch(updateActiveRouteName("Exercise"));
    navigation.navigate("ExerciseScreen", { started: false, questions });
  };

  const onLoad = (data: OnLoadData) => {
    setLoading(false);
    setPaused(false);
    setDuration(data.duration);
    videoRef.current?.seek(0);
  };

  const onProgress = (data: OnProgressData) => {
    const percent: number = Number((data.currentTime / duration).toFixed(2))
    if (videoProgress != percent && Number.isInteger(percent / 0.02)) {
      setVideoProgress(percent)
    }
    setCurrentTime(data.currentTime);
  };

  const onEnd = () => {
    setPaused(true);
    setEnded(true);
  };

  const onValueChange = (value: number) => {
    if (value < duration && ended) {
      setEnded(false);
    }
    videoRef.current?.seek(value);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => paused ? onPressPlay() : onPressPause()}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: getCloudFrontVideo(depositData.videoUri ?? "") }}
            style={styles.backgroundVideo}
            rate={1} volume={1} resizeMode="cover" repeat={false} paused={paused} ref={videoRef}
            ignoreSilentSwitch="ignore"
            onLoad={onLoad}
            onProgress={onProgress}
            onEnd={onEnd}
          />

          <Spinner visible={loading} textContent={'Loading...'} textStyle={styles.spinnerTextStyle}/>

          <TouchableOpacity style={styles.closeIcon} onPress={onPressCloseVideo}>
            <Image source={CloseIcon} />
          </TouchableOpacity>

          {ended && (
            <View style={styles.beginCard}>
              <Text variant='white' type="Headline/Small">Take Quiz &amp; Earn $WEALTH</Text>
              <Button variant="red" actionStyle={styles.beginButton} onPress={onPressTakeQuiz}>
                <Text type="Headline/Small">Begin</Text>
              </Button>
            </View>
          )}

          <View>
            <Text type="Body/Small">{" "}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.controlContainer}>
        <Progress.Bar progress={videoProgress} width={null} borderColor={'white'} color={'white'} />

        <View style={styles.controlBox}>
          <View>
            <Text type="Headline/Small">{depositData.title}</Text>
            <Text type="Body/Medium" variant='white'>{`Deposit ${activeDepositIndex + 1} of ${deposits.length}`}</Text>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity onPress={onPressBackward5}>
              <Image source={Backward5Icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.playpause} onPress={() => paused ? onPressPlay() : onPressPause()}>
              <Image source={paused ? PlayIcon : PauseIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressForward5}>
              <Image source={Forward5Icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LearnVideo;
