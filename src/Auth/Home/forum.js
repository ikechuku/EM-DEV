import React, { useState, useEffect } from 'react';

import { StatusBar, View, Image, TouchableOpacity, Text } from 'react-native';

import { Colors, RF, RR } from '../../../helper/constants';

import { color } from 'react-native-reanimated';
import { H1, Hr, H4 } from '../../../helper/element';
import Notification from '../../../components/notification';
import { AppIcons } from '../../../helper/images';
import ConfigButton from '../../../components/configButton';
import BalanceCard from '../../../components/balanceCard';
import MainCard from '../../../components/mainCard';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import CircleImage from '../../../components/circleImage';
import InputText from '../../../components/textInput';
import Toast from 'react-native-toast-message';
import { Button } from '../../../component/button';
import { axiosCalls, axiosCallsNoAuth } from '../../../helper/api';
import { ToastLong } from '../../../helper/toast';
export const Home = props => {
  const [visible, setVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")


  const Form = () => {
    setShowForm(true);
    setActive('addNew');
  };


  return (
    <View
      style={{
        flex: 1,
        paddingTop: RR(15),
        backgroundColor: Colors.appWhite,
      }}>
      <View
        style={{
          height: '10%',
          width: '100%',
          flexDirection: 'row',
        }}>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            paddingLeft: '5%',
            marginTop: '2%',
          }}>
          <H1 color={Colors.appPrimary}>Form</H1>
        </View>

      </View>

      <ScrollView>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            paddingLeft: '5%',
            marginTop: '9%',
          }}>

          <H4 color={Colors.appPrimary}>Type Message</H4>
          <View style={{ marginTop: 20 }}>

            <InputText
              multiline
              width={'90%'}
              height={250}
              numberOfLines={7}
              maxLength={300}
              onChange={value => setMessage(value)}
            />
          </View>
        </View>

        <View style={{ height: '20%', marginTop: 100 }}>
          <Button
            marginTop={30}
            text={'Send'}
            width={'90%'}
            marginLeft={'5%'}
            height={50}
            loading={loading}
            onPress={() => Form()}
          />


        </View>
      </ScrollView>

      <Modal
        isVisible={showForm}
        onBackButtonPress={() => setShowForm(false)}
        onBackdropPress={() => setShowForm(false)}>
        <View
          style={{
            height: RF(300),
            width: '100%',
            backgroundColor: Colors.appWhite,
            paddingHorizontal: '5%',
          }}>
          <TouchableOpacity
            style={{ marginTop: 15, display: "flex" }}
            onPress={() => setShowForm(false)}>
            <View
              style={{
                width: '100%',
                height: RF(60),
                flexDirection: 'row',
                paddingLeft: '2%',
                justifContent: 'center'
              }}>

              <View
                style={{
                  width: "100%",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',

                  // marginLeft: '5%',
                }}>
                <H1 color={Colors.appPrimary}>Confirm</H1>
              </View>
            </View>
          </TouchableOpacity>


          <View
            style={{
              width: '100%',
              height: '65%',
              marginTop: 20,
            }}>


            <View style={{ paddingHorizontal: 30, marginBottom: 40 }}>
              <Text style={{ color: "#716D6D" }}>
                You are about to send message to all residents. Confirm you are this action
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                height: 60,
                paddingHorizontal: '2%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                border: 2,

              }}>
              <TouchableOpacity onPress={() => setShowForm(false)}>
                <View
                  style={{
                    backgroundColor: '#A986A7',
                    width: 80,
                    height: 30,
                    justifyContent: 'center',
                    borderRadius: 3,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{ height: 13, width: 11 }}
                    source={AppIcons.cancel}
                    resizeMode="contain"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <H1 size={RF(7)} color={'#FFFFFF'}>
                      Cancel
                    </H1>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#5E38AF',
                    width: 80,
                    height: 30,
                    justifyContent: 'center',
                    borderRadius: 3,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginLeft: 40,
                  }}>
                  <Image
                    style={{ height: 13, width: 11 }}
                    source={AppIcons.send}
                    resizeMode="contain"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <H1 size={RF(7)} color={'#FFFFFF'}>
                      Send
                    </H1>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal >
      {/* <Toast ref={ref => Toast.setRef(ref)} /> */}
    </View>
  );
};

export default Home;



