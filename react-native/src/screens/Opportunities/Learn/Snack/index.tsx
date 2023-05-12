import React, { useCallback, useEffect, useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { View, Image, Modal, ScrollView, TouchableOpacity } from "react-native";
import { ISnackScreenProps } from "src/types/opportunitiesRouterTypes";
import { Text } from "src/components/common/Texts";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { submitExercise } from "src/store/slices/exerciseList.slice";
import AppLayout from "src/components/layout/AppLayout";
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import BottomModal from "src/components/common/BottomModal";
import { useAppDispatch, useAppSelector } from "src/store";
import TextInput from 'src/components/common/TextInput';
import Button from "src/components/common/Button";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import swipeIcon from "src/assets/icons/swipe_finger.png";
import confirmIcon from 'src/assets/icons/reward_confirm_sm.png';
import styles from "./styles";

const SnackScreen: React.FC<ISnackScreenProps> = ({ navigation, route }: ISnackScreenProps) => {
    const dispatch = useAppDispatch();
    const { learnExerciseItems } = useAppSelector(o => o.learn);
    const user = useAppSelector(o => o.user);
    const exercises = useAppSelector(o => o.exercise)
    const currentExercise = learnExerciseItems.find(e => e.id === route.params.learnId)

    const richText = React.useRef<RichEditor | null>(null);

    const [value, setValue] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [showSubmitErrMsg, setShowSubmitErrMsg] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);

    const [isBlur, setIsBlur] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onPressGoBack = () => {
        console.log('press go back in snack screen ')
        navigation.goBack()
    }

    const onChange = (v: string) => {
        setValue(v)
    }

    const onSubmit = () => {     
        console.log('click submit')
        richText.current?.dismissKeyboard()
        setShowSubmitErrMsg(false)
        setShowSubmitModal(true)
    }

    const handleSubmitExercise = () => {
        console.log('handle submit exercise')
        if (!value) {
            setErrMsg("Please input exercise")
            setShowSubmitErrMsg(true)
            return
        }
        const found = exercises.exerciseList.find(e => e.studentEmail === user.user?.email && e.exerciseId === currentExercise?.id)
        if (found) {
            setErrMsg("Already submitted")
            setShowSubmitErrMsg(true)
            return
        }
        console.log('submit exercise = ', user.user?.email, value, currentExercise?.id)
        dispatch(submitExercise({
            studentEmail: user.user?.email || "",
            answer: value, 
            exerciseId: currentExercise?.id || ""
        }))
        setIsBlur(true)
        setModalVisible(true)
    }

    const onDismiss = () => {
        richText.current?.dismissKeyboard()
    }

    const onModalClose = () => {
        console.log("on modal close")
        setIsBlur(false)
        navigation.goBack()
    }

    const swipeLeft = () => {
        console.log('swipe left, to learn bot')
        dispatch(updateActiveRouteName("LearnbotScreen"));
        navigation.navigate("LearnbotScreen");
    }

    return(
        <View style={{flex: 1}}>
            {isBlur && <View style={styles.blurView}/>}
            <BottomSheetModalProvider>
                <AppLayout>
                    <HeaderWithWealthBalance label="Go Back" onPressLabel={onPressGoBack} />
                    
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
                            <Button variant="black" onPress={onModalClose} actionStyle={styles.btnStyle}>
                                <Text type="Body/Large" variant="white">Close</Text>
                            </Button>
                        </View>
                        </View>
                    </Modal>

                    <BottomModal
                        title="All done!?"
                        description="If you have successfully completed your exercise please confrim."
                        showErrorMsg={showSubmitErrMsg}
                        errorMsg={errMsg}
                        cancelLabel="Cancel"
                        confirmLabel="Confirm"
                        showModal={showSubmitModal}
                        setShowModal={setShowSubmitModal}
                        handleConfirm={handleSubmitExercise}
                    />
                    <Text type="Headline/Large" variant="white">Snacks</Text>
                    <ScrollView style={{flex: 1}}>
                        <GestureRecognizer
                            onSwipeLeft={swipeLeft}
                            style={{ flex: 1 }}
                        >
                            <TouchableOpacity onPress={onDismiss}>
                                <Text type="Body/Medium" variant="white" style={styles.problemView}>{currentExercise?.problem}</Text>
                            </TouchableOpacity>
                            <RichEditor
                                placeholder='Start your exercise by typing in the box below.'
                                ref={richText}
                                onChange={onChange}
                                editorStyle={styles.editorStyle}
                                style={styles.richEditorStyle}
                            />
                            <TouchableOpacity style={styles.swipeContainer} onPress={onDismiss}>
                                <Image source={swipeIcon} resizeMode={'contain'} style={styles.swipeIcon}/>
                                <Text type="Body/Medium" variant="white">Swipe to get help from the LEARN Bot</Text>
                            </TouchableOpacity>
                        </GestureRecognizer>
                    </ScrollView>
                    <RichToolbar
                        editor={richText}
                        actions={[actions.undo, actions.redo, actions.setBold, actions.setItalic, actions.setUnderline, actions.insertBulletsList, actions.insertOrderedList]}
                        style={{backgroundColor: "black"}}
                    />
                    <Button variant="red" onPress={onSubmit}>
                        <Text type="Body/Large">Submit</Text>
                    </Button>
                </AppLayout>       
            </BottomSheetModalProvider>
        </View>
    )
}

export default SnackScreen