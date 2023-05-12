import { Storage } from "aws-amplify";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Linking, View } from "react-native";
import FastImage from "react-native-fast-image";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text } from "src/components/common/Texts";
import styles from "./styles";

interface IResourceCardProps {
  title: string;
  heroImageUri: string;
  link: string;
};

const ResourceCard: React.FC<IResourceCardProps> = ({
  title,
  heroImageUri,
  link
}) => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const setBackgroundImage = async () => {
      try {
        Storage.get(heroImageUri.replace("public/", "")).then(
          res => {
            setImgSrc(res);
          },
          err => {
            console.error("Storage.get failed: ", err);
          }
        )
      }
      catch (e) {
        console.error("Storage.get catch: ", e);
      }
    };

    setBackgroundImage();
  }, [heroImageUri]);

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, [link]);

  return (
    <TouchableOpacity onPress={() => handlePress()} style={styles.container}>
      <View style={styles.bgImageWrapper}>
        <FastImage
          style={styles.bgImage}
          source={{
            uri: imgSrc,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <Text type="Body/Large" variant="white" style={{ textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ResourceCard;