import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

interface ImageCardProps {
  children: React.ReactNode;
  backgroundImage: string;
  disabled?: boolean;
  onPress?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  children,
  backgroundImage,
  disabled = true,
  onPress,
}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} disabled={disabled}>
      <View style={styles.bgImageWrapper}>
        <FastImage
          style={styles.bgImage}
          source={{
            uri: backgroundImage,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.content}>{children}</View>
    </TouchableOpacity>
  );
};

export default ImageCard;
