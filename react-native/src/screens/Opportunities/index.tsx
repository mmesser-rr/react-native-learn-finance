import React, { useCallback, useEffect, useState } from 'react';
import { Image, View, Modal, FlatList, SafeAreaView, LogBox } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BackgroundTimer from 'react-native-background-timer';
import { useFocusEffect } from '@react-navigation/native';
import Button from 'src/components/common/Button';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import EventItem from 'src/screens/Opportunities/Event';
import LearnItem from 'src/screens/Opportunities/Learn';
import RewardItem from 'src/screens/Opportunities/Reward';
import ExerciseItem from './ExerciseItem';
import { useAppDispatch, useAppSelector } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { deleteAllEventStatuses } from "src/store/slices/opportunities/event.slice";
import { deleteAllLearnStatuses } from "src/store/slices/opportunities/learn.slice";
import { deleteAllRewardStatuses } from "src/store/slices/opportunities/reward.slice";
import { updateRewardData } from "src/store/slices/qrCodes.slice";
import { logout, updateWealthBalance, updateAllWagered } from "src/store/slices/user.slice";
import { enableBlur, disableBlur } from "src/store/slices/blur.slice";
import { IOpportunitiesScreenProps } from 'src/types/opportunitiesRouterTypes';
import Voting from 'src/screens/Opportunities/Voting'
import { log } from 'src/utils/functions';
import styles from './styles';
import TimeTracker from "src/components/common/TimeTracker";
import ButtonTab from "./components/ButtonTab";
import HeaderWithWealthBalance from "./components/HeaderWithWealthBalance";
import LBScreen from "./components/LB";
import {LearnKind} from 'src/types/common';
import { Learn } from "src/types/API";
import { updateShowState, getExerciseList } from 'src/store/slices/exerciseList.slice';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { scale } from 'src/config/dimentions';
import HomeIcon from 'src/assets/icons/home_idle.svg';
import HomeIcon_Focus from 'src/assets/icons/home_focus.svg';
import StarIcon from 'src/assets/icons/star_idle.svg';
import StarIcon_Focus from 'src/assets/icons/star_focus.svg';
import NoReward from 'src/assets/icons/no_reward_sm.png';
import strongIcon from 'src/assets/icons/strong.png';

const Tab = createBottomTabNavigator();

const OPPORTUNITIES = {
  Discover: 'Discover',
  Rewards: 'Rewards',
  Sessions: 'Sessions',
  Voting: 'Voting'
};

const Opportunities: React.FC<IOpportunitiesScreenProps> = ({
  navigation, route
}: IOpportunitiesScreenProps) => {
  const dispatch = useAppDispatch();

  const onPressSignOut = () => {
    BackgroundTimer.stopBackgroundTimer();
    dispatch(logout());
  };
  const activity = useAppSelector(o => o.user.user?.activity);
  const user = useAppSelector(o => o.user.user);
  const wealthBalance = activity?.wealthBalance || 0;

  const exerciseList = useAppSelector(o => o.exercise)
  const [exerciseId, setExerciseId] = useState('')
  const [exerciseApprove, setExerciseApprove] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseReward, setExerciseReward] = useState(0);

  useEffect(() => {
    const ownExercise = exerciseList.exerciseList.find(e =>
      e.studentEmail === user?.email && e.isChecked && !e.isShowed)

    if (ownExercise?.id) {
      setExerciseId(ownExercise.id)
      setExerciseReward(ownExercise.reward)
      setModalVisible(true)
      dispatch(enableBlur())
      setExerciseApprove(ownExercise.approveDecline)
    }
  }, [exerciseList])

  const closeModal = () => {
    console.log('close modal')

    setModalVisible(false)
    dispatch(disableBlur())
    dispatch(updateShowState({ id: exerciseId, isShowed: true }))
  }

  const closeModalAndCollect = () => {
    console.log('close modal and collect')

    setModalVisible(false)
    dispatch(disableBlur())
    dispatch(updateShowState({ id: exerciseId, isShowed: true }))
    dispatch(updateWealthBalance({ wealthBalance: wealthBalance + exerciseReward }));
  }

  const isBlur = useAppSelector(o => o.blur.isBlur)

  return (
    <View style={{flex: 1}}>
      {isBlur && <View style={styles.blurView}/>}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          {
            exerciseApprove ?
              <View style={styles.modalView}>
                <Image source={strongIcon} resizeMode={'contain'} />
                <Text type="Headline/Medium" variant='white' style={styles.HeadlineText}>
                  Great Job!
                </Text>
                <Text type="Body/Medium" variant='white' style={styles.bodyText}>
                  {`Your exercise has been successfully reviewed. Collect ${exerciseReward} $WEALTH!`}
                </Text>
                <Button variant="black" onPress={closeModalAndCollect} actionStyle={styles.btnStyle}>
                  <Text type="Body/Large" variant="white">Collect</Text>
                </Button>
              </View> :
              <View style={styles.modalView}>
                <Image source={NoReward} resizeMode={'contain'} />
                <Text type="Headline/Medium" variant='white' style={styles.HeadlineText}>
                  Oh No!
                </Text>
                <Text type="Body/Medium" variant='white' style={styles.bodyText}>
                  Your exercise was not approved.
                </Text>
                <Button variant="black" onPress={closeModal} actionStyle={styles.btnStyle}>
                  <Text type="Body/Large" variant="white">Close</Text>
                </Button>
              </View>
          }
        </View>
      </Modal >

      <AppLayout>
        <TimeTracker />
        <HeaderWithWealthBalance label="Sign Out" onPressLabel={onPressSignOut} />

        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'black',
              bottom: 0,
              left: 0,
            },
            tabBarShowLabel: false
          }}
          tabBar={props => {
            return (
              <View style={{ backgroundColor: 'black' }}>
                <BottomTabBar {...props} />
              </View>
            );
          }}
        >
          <Tab.Screen name="Home" options={{

            tabBarIcon: ({ size, focused, color }) => {
              return (
                focused === true ? <HomeIcon_Focus /> : <HomeIcon />
              );
            },
          }}>
            {() => <Main navigation={navigation} route={route} />}
          </Tab.Screen>
          <Tab.Screen name="Leaderboard" options={{

            tabBarIcon: ({ size, focused, color }) => {
              return (
                focused === true ? <StarIcon_Focus /> : <StarIcon />
              );
            },
          }}>
            {() => <LBScreen navigation={navigation} route={route} />}
          </Tab.Screen>
        </Tab.Navigator>
      </AppLayout>
    </View>
  );
}

