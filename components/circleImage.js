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

const CircleImage = props => {
  return (
    <TouchableOpacity
      style={{
        height: props.height || RF(40),
        width: props.width || RF(40),
        backgroundColor: props.bg || '#A986A7',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={props.onPress}>
      <Image
        style={{height: RF(20), width: RF(20)}}
        source={props.icon}
        resizeMode={'contain'}
        tintColor={'white'}
      />
    </TouchableOpacity>
  );
};

export default CircleImage;
