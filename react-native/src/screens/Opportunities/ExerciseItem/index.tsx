import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Button from 'src/components/common/Button';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';
import { Text } from 'src/components/common/Texts';
import NavigationService from 'src/navigation/NavigationService';
import { useAppDispatch, useAppSelector } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import { createLearnStatus, setActiveDepositIndex, setActiveLearnItemId } from "src/store/slices/opportunities/learn.slice";
import { Learn } from 'src/types/API';
import { getCloudFrontImgeUrl } from 'src/utils/functions';
import commonStyles from '../styles';
import styles from './styles';

const ExerciseItem: React.FC<{id: string, pressExercise: (id: string) => void}> = ({id, pressExercise})  => {
    const { learnExerciseItems } = useAppSelector(o => o.learn);
    const { exerciseList } = useAppSelector(o => o.exercise);

    const itemData = learnExerciseItems.find(e => e.id === id);
    const submitted = exerciseList.find(e => e.exerciseId === id);

    const onPressExerciseItem = () => {
        pressExercise(itemData?.id || "")
    }

    const renderMetaInfo = () => (
        <View style={commonStyles.flexRow}>
            <Text type="Body/Medium" variant='white'>{itemData?.level}</Text>
            <Oval />
            <Text type="Body/Medium" variant='white'>{`${itemData?.reward} $WEALTH`}</Text>
            <Oval />
            <Text type="Body/Medium" variant='white'>{`Exercise`}</Text>
        </View>
    );
    return (
        <ImageCard backgroundImage={getCloudFrontImgeUrl(itemData?.bgImageUri)} disabled={false} onPress={onPressExerciseItem}>
            {submitted && <Text type="Body/Small" variant='white' style={styles.completeText}>Submitted</Text>}
            <Text type="Body/Medium" variant='white'>
                Presented by <Text type="Body/Medium" variant='white' style={commonStyles.bold}>{itemData?.sponsor}</Text>
            </Text>
            <Text type="Headline/Small" variant='white' style={styles.title}>{itemData?.title}</Text>
            {renderMetaInfo()}
        </ImageCard>
    )
}

export default ExerciseItem