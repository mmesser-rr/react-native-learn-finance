import React from "react";
import { Image, View } from "react-native";
import AnimatedNumbers from 'react-native-animated-numbers';
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text } from "src/components/common/Texts";
import textStyles from 'src/components/common/Texts/styles';
import { useAppSelector } from "src/store";
import WealthIcon from 'src/assets/icons/wealth.png';
import styles from "./styles";

interface HeaderWithWealthBalanceEleProps {
  label: string;
  onPressLabel: () => void;
}

const HeaderWithWealthBalance: React.FC<HeaderWithWealthBalanceEleProps> = (props: HeaderWithWealthBalanceEleProps) => {
  const { label, onPressLabel } = props;
  const wealthBalance = useAppSelector(o => o.user.user?.activity?.wealthBalance || 0);
  const allWagered = useAppSelector(o => o.user.user?.activity?.allWagered || 0);

  return (
    <View style={styles.header}>
      <View style={styles.wealthBalance}>
        <Image source={WealthIcon} style={styles.wealthIcon} />
        <AnimatedNumbers animateToNumber={wealthBalance} fontStyle={textStyles.largeBody} />

        {/* show wager for test */}
        {/* <Text type="Body/Large" style={styles.label}>
          {allWagered}
        </Text> */}
       
      </View>
      {!!label && (
        <TouchableOpacity onPress={onPressLabel}>
          <Text type="Body/Large" style={styles.label}>
            {label}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderWithWealthBalance;