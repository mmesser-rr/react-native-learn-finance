import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import BottomModal from "src/components/common/BottomModal";
import Button from "src/components/common/Button";
import { Text } from "src/components/common/Texts";
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import AppLayout from "src/components/layout/AppLayout";
import RewardItem from '../index';
import AppStyles from "src/config/styles";
import { useAppDispatch, useAppSelector } from "src/store";
import { updateRewardStatusById } from "src/store/slices/opportunities/reward.slice";
import { updateWealthBalance } from "src/store/slices/user.slice";
import { Reward } from "src/types/API";
import { IRedeemProps } from "src/types/opportunitiesRouterTypes";
import styles from './styles';


const Redeem: React.FC<IRedeemProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const { rewards, activeRewardItemId, rewardStatusByRewardItemId } = useAppSelector(o => o.reward);
  const wealthBalance = useAppSelector(o => o.user.user?.activity?.wealthBalance || 0);

  const [redeemed, setRedeemed] = useState(rewardStatusByRewardItemId[activeRewardItemId] ? rewardStatusByRewardItemId[activeRewardItemId].redeemed : false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const data: Reward = rewards.filter(o => o.id === activeRewardItemId)[0];

  const handleRedeem = () => {
    console.log('handle redeem')
    const newWealthBalance = wealthBalance - data.wealthAmount;
    if (newWealthBalance < 0) {
      setShowErrorMsg(true);
      return false;
    }
    setShowErrorMsg(false);
    dispatch(updateWealthBalance({ wealthBalance: newWealthBalance }));
    dispatch(updateRewardStatusById({ id: rewardStatusByRewardItemId[data.id].id, redeemed: true }));
    setRedeemed(true);
    return true;
  };

  const handleCancelOffer = () => {
    console.log('handle cancel offer')
    const newWealthBalance = wealthBalance + data.wealthAmount;
    if (newWealthBalance < 0) {
      setShowErrorMsg(true);
      return;
    }
    setShowErrorMsg(false);
    dispatch(updateWealthBalance({ wealthBalance: newWealthBalance }));
    dispatch(updateRewardStatusById({ id: rewardStatusByRewardItemId[data.id].id, redeemed: false }));
    setRedeemed(false);
  };

  return (
    <BottomSheetModalProvider>
      <AppLayout scrollEnabled={false}>
        <View>
          <HeaderWithWealthBalance label="Go Back" onPressLabel={() => navigation.goBack()} />
          <Text type="Headline/Medium" variant='white' style={styles.header}>How to Claim</Text>
          <Text type="Paragraph/Medium" variant='white' style={styles.description}>Redeem your offer and you’ll receive an email with your discount code and instructions how to use it at your selected retailer.</Text>
          <RewardItem data={data} />
        </View>

        <BottomModal
          title="Redeem Offer"
          description="You will receive a code in your email with detailed instructions of how to activate your offer."
          showErrorMsg={showErrorMsg}
          errorMsg="You will receive a code in your email with detailed instructions of how to activate your offer."
          confirmLabel="Redeem"
          cancelLabel="Cancel"
          showModal={showModal}
          setShowModal={setShowModal}
          handleConfirm={handleRedeem}
        />

        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          {!redeemed && (
            <Button variant="red" onPress={() => setShowModal(true)}>
              <Text type="Body/Medium" variant='white'>Redeem Offer</Text>
            </Button>
          )}

          {redeemed && (
            <>
              <Button variant="red" actionStyle={styles.redeemedButton} disabled={true}>
                <Text type="Body/Medium" variant='white'>Offer Redeemed</Text>
              </Button>
              <Button variant="transparent" actionStyle={styles.cancelOfferButton} onPress={handleCancelOffer}>
                <Text type="Body/Large" variant='white'>Cancel Offer</Text>
              </Button>
            </>
          )}
        </View>
      </AppLayout>
    </BottomSheetModalProvider>
  );
};

export default Redeem;