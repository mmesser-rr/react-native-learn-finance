import { Storage } from "aws-amplify";
import React, { useEffect, useState, useMemo, useCallback, } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Modal, Image, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import LockedIcon from 'src/assets/icons/deposits-screen/locked.svg';
import AboutTab from "./tabs/AboutTab";
import Button from "src/components/common/Button";
import ImageCard from "src/components/common/ImageCard";
import { Text } from "src/components/common/Texts";
import AppLayout from "src/components/layout/AppLayout";
import Loading from 'src/components/common/Loading';
import { useAppDispatch, useAppSelector } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { updateSubmitState } from "src/store/slices/exerciseList.slice";
import { setActiveDepositIndex, setActiveQaItemIndex, updateWagerInLearnStatusById, updateLearnStatusById, updateIsWageredInLearnStatusById, setJustCreateQuestion } from "src/store/slices/opportunities/learn.slice";
import { updateAllWagered, updateWealthBalance } from "src/store/slices/user.slice";
import { } from "src/store/slices/exerciseList.slice";
import { IDepositsScreenProps } from "src/types/opportunitiesRouterTypes";
import { getCloudFrontImgeUrl, log } from "src/utils/functions";
import ButtonTab from "../../components/ButtonTab";
import DepositsProgressBar from "../../components/DepositsProgressBar";
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import ExerciseIcon from 'src/assets/icons/exercise.svg';
import DepositItem from "./components/DepositItem";
import QAItem from "./components/QAItem";
import RewardLabel from "./components/RewardLabel";
import styles from "./styles";
import { scale } from "src/config/dimentions";
import WagerBottomModal from "src/components/common/WagerBottomModal";
import BottomModal from "src/components/common/BottomModal";
import CheckedCircle from 'src/assets/icons/checked-circle.svg';
import confirmIcon from 'src/assets/icons/reward_confirm_sm.png';
import rewardIcon from 'src/assets/icons/reward_coin_sm.png';
import { TouchableOpacity } from "react-native-gesture-handler";
import NavigationService from 'src/navigation/NavigationService';
import { disableBlur, enableBlur } from "src/store/slices/blur.slice";

const TABS = {
  DEPOSITS: "Deposits",
  QUESTIONS: "Questions",
  ABOUT: "About"
};

// const goolgeSheetAppUrl = "googlesheets://";

