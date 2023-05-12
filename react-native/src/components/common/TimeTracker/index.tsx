import React, { useEffect } from "react";
import BackgroundTimer from 'react-native-background-timer';

import { useAppDispatch } from "src/store";
import { increaseActivePeriodInMinutes } from "src/store/slices/user.slice";
import { Text } from "../Texts";

const TimeTracker: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    BackgroundTimer.runBackgroundTimer(() => {
      //code that will be called every 10 seconds 
      dispatch(increaseActivePeriodInMinutes(10));
    }, 10000);
  }, []);

  return (
    <Text type="Headline/Large" variant='white' style={{ display: "none" }}>
      Time Tracker
    </Text>
  );
};

export default TimeTracker;