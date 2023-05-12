import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useEffect, useRef } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Button from "../Button";
import { Text } from "../Texts";
import CloseIcon from 'src/assets/icons/close-gray.png';
import styles from "./styles";

interface IBottomModalProps {
  title: string;
  description: string;
  showErrorMsg?: boolean | undefined;
  errorMsg?: string | undefined;
  confirmLabel: string;
  cancelLabel: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleConfirm: () => boolean | any;
}

const BottomModal: React.FC<IBottomModalProps> = ({
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

  const onPressConfirm = () => {
    if (!!handleConfirm()) {
      handleDismissModal();
    }
  };

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  useEffect(() => {
    if (showModal) {
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
      index={0}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeIcon} onPress={handleDismissModal}>
          <Image source={CloseIcon} />
        </TouchableOpacity>
        <View style={styles.modalBody}>
          <Text type="Headline/Medium" variant='white' style={styles.modalTitle}>{title}</Text>
          <Text type="Body/Medium" variant='white' style={styles.modalDescription}>{description}</Text>
          <Text type="Body/Medium" variant='red' style={{ fontSize: 8, display: showErrorMsg ? 'flex' : 'none' }}>{errorMsg}</Text>
          <Button variant="red" onPress={onPressConfirm}>
            <Text type="Body/Medium" variant='white'>{confirmLabel}</Text>
          </Button>
          <Button variant="transparent" onPress={handleDismissModal}>
            <Text type="Body/Medium" variant='white'>{cancelLabel}</Text>
          </Button>
        </View>
      </View>
    </BottomSheetModal >
  );
};

export default BottomModal;