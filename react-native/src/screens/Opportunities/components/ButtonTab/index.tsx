import React from "react";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Text } from "src/components/common/Texts";
import AppColors from "src/config/colors";
import { Metrics } from "src/config/dimentions"
import styles from "./styles";

interface IButtonTabProps {
  label: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonTab = (props: IButtonTabProps) => {
  const { label, activeTab, setActiveTab } = props;

  const getBorderColorStyle = (selectedTab: string) => {
    return {
      borderColor: AppColors.transparent,

      borderBottomColor: 
        activeTab === selectedTab
        ? AppColors.accentRed100
        : AppColors.transparent,

      borderBottomWidth: 
        activeTab === selectedTab
        ? Metrics.pixels.size2
        : Metrics.pixels.size0
     
    };
  };

  return (
    <TouchableWithoutFeedback
      style={[styles.tab, getBorderColorStyle(label)]}
      onPress={() => setActiveTab(label)}>
      <Text type="Body/Large"> {label} </Text>
    </TouchableWithoutFeedback>
  );
};

export default ButtonTab;