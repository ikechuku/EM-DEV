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

const InputText = props => {
  return (
    <View
      style={{
        width: props.width,
        height: props.height || RF(63),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,

        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.appPrimary,
        marginTop: props.spaceTop,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 19.5, width: 17}}
          source={props.ic}
          resizeMode="contain"
        />
      </View>
      <TextInput
        style={{
          width: '85%',
          height: RF(45),
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: props.paddingLeft || '15%',
          placeholderColor: props.placeholderColor || 'black',
          placeholderTextColor: props.placeholderColor || 'black',
        }}
        onChangeText={props.onChange}
        placeholderStyle={{
          placeholderColor: props.placeholderColor || 'black',
          color: props.placeholderColor || 'black',
        }}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor || 'black'}
        theme={{colors: {text: '#000000'}}}
      />
    </View>
  );
};

export default InputText;
