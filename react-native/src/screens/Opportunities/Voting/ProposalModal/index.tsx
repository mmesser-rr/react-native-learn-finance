import React, { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Modal, FlatList, SafeAreaView, LogBox } from 'react-native';
import { Text } from 'src/components/common/Texts';
import CloseIcon from "src/assets/icons/modal-close-icon.svg";
import styles from "./styles";

interface ProposalModalProps {
    visible: boolean,
    closeModal: () => void
}

const ProposalModal: React.FC<ProposalModalProps> = ({visible, closeModal}) => {

    const onPressCloseModal = () => {
        console.log('on press close modal')
        closeModal()
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.closeIcon} onPress={onPressCloseModal}>
                        <CloseIcon />
                    </TouchableOpacity>
                    <View style={styles.modalTitle}>
                        <Text type="Headline/Medium" variant="white">Innovation</Text>
                        <Text type="Headline/Medium" variant="red">Example</Text>
                    </View>

                    <View style={styles.modalLearnText}>
                        <Text type="Headline/small" variant="white">LEARN should</Text>
                        <Text type="Body/Large" variant="white">{"Create a virtual networking event based for “LEARNPRENEURS” (give me credit for that name lol"}</Text>
                    </View>
                    
                    <View style={styles.modalGoalText}>
                        <Text type="Headline/small" variant="white">Desired goal</Text>
                        <Text type="Body/Large" variant="white">{"In order to build connections, learn from other businesses, and possibly gain clientele."}</Text>
                    </View>
                </View>
            </View>
        </Modal >
    )
}

export default ProposalModal;