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

const WalletCard = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.appCard,
        width: props.width,
        height: props.height,
        marginTop: props.marginTop,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#A986A7',
      }}>
      <View
        style={{
          width: '100%',
          height: RF(55),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '39%',
            alignItems: 'flex-start',
            marginLeft: '0%',
          }}>
          <H1
            style={{
              color: Colors.apptext,
              fontSize: 12,
              marginLeft: '3%',
            }}>
            Balance available
          </H1>
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
            backgroundColor: Colors.appPrimary,
            height: RF(40),
            width: '35%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginLeft: '13%',
            paddingHorizontal: 4,
            paddingVertical: 2,
          }}>
          <H1 style={{fontSize: 12, color: Colors.appWhite}}>Transfer Fund</H1>
        </TouchableOpacity>
        {/* <Button /> */}
      </View>
    </View>
  );
};

export default WalletCard;
