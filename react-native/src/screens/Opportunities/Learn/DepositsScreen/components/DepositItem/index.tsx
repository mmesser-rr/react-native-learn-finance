import React from "react";
import { View } from "react-native";

import { Text } from "src/components/common/Texts";
import { Deposit } from "src/types/API";
import LockedIcon from 'src/assets/icons/deposits-screen/locked.svg';
import UnlockedIcon from 'src/assets/icons/deposits-screen/unlocked.svg';
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IDepositItemProps {
  data: Deposit;
  depositIndex: number;
  locked: boolean;
  myKey: number;
  onPress: (depositIndex: number) => void;
}

const DepositItem: React.FC<IDepositItemProps> = ({ data, depositIndex, locked, onPress }) => {
  const formattedDurationLabel = /* data.videoDuration */ "mm:ss";

  return (
    <TouchableOpacity style={styles.container} disabled={locked} onPress={() => onPress(depositIndex)}>
      <View style={styles.icon}>
        {locked ? <LockedIcon /> : <UnlockedIcon />}
      </View>
      <Text type="Body/Large" variant="white" style={styles.depositTitle}>{data.title}</Text>
      <View style={styles.durationLabel}>
        {/* <Text type="Body/Large">{formattedDurationLabel}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default DepositItem;