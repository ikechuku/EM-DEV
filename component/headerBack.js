// New
import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';
import {Image, View, TextInput} from 'react-native';
import {Colors, RF, RH, RR, RW} from '../helper/constants';
import {H1, H2, P, TextInputBox} from '../helper/element';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useStoreActions, useStoreState} from 'easy-peasy';
import Feather from 'react-native-vector-icons/Feather';
import {Fonts} from '../helper/fontSize';
import moment from 'moment';
import {Dimensions, PixelRatio} from 'react-native';
import {AppIcons} from '../helper/images';
import NumberFormat from 'react-number-format';
export const HeaderBack = props => {
  return (
    <Container
      height={6}
      width={100}
      verticalAlignment={'center'}
      direction={'row'}
      marginTop={2}>
      <TouchWrap onPress={props.onPress}>
        <Container
          height={6}
          marginLeft={-5.5}
          width={20}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <ImageWrap
            source={AppIcons.left}
            height={8}
            width={8}
            fit={'contain'}
          />
        </Container>
      </TouchWrap>
      <Container
        paddingVertical={1}
        width={55}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}>
        <H1 color={Colors.appTextBlack} size={20}>
          {props.name}
        </H1>
      </Container>
    </Container>
  );
};
