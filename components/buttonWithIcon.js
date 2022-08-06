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

const ButtonWithIcon = props => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: 'green',
          paddingHorizontal: 20,
          width: RR(75),
          paddingVertical: 8,

          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image style={{height: 19.5, width: 17}} source={AppIcons.edit} />
        </View>
        <View>
          <H1 style={{fontSize: 20, color: 'white'}}>Edit</H1>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
