import React, { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Modal, FlatList, SafeAreaView, Animated, ImageBackground, ScrollView } from 'react-native';
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import { IVotingScreenProps } from 'src/types/opportunitiesRouterTypes';
import { Text } from 'src/components/common/Texts';
import Loading from 'src/components/common/Loading';
import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import { getProposals, submitVotingCount, getLatestVotingSession, submitVoteduser, findOwnVoting } from 'src/store/slices/proposal.slice';
import { useAppDispatch, useAppSelector } from "src/store";
import moneyBagIcon from 'src/assets/icons/money-bag.png';
import alarmClock from "src/assets/icons/alarm-clock.png";
import CloseIcon from "src/assets/icons/close-white.svg";
import HeartButton from "src/assets/icons/default-heart-button.png";
import voteBackground from "src/assets/icons/vote_background.png";
import HeartIcon from 'src/assets/icons/heart.svg';
import stopIcon from "src/assets/icons/stop-icon.png";
import LeftArrowIcon from 'src/assets/icons/left-arrow.svg';
import RightArrowIcon from 'src/assets/icons/right-arrow.svg';
import styles from './styles';

import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

type ProgressBarProps = {
  total: number,
  progress: number
}

const VotingProgressBar: React.FC<ProgressBarProps> = ({total, progress}) => {
  const width = ((total - progress) / total) * 100

  return  (
    <View style={styles.progressBarContainer}>
      <View style={{
        backgroundColor: AppColors.accentRed100,
        width: `${width}%`,
        height: scale(6)}}>
      </View>
    </View>
  )
}

