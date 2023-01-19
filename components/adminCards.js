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

import {Space, Container, Colors, RH, RW, RF, RR} from '../helper/constants';
import {AppIcons} from '../helper/images';
import {H1, P} from '../helper/element';

const AdminCard = props => {
  return (
    <View
      style={{
        width: '80%',
        borderRadius: 4,
        backgroundColor: Colors.appRed,
        padding: 10,
        flexDirection: 'row',
      }}>
      <View style={{paddingLeft: '2%', width: '50%'}}>
        <H1>V. Chairman</H1>
      </View>

      <View style={{paddingLeft: '2%', width: '50%'}}>
        <P style={{fontSize: 15, color: '#565656'}}>Avis Charles</P>
        <P style={{fontSize: 15, color: '#565656'}}>avisc@infoabc.com</P>
        <P style={{fontSize: 15, color: '#565656'}}>08022222222</P>
      </View>
    </View>
  );
};

export default AdminCard;
