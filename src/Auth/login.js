import React, {useState, useEffect} from 'react';
import {Container} from '../../helper';
import {StatusBar, View, Image, Text} from 'react-native';
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
import Notification from '../../components/notification';
import Toast from 'react-native-toast-message';
import {RouteContext} from '../../helper/route_context';
import {axiosCallsNoAuth} from '../../helper/api';
import {storeData, storeData2} from '../../helper/storage';

export const Login = props => {
  const [visible, setVisible] = useState(false);
  const {setCurrentState} = React.useContext(RouteContext);
  const [email, setEmail] = useState('abj97x@gmail.com');
  const [password, setPassword] = useState('9999');
  const [loading, setLoading] = useState(false);

  const Submitfunction = async () => {
    try {
      if (email == '' || password == '') {
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
        if (password.length != 4) {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Error',
            text2: `Incorrect password`,
            visibilityTime: 6000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 60,
          });
        } else {
          setLoading(true);
          const payLoad = {
            email: email,
            password: password,
          };
          // console.warn('payload coming', payLoad);
          const res = await axiosCallsNoAuth('/login', 'POST', payLoad);
          // console.warn('response coming from backend', res.er);

          setLoading(false);
          if (res.data.success == false) {
            // setCurrentState('Home');
            Toast.show({
              type: 'error',
              position: 'top',
              text1: 'Error',
              text2: res.data.message,
              visibilityTime: 6000,
              autoHide: true,
              topOffset: 30,
              bottomOffset: 60,
            });
            alert(res.data.message);
          } else {
            storeData2('token', res.data.token);
            storeData('userdetails', res.data.admin);

            setCurrentState('Home');
          }
        }
      }
    } catch (e) {
      // console.warn('error coming', e);
      alert("Incorrect email or password");

    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: RR(15),
        paddingHorizontal: '5%',
      }}>
      <View style={{height: '20%', width: '90%'}}>
        <View
          style={{
            width: '100%',
          }}>
          <H1 color={'#5E38AF'}>Login</H1>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: '2%',
          }}>
          <P color={'#5E38AF'}>Sign in to your registered account</P>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: '8%',
          marginTop: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}></View>
      {/* <Button /> */}

      <InputText
        placeholder={'Email'}
        ic={AppIcons.at}
        width={'100%'}
        paddingLeft={'5%'}
        type="email"
        value={email}
        onChange={value => setEmail(value)}
      />
      <InputText
        placeholder={'Password'}
        ic={AppIcons.bell}
        width={'100%'}
        spaceTop={30}
        keyboardType={'numeric'}
        maxLength={4}
        paddingLeft={'5%'}
        value={password}
        secure={true}
        onChange={value => setPassword(value)}
      />

      {/* <Notification count={10} /> */}

      <Button
        marginTop={30}
        text={'Submit'}
        loading={loading}
        onPress={() => Submitfunction()}
      />
      {/* <View
        style={{
          alignItems: 'center',
          marginTop: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{alignItems: 'center', borderWidth: 0.2, width: '38%'}}></View>
        <Text style={{color: '#9E9797', fontSize: 16, fontWeight: '600'}}>
          or
        </Text>
        <View
          style={{alignItems: 'center', borderWidth: 0.2, width: '38%'}}></View>
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{color: '#9E9797', fontSize: 14, fontWeight: '600'}}>
          Are you new?
        </Text>
      </View> */}

      {/* <Button
        marginTop={20}
        text={'Sign up'}
        onPress={() => props.navigation.navigate('Signup')}
      /> */}

      {/* <ButtonWithIcon />
      <BalanceCard />
      <AdminCard /> */}
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

export default Login;
