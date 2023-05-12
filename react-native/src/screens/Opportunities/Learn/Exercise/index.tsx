import { useFocusEffect } from '@react-navigation/native';
import React, { useMemo, useRef, useState } from 'react';
import { View, Modal, Image, SafeAreaView } from 'react-native';
import Button from "src/components/common/Button";
import Swiper from 'react-native-swiper';
import Slide from 'src/components/common/Slide';
import { Text } from 'src/components/common/Texts';
import AnswerButtonGroup from './AnswerButtonGroup';
import { Dot, ActiveDot } from "./components/Dot";
import { Metrics } from 'src/config/dimentions';
import * as navigationActions from 'src/store/actions/navigationActions';
import { useAppDispatch, useAppSelector } from "src/store/index";
import { updateLearnStatusById, updateShowCongratulationsMessage, updateWagerInLearnStatusById } from "src/store/slices/opportunities/learn.slice";
import { updateWealthBalance, updateAllWagered } from "src/store/slices/user.slice";
import {
  increaseCompletedModulesCount as INCREASE_COMPLETED_MODULES_COUNT,
  increaseTotalTrueOrFalseChoiceCount as INCREASE_TOTAL_TRUE_OR_FALSE_CHOICE_COUNT
} from 'src/graphql/mutations';
import { Learn, Quiz } from 'src/types/API';
import { IExerciseProps } from 'src/types/opportunitiesRouterTypes';
import { graphqlApi, log } from 'src/utils/functions';
import styles from './styles';
import faceIcon from 'src/assets/icons/sad-face.png';

const Exercise: React.FC<IExerciseProps> = ({
  route,
  navigation
}) => {
  const dispatch = useAppDispatch();
  const activity = useAppSelector(o => o.user.user?.activity);
  const allWagered = activity?.allWagered || 0;

  const { activeLearnItemId, activeDepositIndex, learnByLearnItemId, learnStatusByLearnItemId } = useAppSelector(o => o.learn);
  const wealthBalance = useAppSelector(o => o.user.user?.activity?.wealthBalance || 0);
  const { qrcodeList } = useAppSelector(o => o.qrcode);

  const [answerButtonsStatus, setAnswerButtonsStatus] = useState<Object>({});
  const swiperRef = useRef<Swiper>(null);

  const questions: Quiz[] = route.params.questions;
  const { id: learnStatusId, passedDepositsCount } = learnStatusByLearnItemId[activeLearnItemId] || {};
  const learnData: Learn = learnByLearnItemId[activeLearnItemId];
  const rewards = learnData?.reward || 0;
  const learnStatus = learnStatusByLearnItemId[activeLearnItemId];

  const currentLearnId = learnStatus.learnItemId
  const qrcodeData = qrcodeList.find(e => e.learnId === currentLearnId)

  const [modalVisible, setModalVisible] = useState(false);

  const QuestionText = ({ questionText }: { questionText: string; }) => (
    <Text type="Headline/Medium" variant='white' style={styles.questionText}> {questionText} </Text>
  );

  const onFinish = async () => {
    try {
      if (activeDepositIndex === passedDepositsCount) {
        dispatch(updateLearnStatusById({ id: learnStatusId, passedDepositsCount: passedDepositsCount + 1 }));
        if (activeDepositIndex === learnData.deposits.length - 1) {
          dispatch(updateShowCongratulationsMessage(true))

          const wagered = learnStatus.wagered || 0;
          if (learnStatus.isWagered && wagered > 0) {
            dispatch(updateWealthBalance({ wealthBalance: wealthBalance + wagered + rewards }));
          } else {
            dispatch(updateWealthBalance({ wealthBalance: wealthBalance + rewards }));
          }

          // appUsageLog
          await graphqlApi(INCREASE_COMPLETED_MODULES_COUNT);
        }
      }

      if (qrcodeData?.depositNum === activeDepositIndex) {
        dispatch(navigationActions.updateActiveRouteName("QrCodeScreen"));
        navigation.navigate('QrCodeScreen', { data: qrcodeData });
      } else {
        dispatch(navigationActions.updateActiveRouteName("ExerciseResultScreen"));
        navigation.navigate('ExerciseResultScreen');
      }
    }
    catch (e) {
      log("error", `Exercise - onFinish - error: ${e}`);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log('exercise focus')
      
      let newSt = {};
      const nQuestions = questions?.length || 0;
      for (let i = 0; i < nQuestions; ++i) {
        let newSubSt = {};
        const nAnswers = questions[i].answers.length;
        for (let j = 0; j < nAnswers; ++j) {
          newSubSt[j] = -1;
        }
        newSt[i] = newSubSt;
      }
      setAnswerButtonsStatus(newSt);
    }, [])
  );

  return (
    <View style={styles.viewWrapper}>
      {modalVisible && <View style={styles.blurView}></View>}

      <Swiper
        ref={swiperRef}
        dot={<Dot />}
        activeDot={<ActiveDot />}
        loop={false}
        width={Metrics.screenWidth}
        scrollEnabled={false}
      >
        {[...questions.map((quiz, quizIndex) => {
          const setSelectedAnswerIndex = (selectedAnswerIndex: number) => {
            const newSt = Object.assign({}, answerButtonsStatus);
            quiz.answers.map((answer, answerIndex) => {
              newSt[quizIndex][answerIndex] = answerIndex === selectedAnswerIndex ? Number(quiz.correctAnswer === answer) : -1;
            });
            setAnswerButtonsStatus(newSt);
            if (Object.values(newSt[quizIndex]).includes(1)) {
              // appUsageLog
              graphqlApi(INCREASE_TOTAL_TRUE_OR_FALSE_CHOICE_COUNT, { increaseTrueChoice: true });

              setTimeout(() => {
                quizIndex === questions.length - 1
                  ? onFinish()
                  : swiperRef?.current?.scrollBy(quizIndex + 1);
              }, 1000);
            }
            else {
              // appUsageLog
              graphqlApi(INCREASE_TOTAL_TRUE_OR_FALSE_CHOICE_COUNT, { increaseTrueChoice: false });

              //clear wager
              const wagered = learnStatus.wagered || 0;
              if (wagered > 0) {
                dispatch(updateWealthBalance({ wealthBalance: wealthBalance - wagered }));
                dispatch(updateAllWagered({ allWagered: (allWagered - wagered) }));
                dispatch(updateWagerInLearnStatusById({ id: learnStatus.id, wagered: 0 }));
                setModalVisible(true);
              }
            }
          };

          return (
            <View key={quizIndex} style={styles.slideWrapper}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Image source={faceIcon} resizeMode={'contain'} />
                    <Text type="Headline/Large" variant='white' >
                      Oh No!
                    </Text>
                    <Text type="Body/Medium" variant='white'>
                      Unfortunately, you have lost your wager this time, but you can still earn the original reward. Keep going!
                    </Text>
                    <Button variant="black" onPress={() => setModalVisible(!modalVisible)} actionStyle={styles.btnStyle}>
                      <Text type="Body/Large" variant="white">Close</Text>
                    </Button>
                  </View>
                </View>
              </Modal>

              <Slide
                content={<QuestionText questionText={quiz.questionText} />}
                actions={
                  <AnswerButtonGroup
                    answers={quiz.answers}
                    correctAnswer={quiz.correctAnswer}
                    answerButtonsStatus={answerButtonsStatus[quizIndex]}
                    setSelectedAnswerIndex={setSelectedAnswerIndex}
                  />}
              />
            </View>
          );
        }
        )]}
      </Swiper>
    </View>
  );
};

export default Exercise;