import React, { useEffect, useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { onCreateAthlete, onUpdateAthlete, onUpdateAthleteActivity } from "src/graphql/subscriptions";
import { Image, View, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import { IOpportunitiesScreenProps } from 'src/types/opportunitiesRouterTypes';
import { AthletesWealth } from "src/types/common";
import { log } from 'src/utils/functions';
import { useAppDispatch, useAppSelector } from "src/store";
import { loadAthletesList, updateAthleteList } from "src/store/slices/athlete.slice";
import styles from '../../styles';
import ArrowDownIcon from 'src/assets/icons/down-arrow.png';
import ArrowUpIcon from 'src/assets/icons/up-arrow.png';
import ArrowUnchangeIcon from 'src/assets/icons/unchange.png';
import Button from 'src/components/common/Button';
import { scale } from 'src/config/dimentions';

const LBScreen: React.FC<IOpportunitiesScreenProps> = ({
  navigation
}: IOpportunitiesScreenProps) => {

  const dispatch = useAppDispatch();
  const { athleteList, email } = useAppSelector(o => o.athlete);
  
  useEffect(() => {
    dispatch(loadAthletesList());

    const updateSubscription = (API.graphql(
      graphqlOperation(onUpdateAthleteActivity)
    ) as any).subscribe({
      next: ({ provider, value }) => dispatch(updateAthleteList(value.data.onUpdateAthleteActivity)),
      error: (error: any) => console.warn('graphqlissue', error.error)
    });

    return () => {
      updateSubscription.unsubscribe();
    }
  }, [])

  return (
    <AppLayout>
        <Text type="Body/Large" style={styles.leaderBoardText} >LeaderBoard </Text>

        <TouchableOpacity style={styles.container1}>
          <Button variant='transparent' labelStyle={{ ...styles.lblabel }} actionStyle={{ ...styles.lbaction, borderColor: 'transparent', flex: 1.5, }}>
            <Text type="Body/Medium"   >#</Text>
          </Button>
          <Button variant='transparent' labelStyle={{ ...styles.lblabel, alignItems: 'flex-start' }} actionStyle={{ ...styles.lbaction, borderColor: 'transparent', flex: 8, justifyContent: 'flex-start' }}>
            <Text type="Body/Medium"  >LearnTag</Text>
          </Button>
          <Button variant='transparent' labelStyle={styles.lblabel} actionStyle={{ ...styles.lbaction, borderColor: 'transparent', flex: 3 }}>
            <Text type="Body/Medium" >$WEALTH</Text>
          </Button>
        </TouchableOpacity>

        <View style={{flex: 1}}>
          {athleteList.length > 0 && <FlatList
            data={athleteList}
            renderItem={({ item }) =>
              <TouchableOpacity style={email.toLocaleLowerCase() === item.email.toLocaleLowerCase() ? styles.ownContainer : styles.container} >
                <Text type="Body/Small" variant="white" style={styles.depositTitle1}>{item.index}</Text>
                <Text type="Body/Small" variant="white" style={styles.depositTitle2}>{item.email.substring(0, item.email.lastIndexOf("@"))}</Text>
                <View style={styles.icon}>
                  {item.up == 1 ? <Image source={ArrowUpIcon} resizeMode={'contain'} style={{ width: scale(17), height: scale(16) }} />
                    : item.up == -1 ? <Image source={ArrowDownIcon} resizeMode={'contain'} style={{ width: scale(17), height: scale(16) }} />
                      : <Image source={ArrowUnchangeIcon} resizeMode={'contain'} style={{ width: scale(17), height: scale(16) }} />}
                </View>
                <Text style={styles.depositTitle3} type="Body/Small">{item.wealthBalance}</Text>
              </TouchableOpacity>}
            keyExtractor={item => item.id}
            style={{flex: 1}}
          />}
        </View>
    </AppLayout>
  );
};

export default LBScreen;