/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from './index';
import {Colors, RF, RH, RR, RW} from './constants';
import {H1, P, H2} from './element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Platform, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {Fonts} from './fontSize';
import Home from '../Home/home';
import {AppIcons} from './images';
export const Card2 = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      {/* <Container
        height={13}
        borderRadius={15}
        elevation={5}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        width={23}
        zIndex={100}
        backgroundColor={props.bg || Colors.appWhite}> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
          height: RH(9),
          width: RW(19),
          borderRadius: RR(4),

          backgroundColor: 'white',
          shadowColor: '#470000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          elevation: Platform.OS == 'ios' ? 4 : 10,
          // background color must be set
          // invisible color
        }}>
        <Container
          height={5}
          width={23}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          {props.image ? (
            <Image
              source={props.image}
              style={{
                height: props.height || '100%',
                width: props.width || '100%',
              }}
              resizeMode={'contain'}
            />
          ) : null}
          {props.back ? (
            <AntDesign name="arrowleft" size={30} color={Colors.appTextBlack} />
          ) : null}
        </Container>
        {/* <Container>
          <H2 color={Colors.appTextBlack}>{props.text}</H2>
        </Container> */}
        <Container>
          <H2 color={Colors.appTextBlack} size={RR(3)}>
            {props.text1}
          </H2>
        </Container>
        {/* </Container> */}
      </View>
    </TouchWrap>
  );
};

export default Card2;
