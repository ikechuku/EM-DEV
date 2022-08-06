import React, {useState, useEffect} from 'react';
import {Container} from '../../helper';
import {
  StatusBar,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'react-native';
import {H1, P} from '../../helper/element';
import {Button} from '../../component/button';
import {Colors, RF, RR} from '../../helper/constants';
import {AppIcons} from '../../helper/images';
import {color} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InputText from '../../components/textInput';
import ButtonWithIcon from '../../components/buttonWithIcon';
import BalanceCard from '../../components/balanceCard';
import AdminCard from '../../components/adminCards';
import Toast from 'react-native-toast-message';
import Notification from '../../components/notification';
import {axiosCallsNoAuth} from '../../helper/api';

export const Signup = props => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // const submit = async () => {
  //   try {
  //     if (phone == '' || name == '' || email == '' || password == '') {
  //       alert('All fields are not filled');
  //     } else {
  //       if (phone.length != 11) {
  //         Toast.show({
  //           type: 'error',
  //           position: 'top',
  //           text1: 'Error',
  //           text2: `Wrong phone number'`,
  //           visibilityTime: 6000,
  //           autoHide: true,
  //           topOffset: 30,
  //           bottomOffset: 60,
  //         });
  //         alert('Wrong phone number');
  //       } else {
  //         setLoading(true);
  //         const payLoad = {
  //           name: name,
  //           phone: Number(phone),
  //           email: email,
  //           password: Number(password),
  //         };
  //         console.warn('my payLoad', payLoad);
  //         const res = await axiosCallsNoAuth('/create', 'POST', payLoad);

  //         if (res) {
  //           setLoading(false);
  //           if (res.er) {
  //             console.warn('error', res.er);
  //           } else {
  //             console.warn('sussesful', res.data);
  //             if (res.data.success == true) {
  //               props.navigation.navigate('Login');
  //             } else {
  //               if (res.data.message == "You didn't provide a valid name") {
  //                 Toast.show({
  //                   type: 'error',
  //                   position: 'top',
  //                   text1: 'Error',
  //                   text2: `You need to input your full name `,
  //                   visibilityTime: 6000,
  //                   autoHide: true,
  //                   topOffset: 30,
  //                   bottomOffset: 60,
  //                 });
  //               } else {
  //                 Toast.show({
  //                   type: 'error',
  //                   position: 'top',
  //                   text1: 'Error',
  //                   text2: `${res.data.message}`,
  //                   visibilityTime: 6000,
  //                   autoHide: true,
  //                   topOffset: 30,
  //                   bottomOffset: 60,
  //                 });
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   } catch (e) {
  //     console.warn('error coming.....', e);
  //   }
  // };

  const SignUpFuction = async () => {
    try {
      if (name == '' || phone == '' || email == '' || password == '') {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: `All feilds require`,
          visibilityTime: 6000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 60,
        });
      } else {
        if (phone.length != 11) {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Error',
            text2: `Incorrect phone number`,
            visibilityTime: 6000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 60,
          });
        } else {
          setLoading(true);
          const payLoad = {
            name: name,
            phone: phone,
            email: email,
            password: password,
          };

          console.warn('my payload', payLoad);
          const res = await axiosCallsNoAuth('/create', 'POST', payLoad);
          console.warn('this is the response coming from backend', res);

          setLoading(false);
        }
      }
    } catch (e) {
      console.warn('error sinignup', e);
      alert('Bad network connecvtions try again later');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: RR(15),
        paddingHorizontal: '5%',
      }}>
      <View style={{height: '15%', width: '90%'}}>
        <View
          style={{
            width: '100%',
          }}>
          <H1 color={'#5E38AF'}>Signup</H1>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: '2%',
          }}>
          <P color={'#5E38AF'}>Sign up to register your account</P>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: '5%',
          marginTop: '3%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}></View>
      {/* <Button /> */}
      <ScrollView>
        <KeyboardAvoidingView>
          <InputText
            placeholder={'Full Name'}
            ic={AppIcons.person}
            width={'100%'}
            paddingLeft={'5%'}
            onChange={value => setName(value)}
          />
          <InputText
            placeholder={'My Phone Number'}
            ic={AppIcons.bell}
            width={'100%'}
            spaceTop={30}
            maxLength={11}
            keyboardType={'numeric'}
            paddingLeft={'5%'}
            onChange={value => setPhone(value)}
          />
          <InputText
            placeholder={'Email'}
            ic={AppIcons.at}
            width={'100%'}
            spaceTop={30}
            paddingLeft={'5%'}
            onChange={value => setEmail(value)}
          />
          <InputText
            placeholder={'Pin'}
            ic={AppIcons.lock}
            width={'100%'}
            spaceTop={30}
            secure={true}
            maxLength={4}
            keyboardType={'numeric'}
            paddingLeft={'5%'}
            onChange={value => setPassword(value)}
          />

          {/* <Notification count={10} /> */}

          <Button
            marginTop={30}
            text={'Submit'}
            loading={loading}
            onPress={() => SignUpFuction()}
          />
          <TouchableOpacity
            style={{
              width: '90%',
              marginTop: '4%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('Login')}>
            <Text>
              Already have an account ?{' '}
              <Text style={{color: Colors.appPrimary}}> Login</Text>{' '}
            </Text>
          </TouchableOpacity>

          {/* <ButtonWithIcon />
      <BalanceCard />
      <AdminCard /> */}
        </KeyboardAvoidingView>
      </ScrollView>
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

export default Signup;
