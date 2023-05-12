import React, { useCallback } from "react";
import { Alert, Linking, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import CustomReadMore from "src/components/common/ReadMore";
import { Text } from "src/components/common/Texts";
import { useAppSelector } from "src/store/index";
import TwitterIcon from "src/assets/icons/social-icons/twitter.svg";
import TiktokIcon from "src/assets/icons/social-icons/tiktok.svg";
import InstagramIcon from "src/assets/icons/social-icons/instagram.svg";
import YoutubeIcon from "src/assets/icons/social-icons/youtube.svg";
import ResourceCard from "../../components/ResourceCard";
import styles from "./styles";

const AboutTab: React.FC = () => {
  const { activeLearnItemId, learnByLearnItemId } = useAppSelector(o => o.learn);

  const learn = learnByLearnItemId[activeLearnItemId];

  const handlePress = useCallback(async (link: string) => {
    console.log('handle press')
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, []);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text type="Body/Large" variant="white" style={styles.sponsorLabel} >Presented By:</Text>
        <Text type="Headline/Medium" variant="white">{learn?.sponsor}</Text>
      </View>

      <View style={{minHeight: 80}}>
        <CustomReadMore
          numberOfLines={5}
          content={learn.description as string}
        />
      </View>

      <View style={styles.socialHandlesContainer}>
        {!!learn.socialHandles?.twitter && <TouchableOpacity style={styles.socialIconContainer} onPress={() => handlePress(learn.socialHandles?.twitter as string)}>
          <TwitterIcon />
        </TouchableOpacity>}
        {!!learn.socialHandles?.tiktok && <TouchableOpacity style={styles.socialIconContainer} onPress={() => handlePress(learn.socialHandles?.tiktok as string)}>
          <TiktokIcon />
        </TouchableOpacity>}
        {!!learn.socialHandles?.instagram && <TouchableOpacity style={styles.socialIconContainer} onPress={() => handlePress(learn.socialHandles?.instagram as string)}>
          <InstagramIcon />
        </TouchableOpacity>}
        {!!learn.socialHandles?.youtube && <TouchableOpacity style={styles.socialIconContainer} onPress={() => handlePress(learn.socialHandles?.youtube as string)}>
          <YoutubeIcon />
        </TouchableOpacity>}
      </View>

      <View>
        <Text type="Headline/Medium" variant="white" style={styles.resourcesLabel}>Resources</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.resourcesContainer}>
          {learn.resources?.items.map((item, idx) => <ResourceCard 
            key={`resource-${idx}`}
            title={item?.title as string} 
            heroImageUri={item?.heroImageUri as string} 
            link={item?.link as string} 
          />)}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default AboutTab;