const VotingScreen:  React.FC<IVotingScreenProps> = ({
    route, navigation
  }: IVotingScreenProps) => {
    const dispatch = useAppDispatch()

    const { proposalList, votingTimeExpired, alreadyVotingMade } = useAppSelector(o => o.proposal)
    const [step, setStep] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [likeList, setLikeList] = useState<Array<number>>([])
    const [likedCount, setLikedCount] = useState(0)
    const [readySubmit, setReadySubmit] = useState(false)
    const [errShow, setErrShow] = useState(false)
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(new Animated.Value(0))

    useEffect(() => {
      console.log('get proposals')
      dispatch(getProposals())
      dispatch(getLatestVotingSession()).then(e => {
        if (votingTimeExpired) {
          setLoading(false)
        } else {
          dispatch(findOwnVoting()).then(f => {
              setLoading(false)
          })
        }
      })
    }, [])

    useEffect(() => {
      if (proposalList.length > 0) {
        setTotalCount(proposalList.length)
        setLikeList(new Array(proposalList.length). fill(0))
      }
    }, [proposalList])

    useEffect(() => {
      if (step === totalCount && likedCount === totalCount) {
        setReadySubmit(true)
        errShow && setErrShow(false)
      } else {
        setReadySubmit(false)
      }
    }, [step, likedCount])

    const onPressGoBack = () => {
      navigation.goBack()
    }
    
    const onPressPrevious = () => {
      console.log('press previous')
      if (step > 1) {
        setStep(step - 1)
      }
    }

    const onPressNext = () => {
      console.log('press next')
      if (step === totalCount) {
        setErrShow(true)
        console.log('There are some remain loves. Please use all loves')
      } else {
        setStep(step + 1)
      }
    }

    const onPressHeart = () => {
      console.log('on press heart')
      if (likedCount == totalCount) {
        return
      }
      let temp = likeList
      temp[step - 1]++
      setLikeList(temp)
      setLikedCount(likedCount + 1)
    }

    const onPressSubmit = () => {
      console.log('press submit ', likeList, proposalList)
      dispatch(submitVoteduser())
      dispatch(submitVotingCount({
        counts: likeList,
        proposalList: proposalList
      })).then(e => {
        e.meta.requestStatus == "fulfilled" && navigation.navigate("VotingSubmittedScreen")
      })
    }

    const getVotingTitle = (word: string) => {
      const lower = word.toLocaleLowerCase()
      // return lower.charAt(0).toUpperCase() + lower.slice(1);
      if (lower === "community") {
        return "Community Building"
      } else if (lower === "learning") {
        return "Learning Experience"
      } else if (lower === "professional") {
        return "Professional Development"
      } 
      return "New Feature"
    }

    const startAnimation = () => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
    
    const onPressClose = () => {
      navigation.goBack()
    }

    return (
      <View style={{flex: 1}}>
        {(votingTimeExpired || alreadyVotingMade) && <View style={styles.blurView}/>}
            
        {votingTimeExpired && <View style={styles.disableLayer}>
          <View style={styles.diableContainer}>
              <TouchableOpacity style={styles.closeIcon} onPress={onPressClose}>
                  <CloseIcon/>
              </TouchableOpacity>
              <Image source={alarmClock}/>
              <Text type="Body/Medium" variant='white' style={styles.alarmText}>Oh No!</Text>
              <Text type="Body/Small" variant='white'>The proposal window is now closed</Text>
          </View>
      </View>}

        {alreadyVotingMade && <View style={styles.disableLayer}>
            <View style={styles.diableContainer}>
              <TouchableOpacity style={styles.closeIcon} onPress={onPressClose}>
                  <CloseIcon/>
              </TouchableOpacity>
              <Image source={stopIcon}/>
              <Text type="Body/Medium" variant='white' style={styles.alarmText}>Hey again! </Text>
              <Text type="Body/Small" variant='white'>Looks like you already submitted a proposal</Text>
            </View>
        </View>}

        <AppLayout>
          <HeaderWithWealthBalance label="Go Back" onPressLabel={onPressGoBack} />
          <View style={styles.title}>
            <Text type='Headline/Large' variant='white'>Shape our </Text>
            <Text type='Headline/Large' variant='red'>Future</Text>
            <Text type='Headline/Large' variant='white'>.</Text>
          </View>
          <VotingProgressBar total={totalCount} progress={likedCount}/>
          <Text type='Body/Small' variant='white' style={styles.remainText}>{totalCount - likedCount} of {totalCount} loves remaining</Text>
          {errShow && <Text type='Body/Small' variant='red'>There are some remain loves. Please use all loves</Text>}

          <View style={styles.voteCard}>
            {proposalList.length > 0 && <>
              <View style={styles.voteCardHeader}>
                <Text type='Headline/Large' variant='white'>{getVotingTitle(proposalList[step - 1].track)}</Text>
              </View>
              <ScrollView style={styles.voteCardBody}>
                <Text type='Body/Large' variant='white'>
                  {proposalList[step - 1].statement}
                </Text>
                <Text type='Body/Large' variant='white'>
                  {proposalList[step - 1].desiredGoal}
                </Text>
              </ScrollView>
              <View style={styles.voteCardFooter}>
                <Button variant='white' noRadius actionStyle={styles.nextBtn} onPress={onPressPrevious}>
                  <Text type='Body/Large' variant='black'>Previous</Text>
                </Button>
                <TouchableOpacity style={styles.heartBtnContainer} onPress={onPressHeart}>
                  <Image source={HeartButton} style={styles.heartBtn}></Image>
                </TouchableOpacity>
                {
                  !readySubmit ? 
                  <Button variant='white' noRadius actionStyle={styles.nextBtn} onPress={onPressNext}>
                    <Text type='Body/Large' variant='black'>Next</Text>
                  </Button>
                  :
                  <Button variant='red' noRadius actionStyle={styles.nextBtn} onPress={onPressSubmit}>
                    <Text type='Body/Large' variant='white'>Submit</Text>
                  </Button>
                }
              </View>
            </>}
          </View>

          <View style={styles.bottomCard}>
          </View>

          <View style={styles.swipeContainer}>
            <Text type='Body/Small' variant='white'>{step} / {totalCount}</Text>  
            <Text type='Body/Small' variant='white'>Swipe to see the next proposal</Text>
            <View style={styles.arrowContainer}>
              <LeftArrowIcon style={styles.leftIcon}/>
              <RightArrowIcon />
            </View>
          </View>
        </AppLayout>
        {loading && <Loading />}
      </View>
    )
}

export default VotingScreen;