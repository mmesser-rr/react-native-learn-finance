import React from "react";
import { View } from "react-native";
import ReadMore from "@fawazahmed/react-native-read-more";
import AppLayout from "src/components/layout/AppLayout";
import { Text } from "src/components/common/Texts";
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import { useAppSelector } from "src/store";
import { IQAScreenProps } from "src/types/opportunitiesRouterTypes";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const QAScreen: React.FC<IQAScreenProps> = ({ navigation }) => {
  const { activeLearnItemId, activeQaItemIndex, learnByLearnItemId } = useAppSelector(o => o.learn)

  const qaItem = learnByLearnItemId[activeLearnItemId].qaItems?.at(activeQaItemIndex)
  const question = qaItem?.questionItem.question || "";

  const answers = (qaItem?.answerItems || [])
  const sorted = answers.slice().sort((a, b) => new Date(a.updatedAt || 0).getTime() - new Date(b.updatedAt || 0).getTime());

  return (
    <AppLayout scrollEnabled={false}>
      <HeaderWithWealthBalance label="Go Back" onPressLabel={() => navigation.goBack()} />
      <Text type="Headline/Medium" variant="white" style={styles.question}>{question}</Text>
      <ScrollView style={{ flex: 1 }}>
        {sorted.map((answerItem, idx) => (
          <View key={`answer-item-${idx}`} style={styles.answerContainer}>
            <Text type="Body/Large" variant="white">{answerItem.authorName || ""}</Text>
            <Text type="Body/Large" variant="darkgray" style={styles.authorTitle}>{answerItem.authorTitle || ""}</Text>
            <ReadMore
              numberOfLines={7}
              style={styles.description}
              seeMoreText="read more"
              seeMoreStyle={styles.seeMore}
              seeLessText="read less"
              seeLessStyle={styles.seeLess}
              ellipsis=".."
            >
              {answerItem.answer}
            </ReadMore>
          </View>
        ))}
      </ScrollView>
    </AppLayout>
  )
}

export default QAScreen;