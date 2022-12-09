import React, {useState, useEffect} from 'react';

import {StatusBar, View, Image, TouchableOpacity} from 'react-native';

import {Colors, RF, RR} from '../../../helper/constants';

import {color} from 'react-native-reanimated';
import {H1, P} from '../../../helper/element';
import Notification from '../../../components/notification';
import {AppIcons} from '../../../helper/images';
import ConfigButton from '../../../components/configButton';
import BalanceCard from '../../../components/balanceCard';
import MainCard from '../../../components/mainCard';
import Modal from 'react-native-modal';
import {Width} from '../../../helper';
import CircleImage from '../../../components/circleImage';
import InputText from '../../../components/textInput';
import {Button} from '../../../component/button';

export const Payment = props => {
  const [visible, setVisible] = useState(false);
  const [payment, setPayment] = useState(false);
  const [clickedTitle, setClickedTitle] = useState('');
  const [active, setActive] = useState('');

  const Estate = value => {
    setClickedTitle(value);
    setActive('Estate');
    setVisible(true);
  };
  const Water = value => {
    setClickedTitle(value);
    setActive('Water');
    setVisible(true);
  };

  const Waste = value => {
    setClickedTitle(value);
    setActive('Waste');
    setVisible(true);
  };

  const Project = value => {
    setClickedTitle(value);
    setActive('Project');
    setVisible(true);
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
          width: '100%',
          paddingLeft: '5%',
        }}>
        <P color={Colors.appPrimary}>Payment</P>
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
          paddingLeft: '5%',

          flexDirection: 'row',
          marginTop: '5%',
        }}>
        <TouchableOpacity
          style={{
            height: '70%',
            width: '45%',
            backgroundColor: !payment ? Colors.appPrimary : Colors.appWhite,
            borderWidth: 1,
            borderColor: Colors.appPrimary,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
          onPress={() => setPayment(false)}>
          <H1 color={payment ? Colors.appPrimary : Colors.appWhite}>Add new</H1>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '70%',
            width: '45%',
            backgroundColor: payment ? Colors.appPrimary : Colors.appWhite,
            borderWidth: 1,
            borderColor: Colors.appPrimary,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
          onPress={() => setPayment(true)}>
          <H1 color={!payment ? Colors.appPrimary : Colors.appWhite}>
            Payments
          </H1>
        </TouchableOpacity>
      </View>

      <View 
        style={{
          width: '100%',
          paddingLeft: '5%',
        }}>
        <H1 color={'#716D6D'} size={RF(7)}>
          Add and manage estate bill or levies
        </H1>
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
          paddingVertical: 10,
          flexDirection: 'row',
          marginTop: 15,
        }}>
        <MainCard
          text={'Update Estate Levy'}
          des={'Update the new estate levy'}
          icon={AppIcons.flag}
          onPress={() => Estate('Update Estate Levy')}
        />
        <MainCard
          text={'Update Water Bill'}
          des={'Pay for your water bills'}
          icon={AppIcons.tap}
          onPress={() => Water('Update Water Bill')}
        />
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
          paddingVertical: 10,
          flexDirection: 'row',
          marginTop: 1,
        }}>
        <MainCard
          text={'Update Waste Bill'}
          des={'Update the new waste bill'}
          icon={AppIcons.del}
          onPress={() => Waste('Update Waste Bill')}
        />
        <MainCard
          text={'Update New Project'}
          des={'Update new project contribution'}
          icon={AppIcons.time}
          onPress={() => Project('Update New Project')}
        />
      </View>

      <Modal
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}>
        <View
          style={{
            height: RF(700),
            width: '100%',

            backgroundColor: Colors.appWhite,
          }}>
          <View
            style={{
              width: '100%',
              height: RF(100),

              flexDirection: 'row',
              marginTop: RF(10),
            }}>
            <View
              style={{
                height: RF(100),
                width: '40%',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <H1 color={Colors.appPrimary} size={RF(8)}>
                Make Payment
              </H1>
            </View>
            <View
              style={{
                height: RF(100),
                width: '50%',

                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <CircleImage
                bg={active == 'Estate' ? Colors.appPrimary : null}
                icon={AppIcons.flag}
                onPress={() => setActive('Estate')}
              />

              <CircleImage
                bg={active == 'Water' ? Colors.appPrimary : null}
                icon={AppIcons.tap}
                onPress={() => setActive('Water')}
              />
              <CircleImage
                bg={active == 'Waste' ? Colors.appPrimary : null}
                icon={AppIcons.del}
                onPress={() => setActive('Waste')}
              />
              <CircleImage
                bg={active == 'Project' ? Colors.appPrimary : null}
                icon={AppIcons.time}
                onPress={() => setActive('Project')}
              />
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: RF(100),

              flexDirection: 'row',
              marginTop: RF(10),
              paddingLeft: '8%',
            }}>
            <View
              style={{
                height: RF(100),

                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <CircleImage
                bg={Colors.appPrimary}
                icon={
                  active == 'Estate'
                    ? AppIcons.flag
                    : active == 'Project'
                    ? AppIcons.time
                    : active == 'Waste'
                    ? AppIcons.del
                    : AppIcons.tap
                }
                onPress={() => setActive('Estate')}
              />
            </View>
            <View
              style={{
                height: RF(100),

                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '5%',
              }}>
              <H1 color={Colors.appPrimary} size={RF(8)}>
                {active == 'Estate'
                  ? 'Update Estate Levy'
                  : active == 'Waste'
                  ? 'Update Waste Bill'
                  : active == 'Project'
                  ? 'Update New Project Fee'
                  : 'Update Water Bill'}
              </H1>
            </View>
          </View>

          <View style={{width: '100%', paddingLeft: '5%', marginTop: RF(50)}}>
            <InputText
              placeholder={'Previous  Amount'}
              ic={AppIcons.n}
              width={'95%'}
            />
          </View>

          <View style={{width: '100%', paddingLeft: '5%', marginTop: RF(20)}}>
            <InputText
              placeholder={'New Amount'}
              ic={AppIcons.n}
              width={'95%'}
            />
          </View>

          <Button
            marginTop={30}
            text={'Submit'}
            width={'90%'}
            marginLeft={'5%'}
            onPress={() => setVisible(false)}
          />

          <Button
            marginTop={10}
            width={'90%'}
            text={'Cancel'}
            marginLeft={'5%'}
            bg={Colors.appWhite}
            borderWidth={1}
            color={'#A986A7'}
            onPress={() => setVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Payment;
