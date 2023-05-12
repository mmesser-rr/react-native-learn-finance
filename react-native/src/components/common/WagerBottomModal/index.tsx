import { BottomSheetBackdrop, BottomSheetModal, BottomSheetTextInput } from "@gorhom/bottom-sheet";
import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { Image, SafeAreaView, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Button from "../Button";
import { Text } from "../Texts";
import CloseIcon from 'src/assets/icons/close-gray.png';
import styles from "./styles";    

import WealthIcon from 'src/assets/icons/wealth.png';

interface IBottomModalProps {
  title: string;
  description: string;
  showErrorMsg?: boolean | undefined;
  errorMsg?: string | undefined;
  confirmLabel: string;
  cancelLabel: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleConfirm: (wagerValue: number) => boolean | any;
}

const WagerBottomModal: React.FC<IBottomModalProps> = ({
  title,
  description,
  showErrorMsg,
  confirmLabel,
  cancelLabel,
  showModal,
  errorMsg,
  setShowModal,
  handleConfirm,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleDismissModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    setShowModal(false);
  }, []);

  const [wagerValue, setWagerValue] = useState('');

  const onPressConfirm = () => {
    if (!!handleConfirm(Number(wagerValue))) {
      handleDismissModal();
    }
  };

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        // disappearsOnIndex={-1}
        // appearsOnIndex={0}
      />
    ),
    []
  );

  useEffect(() => {
    if (showModal) {
      setWagerValue('');
      bottomSheetModalRef.current?.present();
    }
  }, [showModal]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={[300]}
      backgroundStyle={styles.modalBackground}
      handleStyle={styles.handleStyle}
      backdropComponent={renderBackdrop}
      onChange={console.log}
      keyboardBlurBehavior="restore"
      index={0}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeIcon} onPress={handleDismissModal}>
          <Image source={CloseIcon} />
        </TouchableOpacity>
        <View style={styles.modalBody}>
            
          <Text type="Headline/Medium" variant='white' style={styles.modalTitle}>{title}</Text>
          <Text type="Body/Large" variant='white' style={styles.modalDescription}>{description}</Text>
          <Text type="Body/Medium" variant='red' style={{ fontSize: 14, display: showErrorMsg ? 'flex' : 'none' }}>{errorMsg}</Text>
          <View style={styles.searchSection}> 
                <Image source={WealthIcon} style={styles.wealthIcon} />   
                <BottomSheetTextInput
                    style={styles.input}
                    placeholder="Wager" 
                    keyboardType="numeric"
                    onChangeText={setWagerValue}
                    value={wagerValue}
                    allowFontScaling={false}
                />
           </View>
          <Button variant="red" onPress={onPressConfirm}>
            <Text type="Body/Large" variant='white'>{confirmLabel}</Text>
          </Button>
          
        </View>
      </View>
    </BottomSheetModal >
  );
};

export default WagerBottomModal;
 