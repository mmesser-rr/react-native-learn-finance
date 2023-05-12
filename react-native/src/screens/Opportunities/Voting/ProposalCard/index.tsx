import React, { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Modal, FlatList, SafeAreaView, LogBox } from 'react-native';
import { Text } from 'src/components/common/Texts';
import { ProposalTrackType } from "src/types/API";
import styles from './styles';

import communityIcon from "src/assets/icons/community-icon.png";
import learningIcon from "src/assets/icons/learning-icon.png";
import professionalIcon from "src/assets/icons/professional-icon.png";
import featureIcon from "src/assets/icons/feature-icon.png";

interface ProposalCardProps {
    type: ProposalTrackType,
    cardSmall?: boolean
}

const ProposalCard: React.FC<ProposalCardProps> = ({type, cardSmall = false}) => {
    return (
        <View style={cardSmall ? styles.smallCard : styles.card}>
            {type === ProposalTrackType.COMMUNITY && <>
                <Image source={communityIcon} resizeMode={'contain'} />
                <Text type="Body/Medium" variant="white" style={styles.cardText1}>Community</Text>
                {!cardSmall && <>
                        <Text type="Body/Small" variant="white" style={styles.cardText2}>propose to build a better learning community</Text>
                    </>
                }
            </>}
            
            {type === ProposalTrackType.LEARNING && <>
                <Image source={learningIcon} resizeMode={'contain'}  />
                <Text type="Body/Medium" variant="white" style={styles.cardText1}>Learning</Text>
                {!cardSmall && <>
                        <Text type="Body/Small" variant="white" style={styles.cardText2}>tell us about your learning experience</Text>
                    </>
                }
            </>}
            
            {type === ProposalTrackType.PROFESSIONAL && <>
                <Image source={professionalIcon} resizeMode={'contain'}  />
                <Text type="Body/Medium" variant="white" style={styles.cardText1}>Professional</Text>
                {!cardSmall && <>
                        <Text type="Body/Small" variant="white" style={styles.cardText2}>to improve professional development and growth</Text>
                    </>
                }
            </>}
            
            {type === ProposalTrackType.FEATURES && <>
                <Image source={featureIcon} resizeMode={'contain'}  />
                <Text type="Body/Medium" variant="white" style={styles.cardText1}>Feature</Text>
                {!cardSmall && <>
                        <Text type="Body/Small" variant="white" style={styles.cardText2}>create new features, functionalities and tools</Text>
                    </>
                }
            </>}
        </View>
    )
}

export default ProposalCard