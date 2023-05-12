import React, { useCallback, useEffect, useState, useRef } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { View, Image, ScrollView, Keyboard, TouchableOpacity } from "react-native";
import { ILearnbotScreenProps } from "src/types/opportunitiesRouterTypes";
import { Text } from "src/components/common/Texts";
import AppLayout from "src/components/layout/AppLayout";
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import { useAppDispatch, useAppSelector } from "src/store";
import TextInput from 'src/components/common/TextInput';
import Loading from 'src/components/common/Loading';
import Button from "src/components/common/Button";
import styles from "./styles";
import axios from 'axios';

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
  },
});
  
const LearnbotScreen: React.FC<ILearnbotScreenProps> = ({ navigation, route }: ILearnbotScreenProps) => {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [quiz, setQuiz] = useState("")
    const [loading, setLoading] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [textInputFocus, setTextInputFocus] = useState(0)

    const onPressGoBack = () => {
        console.log('press go back in learn bot screen ')
        navigation.goBack()
    }

    const createChatCompletion = async (messages, options) => {
        try {
        const response = await openai.post("/chat/completions", {
            model: options?.model || "gpt-3.5-turbo",
            messages,
            ...options,
        });
    
        return response.data.choices;
        } catch (error) {
        console.error("Error creating chat completion:", error);
        }
    }

    const onSubmit = async () => {
        console.log('submit question = ', question)
        setLoading(true)    
        let aiAnswer: string = ''
        try {
            const messages = [
                { role: "user", content: question + ' explain step by step.' },
            ];
        
            const options = {
                temperature: 0.8,
                max_tokens: 500,
            };
        
            const choices = await createChatCompletion(messages, options);
            aiAnswer =  choices[0].message.content

            setLoading(false)
            //show q&a
            setQuiz(question)
            setAnswer(aiAnswer.trim())
            setShowAnswer(true)

            // Hide that keyboard!
            Keyboard.dismiss()
            setTextInputFocus(0)
            setQuestion("")
        } catch(err) {
            console.log('open ai error: ', err)
        }
    }

    const onChange = (v: string) => {
        setQuestion(v)
    }

    const swipeRight = () => {
        console.log('swipe right in learnbot')
        navigation.goBack()
    }

    const onPressTextContainer = () => {
        setTextInputFocus(textInputFocus+1)
    }

    return(
        <View style={{flex: 1}}>
            <AppLayout>
                <HeaderWithWealthBalance label="Go Back" onPressLabel={onPressGoBack} />
                <Text type="Headline/Large" variant="white">LEARN Tutor</Text>
                <ScrollView style={{flex: 1}}>
                    <GestureRecognizer
                        onSwipeRight={swipeRight}
                        style={{ flex: 1 }}
                    >
                    {
                        showAnswer && <>
                            <Text type="Body/Medium" variant="white" style={styles.questionText}>{quiz}</Text>
                            <Text type="Body/Medium" variant="white" style={styles.answerText}>{answer}</Text>
                        </>
                    }
                    </GestureRecognizer>
                </ScrollView >
                <TouchableOpacity onPress={onPressTextContainer}>
                    <TextInput 
                        label="Start your question with “What”, “How”, “Why”, etc."
                        onChangeText={onChange}
                        makeFocus={textInputFocus}
                        value={question}
                    />
                </TouchableOpacity>
                <Button variant="red" onPress={onSubmit} actionStyle={styles.submitBtn}>
                    <Text type="Body/Large">Submit</Text>
                </Button>
            </AppLayout>
            {loading && <Loading />}
        </View>
    )
}

export default LearnbotScreen;