const DepositsScreen: React.FC<IDepositsScreenProps> = ({ navigation }: IDepositsScreenProps) => {
  log("title", "DepositsScreen");
  const dispatch = useAppDispatch();
  const { activeLearnItemId, learnByLearnItemId, learnStatusByLearnItemId, justSubmitQuestion, justCreateQuestion } = useAppSelector(o => o.learn);
  const activity = useAppSelector(o => o.user.user?.activity);
  const user = useAppSelector(o => o.user)
  const exercises = useAppSelector(o => o.exercise)

  const wealthBalance = activity?.wealthBalance || 0;
  const allWagered = activity?.allWagered || 0;

  const [myKey, setMyKey] = useState(0);
  const [activeTab, setActiveTab] = useState(TABS.DEPOSITS);
  const [heroPhotoSrc, setHeroPhotoSrc] = useState("https://reactjs.org/logo-og.png");

  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showSubmitErrMsg, setShowSubmitErrMsg] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [qModalVisible, setQModalVisible] = useState(false);

  const learn = learnByLearnItemId[activeLearnItemId];
  const learnStatus = learnStatusByLearnItemId[activeLearnItemId];
  // console.log('----------------> learnStatus ', learnStatus);

  const passedDepositsCount = learnStatus?.passedDepositsCount || 0;
  const rewardAmount = learn?.reward || 0;
  const deposits = learn?.deposits || [];
  const depositsCount = deposits.length;
  const received = passedDepositsCount === depositsCount;
  const qaItems = useMemo(() => learn?.qaItems || [], [learn]);
  const about = "";
  const wagered = learnStatus?.wagered || 0;
  const isWagered = learnStatus?.isWagered || false;

  // const matchExercise = useMemo(() => exercises.exerciseList.find(e => e.learnId === learn.id), [learn.id])
  // console.log('>>>>>> learn ', learn);
  // console.log('+++++++ activity = ', activity);

  const handleWager = (wagerValue: number) => {
    if (wagerValue === 0) {
      return false;
    }
    console.log('wealth, wager, allWagered', wealthBalance, wagerValue, allWagered);
    if (wagerValue > wealthBalance - allWagered) {
      console.log('wager value is too much');
      setShowErrorMsg(true);
      return false;
    }
    setShowErrorMsg(false);

    dispatch(updateWagerInLearnStatusById({ id: learnStatus.id, wagered: wagerValue }));
    dispatch(updateAllWagered({ allWagered: (allWagered + wagerValue) }));
    dispatch(updateIsWageredInLearnStatusById({ id: learnStatus.id, isWagered: true }));
    return true;
  };

  // const handleSubmitExercise = () => {
  //   const found = exercises.exerciseList.find(e => e.learnId === learn.id &&
  //     e.studentEmail === user.user?.email && !e.isSubmitted)

  //   console.log('submit found = ', found)
  //   if (found?.id && !found.isSubmitted) {
  //     dispatch(updateSubmitState({ id: found.id, isSubmitted: true }))
  //     setModalVisible(true)
  //     dispatch(enableBlur())
  //   } else {
  //     setShowSubmitErrMsg(true)
  //     return false
  //   }

  //   return true
  // }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      log("content", "DepositsScreen -> focus");
      setMyKey(Math.random());
    });

    return unsubscribe;
  }, [navigation]);

  // useEffect(() => {
  //   const setImages = async () => {
  //     const bgImageUri = learn?.bgImageUri;
  //     if (bgImageUri) {
  //       const _heroPhotoSrc = await Storage.get(bgImageUri, { download: false });
  //       setHeroPhotoSrc(_heroPhotoSrc);
  //     }
  //   };
  //   setImages();
  // }, [learn]);

  const onPressGoToDashboard = () => {
    dispatch(updateActiveRouteName("OpportunitiesScreen"));
    navigation.navigate("OpportunitiesScreen");
  };

  const onPressDepositItem = (depositIndex: number) => {
    dispatch(setActiveDepositIndex(depositIndex));
    dispatch(updateActiveRouteName("LearnVideoScreen"));
    navigation.navigate('LearnVideoScreen');
  };

  const onPressQAItem = (qaItemIndex: number) => {
    dispatch(setActiveQaItemIndex(qaItemIndex));
    dispatch(updateActiveRouteName("QAScreen"));
    navigation.navigate("QAScreen");
  };

  const onPressAskQuestion = () => {
    dispatch(updateActiveRouteName("AskQuestionScreen"));
    navigation.navigate("AskQuestionScreen");
  };

  const onSubmitExercise = () => {
    setShowSubmitModal(true)
    setShowSubmitErrMsg(false)
  }

  const pressExercise = async () => {
    console.log('press complete exercise')
    dispatch(updateActiveRouteName("SnackScreen"));
    navigation.navigate("SnackScreen", {learnId: learn.id});
    // const found = exercises.exerciseList.find(e => e.learnId === learn.id && e.studentEmail === user.user?.email);
    // const sheetLink = found?.sheetLink;
    // if (!sheetLink) {
    //   console.log('no sheet link')
    //   return
    // }

    // const fullUrl = goolgeSheetAppUrl + sheetLink
    // console.log('sheet Link = ', fullUrl)

    // const supported = await Linking.canOpenURL(fullUrl)
    // if (supported) {
    //   console.log('opening google sheet')
    //   await Linking.openURL(fullUrl)
    // } else {
    //   console.log('can not open google sheet')
    // }
  }

  useEffect(() => {
    if (justCreateQuestion) {
      dispatch(enableBlur());
      setQModalVisible(true);
    }
  }, [justCreateQuestion])

  const closeQuestionModal = () => {
    dispatch(updateWealthBalance({ wealthBalance: wealthBalance + 5 }));
    setQModalVisible(false);
    dispatch(setJustCreateQuestion(false));
    dispatch(disableBlur());
  }

  // test function
  const clearData = () => {
    dispatch(updateWagerInLearnStatusById({ id: learnStatus.id, wagered: 0 }));
    dispatch(updateAllWagered({ allWagered: 0 }));
    dispatch(updateLearnStatusById({ id: learnStatus.id, passedDepositsCount: 0 }));
    dispatch(updateIsWageredInLearnStatusById({ id: learnStatus.id, isWagered: false }));
  }

  const isBlur = useAppSelector(o => o.blur.isBlur)

  return (
    <BottomSheetModalProvider>
      <View style={{flex: 1}}>
        {isBlur && <View style={styles.blurView}/>}
        
        <AppLayout scrollEnabled={false}>

          <View style={{ flex: 1, marginBottom: 8 }}>
            <HeaderWithWealthBalance label="Go To Dashboard" onPressLabel={onPressGoToDashboard} />

            {/* test component */}
            {/* <Button onPress={() => clearData()}>
                <Text type="Body/Small" variant="white">Clear {wagered} </Text>
              </Button> */}

            <ImageCard backgroundImage={getCloudFrontImgeUrl(learn?.bgImageUri)}>

              {isWagered && wagered > 0 && !received &&
                <View style={{ flex: 1 }}>
                  <Button actionStyle={styles.wagerCheckButton} labelStyle={styles.wagerCheckContent}>
                    <CheckedCircle></CheckedCircle>
                    <Text type="Body/Small" variant="white" style={{ marginLeft: scale(5) }}>Wagered</Text>
                  </Button>
                </View>
              }

              <RewardLabel amount={rewardAmount + wagered} received={received} />
              <Text type="Headline/Medium" variant="white" style={styles.title}>{learn?.title}</Text>
              <DepositsProgressBar
                passedDepositsCount={passedDepositsCount}
                depositsCount={depositsCount}
              />
            </ImageCard>

            <View style={styles.tabGroup}>
              {[TABS.DEPOSITS, TABS.QUESTIONS, TABS.ABOUT].map((label, index) => (
                <ButtonTab
                  {...{
                    key: index,
                    label: label,
                    activeTab,
                    setActiveTab,
                  }}
                />
              ))}
            </View>

            <WagerBottomModal
              title="Up the Ante!"
              description="How many $WEALTH points would you like to wager on this module?"
              showErrorMsg={showErrorMsg}
              errorMsg="Wager value is too much"
              cancelLabel="Cancel"
              confirmLabel="Confirm Wager"
              showModal={showModal}
              setShowModal={setShowModal}
              handleConfirm={handleWager}
            />

            {/* <BottomModal
              title="All done!?"
              description="If you have successfully completed your exercise please confrim."
              showErrorMsg={showSubmitErrMsg}
              errorMsg="Already submitted"
              cancelLabel="Cancel"
              confirmLabel="Confirm"
              showModal={showSubmitModal}
              setShowModal={setShowSubmitModal}
              handleConfirm={handleSubmitExercise}
            /> */}

            {activeTab !== TABS.ABOUT && (
              <ScrollView style={{ flex: 1 }}>
                {activeTab === TABS.DEPOSITS && isWagered === false && passedDepositsCount === 0 &&
                  <Button variant="red" labelStyle={{ paddingVertical: scale(3) }}
                    actionStyle={{ height: scale(34), marginVertical: scale(0), borderRadius: 10 }}
                    onPress={() => {
                      setShowModal(true);
                      setShowErrorMsg(false);
                    }}>
                    <Text type="Body/Large">Wager $WEALTH</Text>
                  </Button>}
                {activeTab === TABS.DEPOSITS &&
                  <>
                    {deposits.map((deposit, index) => (
                      <DepositItem
                        key={`depositItem-${index}`}
                        depositIndex={index}
                        locked={index > passedDepositsCount}
                        data={deposit}
                        onPress={onPressDepositItem}
                        myKey={myKey}
                      />
                    ))}
                    {/* {learn?.problem && <TouchableOpacity style={styles.exItemContainer} disabled={!received} onPress={pressExercise}>
                      <View style={styles.exItemicon}>
                        {!received ? <LockedIcon /> : <ExerciseIcon />}
                      </View>
                      <Text type="Body/Large" variant="white" style={styles.exItemdepositTitle}>Complete Exercise</Text>
                    </TouchableOpacity>} */}
                  </>
                }

                {activeTab === TABS.QUESTIONS &&
                  // <Text type="Headline/Medium" style={{ textAlign: "center", marginTop: 50 }}>Coming Soon</Text>
                  qaItems.map((qaItem, index) => {
                    return (
                      <QAItem
                        key={`qaItem-${index}`}
                        qaItemIndex={index}
                        question={qaItem.questionItem.question}
                        answerCount={qaItem.answerItems.length}
                        onPress={onPressQAItem}
                      />
                    );
                  })
                }
              </ScrollView>
            )}
            {activeTab === TABS.ABOUT && <AboutTab />}
          </View>

          {/* submit success modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image source={confirmIcon} resizeMode={'contain'} />
                <Text type="Headline/Large" variant='white' style={styles.modalLargeText}>
                  Thank you!
                </Text>
                <Text type="Body/Medium" variant='white' style={styles.modalMediumText}>
                  Exercise submitted! Review may take up to 12 hours. Keep up the great work!
                </Text>
                <Button variant="black" onPress={() => { setModalVisible(!modalVisible); dispatch(disableBlur()) }} actionStyle={styles.btnStyle}>
                  <Text type="Body/Large" variant="white">Close</Text>
                </Button>
              </View>
            </View>
          </Modal>

          {/* show after creat question */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={qModalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image source={rewardIcon} resizeMode={'contain'} />
                <Text type="Headline/Large" variant='white' style={styles.modalLargeText}>
                  Great Question!
                </Text>
                <Text type="Body/Medium" variant='white' style={styles.modalMediumText}>
                  Thank you for your question, collect 5 $WEALTH. Keep up the good work!
                </Text>
                <Button variant="black" onPress={closeQuestionModal} actionStyle={styles.btnStyle}>
                  <Text type="Body/Large" variant="white">Collect</Text>
                </Button>
              </View>
            </View>
          </Modal>

          {activeTab === TABS.DEPOSITS &&
            <>
              {
                !received &&
                <Button variant="red" onPress={() => onPressDepositItem(passedDepositsCount)}>
                  <Text type="Body/Large">Continue</Text>
                </Button> 
                // :
                // <>
                //   {
                //     learn?.problem ? 
                //     <Button variant="red" onPress={onSubmitExercise}>
                //       <Text type="Body/Large">Submit</Text>
                //     </Button> : <></>
                //   }
                // </>
              }
            </>
          }
          {activeTab === TABS.QUESTIONS &&
            <Button variant="red" onPress={onPressAskQuestion}>
              <Text type="Body/Large">Ask a Question</Text>
            </Button>
          }

        </AppLayout>

        {justSubmitQuestion && <Loading />}
      </View>
    </BottomSheetModalProvider>
  );
};

export default DepositsScreen;
