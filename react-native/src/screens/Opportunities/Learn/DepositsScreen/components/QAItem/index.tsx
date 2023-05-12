import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text } from "src/components/common/Texts";
import styles from "./styles";

interface IQAItemProps {
  qaItemIndex: number;
  question: string;
  answerCount: number;
  onPress: (qaItemIndex: number) => void;
}

const QAItem: React.FC<IQAItemProps> = (props: IQAItemProps) => {
  const { qaItemIndex, question, answerCount, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(qaItemIndex)}>
      <Text type="Body/Large" variant="white" style={styles.question}>{question}</Text>
      <Text type="Body/Large" style={styles.answerSummary} variant="darkgray">{answerCount === 0 ? "No Answers" : `${answerCount} Answer${answerCount > 1 ? "s" : ""}`}</Text>
    </TouchableOpacity>
  );
}

export default QAItem;