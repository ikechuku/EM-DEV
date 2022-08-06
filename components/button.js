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
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  H1,
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
const Button = props => {
  return (
    <TouchableOpacity
      style={{
        height: RH(13.4),
        width: '30%',
        backgroundColor: props.bgColor,
        shadowColor: '#000',
        borderRadius: RR(5),
        paddingTop: RH(4),
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 20,
      }}
      onPress={props.onPress}>
      <View
        style={{
          width: '39%',
          marginTop: '-9%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.active == 'Link' ? (
          <AntDesign name="link" size={25} color="#7A117C" />
        ) : props.active == 'Qrj' ? (
          <AntDesign name="qrcode" size={25} color="#7A117C" />
        ) : props.active == 'ScanMe' ? (
          <AntDesign name="file1" size={20} color="#FFFFFF" />
        ) : props.active == 'Account' ? (
          <MaterialIcons name="logout" size={25} color="#7A117C" />
        ) : props.active == 'Code' ? (
          <MaterialIcons name="phone-iphone" size={25} color="#BA151F" />
        ) : props.active == 'Pay' ? (
          <AntDesign name="qrcode" size={25} color="#1ABA8A" />
        ) : props.active == 'Cashback' ? (
          <FontAwesome name="money" size={25} color="#6F7173" />
        ) : null}
      </View>
      <View
        style={{
          width: '90%',
          marginTop: RH(0),
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <H2 size={RF(4)} color={props.color || Colors.lineGrey}>
          {props.text}
        </H2>
      </View>
      <View
        style={{
          width: '90%',

          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <H2 size={RF(4)} color={props.color || Colors.lineGrey}>
          {props.text2}
        </H2>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
