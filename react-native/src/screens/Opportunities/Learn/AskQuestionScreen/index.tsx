import {
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Keyboard, TextInput, View } from "react-native";
import BottomModal from "src/components/common/BottomModal";
import Button from "src/components/common/Button";
import { Text } from "src/components/common/Texts";
import AppLayout from "src/components/layout/AppLayout";
import AppColors from "src/config/colors";
import { useAppDispatch } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { setJustSubmitQuestion, submitQuestion } from "src/store/slices/opportunities/learn.slice";
import { IAskQuestionScreenProps } from "src/types/opportunitiesRouterTypes";
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import styles from "./styles";

interface ISubmitQuestionRequest {
  question: string;
}

const AskQuestionScreen: React.FC<IAskQuestionScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    formState: { isValid },
  } = useForm<ISubmitQuestionRequest>({
    defaultValues: {
      question: '',
    },
    mode: 'onChange',
  });

  const onPressGoBack = () => {
    dispatch(updateActiveRouteName("DepositsScreen"));
    navigation.goBack();
  };

  const onPressConfirm = (data: ISubmitQuestionRequest) => {
    dispatch(submitQuestion({ question: data.question }));
    dispatch(setJustSubmitQuestion(true))
    onPressGoBack();
  };

  return (
    <BottomSheetModalProvider>
      <AppLayout scrollEnabled={false}>
        <View style={{ flex: 1 }}>
          <HeaderWithWealthBalance label="Go Back" onPressLabel={onPressGoBack} />
          <Text type="Headline/Medium" variant="white" style={styles.title}>Ask a Question</Text>
          <View style={styles.attention}>
            <Text type="Body/Large" variant="white">{`\u2022 Keep your question short and concise`}</Text>
            <Text type="Body/Large" variant="white">{`\u2022 Double check for spelling errors`}</Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Please fill out this field.' },
              minLength: {
                value: 10,
                message:
                  'Question should contain at least 10 characters.',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                multiline={true}
                numberOfLines={3}
                value={value}
                onChangeText={onChange}
                placeholder="Start your question with “What”, “How”, “Why”, etc."
                placeholderTextColor={AppColors.coreBlack60}
                style={styles.question}
                allowFontScaling={false}
              />

            )}
            name="question"
          />
          {errors.question && <Text type="Body/Medium" variant="red">{errors.question.message}</Text>}
          <BottomModal
            title="Confirm Question?"
            description="Make sure your question has not been asked already. Confirm your submission below."
            confirmLabel="Submit"
            cancelLabel="Cancel"
            handleConfirm={handleSubmit(onPressConfirm)}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </View>

        <Button
          variant={isValid ? "red" : "darkgray"}
          disabled={!isValid}
          onPress={() => { Keyboard.dismiss(); setShowModal(true); }}
        >
          <Text type="Body/Large">Submit</Text>
        </Button>
      </AppLayout>
    </BottomSheetModalProvider>
  );
};

export default AskQuestionScreen;