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
import {AppIcons} from '../helper/images';
const MainCard = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.appCard,
        width: '45%',
        height: RF(205),

        borderRadius: 5,
        paddingTop: 10,
      }}
      onPress={props.onPress}>
      <View
        style={{
          width: '100%',
          height: RF(30),
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        {props.count ? (
          <View
            style={{
              backgroundColor: Colors.appRed,
              width: '19%',
              height: RF(29),
              marginTop: '5%',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '14%',
            }}>
            <Text style={{color: '#EEC4C4', fontSize: 12}}>{props.count}</Text>
          </View>
        ) : null}
      </View>
      <View
        style={{
          width: '100%',
          height: RF(45),
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: '-5%',
        }}>
        <View
          style={{
            backgroundColor: Colors.appThickbrown,
            width: 40,                 
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '15%',
          }}>
          <Image style={{height: 19.5, width: 17}} source={props.icon} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: '7%',
        }}>
        <Text
          style={{
            color: Colors.appPrimary,
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: '18%',
          }}>
          {props.text}
        </Text>
      </View>
      <View
        style={{
          height: RF(30),
          width: '90%',
          marginTop: '3%',
        }}>
        <Text
          style={{
            color: Colors.apptext,
            fontSize: 10,

            marginLeft: '18%',
          }}>
          {props.des}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainCard;
