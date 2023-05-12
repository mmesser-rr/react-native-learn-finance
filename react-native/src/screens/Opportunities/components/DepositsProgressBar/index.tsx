import React from "react";
import { View } from "react-native";
import { Text } from "src/components/common/Texts";
import AppColors from "src/config/colors";

import styles from "./styles";

interface IDepositsProgressBarProps {
  passedDepositsCount: number;
  depositsCount: number;
}
const DepositsProgressBar: React.FC<IDepositsProgressBarProps> = ({ passedDepositsCount, depositsCount }) => {
  const progress = Math.floor(passedDepositsCount * 100 / depositsCount);
  
  return (
    <View style={{ marginBottom: 8 }}>
      <View style={styles.progressBarContainer}>
        <View style={{
          width: `${progress}%`,
          height: 5,
          backgroundColor: AppColors.accentRed100,
          borderRadius: 3
        }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text type="Body/Medium" style={styles.redText}>{passedDepositsCount}</Text>
          <Text type="Body/Medium" variant='white'>{` of ${depositsCount} Deposits`}</Text>
        </View>
        <View>
          <Text type="Body/Medium" style={styles.redText}>{`${progress}%`}</Text>
        </View>
      </View>
    </View>
  );
}

export default DepositsProgressBar;