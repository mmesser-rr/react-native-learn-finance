import React from "react";
import { View } from "react-native";

import AppColors from "src/config/colors";
import styles from "../styles";

export const Dot = () => <View style={styles.dot} />;
export const ActiveDot = () => <View style={{ ...styles.dot, backgroundColor: AppColors.accentRed100 }} />;