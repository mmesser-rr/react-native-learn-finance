import React from "react"
import { TouchableOpacity, View } from "react-native"

import PinkBox from "src/components/common/PinkBox"
import NavigationService from "src/navigation/NavigationService";
import CloseIcon from 'src/assets/icons/close-white.svg';

import styles from "./styles"

interface SlideProps {
  content: React.ReactNode,
  actions: React.ReactNode
}

const Slide: React.FC<SlideProps> = ({content, actions}: SlideProps) => {
  return (
    <PinkBox>
      <View style={styles.slideContainer}>
        <View>
          <TouchableOpacity style={styles.scrollCloseIcon} onPress={() => NavigationService.navigate("DepositsScreen")}>
            <CloseIcon />
          </TouchableOpacity>
          {content}
        </View>

        <View>
          {actions}
        </View>
      </View>
    </PinkBox>
  )
}

export default Slide