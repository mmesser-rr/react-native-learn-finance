import ReadMore from "@fawazahmed/react-native-read-more";
import React from "react";

import styles from "./styles";

interface ICustomReadMoreProps {
  numberOfLines: number;
  content?: string;
}

const CustomReadMore: React.FC<ICustomReadMoreProps> = ({
  numberOfLines,
  content
}) => {
  return (
    <ReadMore
      numberOfLines={numberOfLines}
      style={styles.description}
      seeMoreText="read more"
      seeMoreStyle={styles.seeMore}
      seeLessText="read less"
      seeLessStyle={styles.seeLess}
      ellipsis=".."
    >
      {content}
    </ReadMore>
  )
}

export default CustomReadMore;