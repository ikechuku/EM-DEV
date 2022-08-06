import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  H2,
  P,
  Space,
  Container,
  Colors,
  RH,
  RW,
  RF,
  RR,
} from '../helper/constants';
import {AppIcons} from '../helper/images';
import {H1} from '../helper/element';

const BalanceCard = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.appCard,
        width: props.width,
        height: props.height,
        marginTop: props.marginTop,
        borderRadius: 6,
      }}>
      <View
        style={{
          width: '80%',
          height: RF(20),
          marginTop: '3%',

          alignItems: 'flex-start',
        }}>
        <H1
          style={{
            color: Colors.apptext,
            fontSize: 15,

            marginLeft: '7%',
          }}>
          Wallet Balance
        </H1>
      </View>
      <View
        style={{
          width: '100%',
          height: RF(55),
          marginTop: '10%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            backgroundColor: Colors.appPrimary,
            width: RF(48),
            height: RF(48),
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '5%',
          }}>
          <Image style={{height: 25, width: 25}} source={AppIcons.thread} />
        </View>
        <View
          style={{
            width: '39%',
            height: RF(33),
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '-1%',
          }}>
          <H1
            style={{
              color: Colors.appPrimary,
              fontSize: 20,
              marginLeft: '3%',
              fontWeight: 'bold',
            }}>
            {props.amount}
          </H1>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.appBrown,
            height: RF(35),
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginLeft: '13%',
          }}>
          <H1 color={Colors.appWhite}>View</H1>
        </TouchableOpacity>
        {/* <Button /> */}
      </View>
    </View>
  );
};

export default BalanceCard;
