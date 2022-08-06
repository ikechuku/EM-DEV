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
  Space,
  Container,
  Colors,
  RH,
  RW,
  RF,
  RR,
} from '../helper/constants';
import {AppIcons} from '../helper/images';
import {H1, P} from '../helper/element';

const TransactionCard = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.appCard,
        width: props.width,
        height: props.height,
        marginTop: props.marginTop,
        borderRadius: 6,
        flexDirection: 'row',
      }}>
      <View style={{width: '70%', paddingTop: '3%'}}>
        <View>
          <H1 size={RF(10)}>SMS charge - Guest</H1>
        </View>
        <View>
          <P>February 15, 07:37AM</P>
        </View>
      </View>
      <View
        style={{
          width: '30%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <H1 size={RF(10)}>. ₦10</H1>
      </View>
    </View>
  );
};

export default TransactionCard;