const Main: React.FC<IOpportunitiesScreenProps> = ({
  route, navigation
}: IOpportunitiesScreenProps) => {
  log("title", "Main Opportunities");
  const dispatch = useAppDispatch();
  const { learnByLearnItemId, learnItemIdsOrderedByUpdatedAt, learnExerciseItems } = useAppSelector(o => o.learn);
  const events = useAppSelector(o => o.event.events);
  const rewards = useAppSelector(o => o.reward.rewards);

  useFocusEffect(
    useCallback(() => {
      dispatch(getExerciseList())
    }, [])
  )

  const [myKey, setMyKey] = useState(0);
  const [activeOpportunity, setActiveOpportunity] = useState(
    OPPORTUNITIES.Discover,
  );

  const clearData = async () => {
    dispatch(deleteAllLearnStatuses());
    dispatch(deleteAllEventStatuses());
    dispatch(deleteAllRewardStatuses());

    dispatch(updateWealthBalance({ wealthBalance: 0 }));
    dispatch(updateAllWagered({ allWagered: 0 }));
    log("content", "Opportunities - cleared data");
    setMyKey(Math.random());
  };

  const test = async () => {
    // console.log('generate crash')
    // throw new Error("My first Sentry error!");
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      log("content", "Opportunities -> focus");
      setMyKey(Math.random());
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (activeOpportunity === OPPORTUNITIES.Rewards) {
      console.log('select rewards')
    }
  }, [activeOpportunity])

  const onPressExerciseItem = (id: string) => {
    console.log('on Press Exercise Item = ', id)
    if (id) {
      dispatch(updateActiveRouteName("SnackScreen"));
      navigation.navigate("SnackScreen", {learnId: id});
    }
  }

  const renderDiscover = item => {
    if (item.item.kind === LearnKind.LEARN) {
      return <LearnItem data={learnByLearnItemId[item.item.id] as Learn} myKey={myKey} />
    } else if (item.item.kind === LearnKind.EXERCISE) {
      return <ExerciseItem id={item.item.id} pressExercise={onPressExerciseItem}/>
    }
    return <></>
  }

  return (
    <View style={styles.mainContainer}>

      <View style={{ flex: 1 }}>
        <View style={styles.tabGroup}>
          {[OPPORTUNITIES.Discover, OPPORTUNITIES.Sessions, OPPORTUNITIES.Rewards, OPPORTUNITIES.Voting].map((label, index) => (
            <ButtonTab
              {...{
                key: index,
                label: label,
                activeTab: activeOpportunity,
                setActiveTab: setActiveOpportunity,
              }}
            />
          ))}
        </View>

        {activeOpportunity === OPPORTUNITIES.Discover && 
          <FlatList
            data={learnItemIdsOrderedByUpdatedAt}
            renderItem={item => renderDiscover(item)}
            keyExtractor={(item, index) => item.id + index}
          />
        }

        {activeOpportunity === OPPORTUNITIES.Sessions &&
          <FlatList
            data={events}
            renderItem={(item) => <EventItem data={item.item} />}
            keyExtractor={item => item.id}
          />
        }

        {activeOpportunity === OPPORTUNITIES.Rewards &&
          <FlatList
            data={rewards}
            renderItem={(item) => <RewardItem data={item.item} />}
            keyExtractor={item => item.id}
          />
        }
        
        {activeOpportunity === OPPORTUNITIES.Voting && <Voting navigation={navigation} route={route} />}
      </View>

      {/* <Button variant="transparent" actionStyle={{ marginTop: scale(16), marginBottom: scale(1) }} onPress={clearData}>
        <Text type="Body/Large">Clear Data</Text>
      </Button> */}
      
      {/* <Button variant="transparent" actionStyle={{ marginTop: scale(16), marginBottom: scale(1) }} onPress={test}>
        <Text type="Body/Large">Test</Text>
      </Button> */}
      
    </View >
  );
};

export default Opportunities;


