import React from "react";
import { Image, View } from "react-native";

import { Text } from "src/components/common/Texts";
import WealthIcon from 'src/assets/icons/wealth.png';
import styles from "./styles";

interface IRewardLabelProps {
  amount: number;
  received: boolean;
}

const RewardLabel: React.FC<IRewardLabelProps> = (props: IRewardLabelProps) => {
  const { amount, received } = props;

  return (
    <View style={{ flexDirection: "row",  alignItems: "center", alignSelf: received ? "center" : "flex-end" }}>
      {received ? (
        <Text type="Body/Large" variant="white">You've received {amount} $WEALTH here.</Text>
      ) : (
        <>
          <Text type="Body/Large" variant="white">Reward: </Text>
          <View style={styles.wealthBalance}>
            <Image source={WealthIcon} style={styles.wealthIcon} />
            <Text type="Body/Large" variant='white'>{amount}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default RewardLabel;