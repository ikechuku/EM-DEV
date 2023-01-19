/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from './index';
import {Colors, RF, RH, RW} from './constants';
import {H1, P, H2} from './element';
import Entypo from 'react-native-vector-icons/Entypo';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {Fonts} from './fontSize';
import Home from '../Home/home';
import {AppIcons} from './images';
export const Back = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={9}
        borderRadius={5}
        elevation={5}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        width={19}
        zIndex={100}
        backgroundColor={props.bg || Colors.appWhite}>
        <AntDesign name="arrowleft" size={30} color={Colors.appTextBlack} />
      </Container>
    </TouchWrap>
  );
};

export default Back;
