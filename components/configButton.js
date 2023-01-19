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

const ConfigButton = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.appRed,
        width: '70%',

        height: RF(50),
        flexDirection: 'row',
        borderRadius: 9,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      {/* img */}
      <View
        style={{
          marginLeft: '5%',

          width: '13%',
          height: RF(30),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{height: 19.5, width: 17}} source={AppIcons.setting} />
      </View>
      <View
        style={{
          backgroundColor: Colors.appRed,
          width: '59%',
          height: RF(30),
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{color: Colors.appWhite, fontSize: 10, fontWeight: 'bold'}}>
          Configure Emergency Details
        </Text>
      </View>
    </View>
  );
};

export default ConfigButton;
