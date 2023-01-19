import React, {useState, useEffect} from 'react';
import {Container} from '../../helper';
import {StatusBar, View, Image} from 'react-native';
import {H1, P} from '../../../helper/element';
import {Button} from '../../../component/button';
import {Colors, RF, RR} from '../../../helper/constants';
import {AppIcons} from '../../../helper/images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InputText from '../../../components/textInput';
import WalletCard from '../../../components/walletCard';
import CheckBox from 'react-native-check-box';
import TransactionCard from '../../../components/transactionCard';
import CircleImage from '../../../components/circleImage';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Service = props => {
  const [visible, setVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [service, setService] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: RR(15),
        paddingHorizontal: '5%',
        backgroundColor: '#E5E5E5',
      }}>
      <View
        style={{
          width: '39%',
          alignItems: 'flex-start',
          marginLeft: '0%',
        }}>
        <H1
          style={{
            color: Colors.appPrimary,
            fontSize: 15,
            marginLeft: '3%',
          }}>
          Services
        </H1>
      </View>
      <View
        style={{
          height: '10%',
          width: '100%',

          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setService(false)}>
          {!service ? (
            <View
              style={{
                height: RF(50),
                width: RF(130),
                flexDirection: 'row',
                backgroundColor: '#F2F2F2',
                paddingLeft: RF(3),
                borderRadius: RF(20),
                alignItems: 'center',
              }}>
              <CircleImage icon={AppIcons.person} />
              <View style={{marginLeft: RF(0)}}>
                <H1 size={RF(7)} color={Colors.appPrimary}>
                  {' '}
                  Company
                </H1>
              </View>
            </View>
          ) : (
            <CircleImage icon={AppIcons.person} />
          )}
        </TouchableOpacity>
        <View style={{marginLeft: RF(10)}}>
          <TouchableOpacity onPress={() => setService(true)}>
            {service ? (
              <View
                style={{
                  height: RF(50),
                  width: RF(130),
                  flexDirection: 'row',
                  backgroundColor: '#F2F2F2',
                  paddingLeft: RF(3),
                  borderRadius: RF(20),
                  alignItems: 'center',
                }}>
                <CircleImage icon={AppIcons.service} />
                <View style={{marginLeft: RF(0)}}>
                  <H1 size={RF(7)} color={Colors.appPrimary}>
                    Servicemen 
                  </H1>
                </View>
              </View>
            ) : (
              <CircleImage icon={AppIcons.service} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: RF(10),

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {service ? (
          <P color={Colors.appTextBlack} size={RF(10)}>
            Servicemen posted for hire
          </P>
        ) : (
          <P color={Colors.appTextBlack} size={RF(10)}>
            Properties posted for engagement
          </P>
        )}
      </View>
      {service ? (
        <View
          style={{
            width: '100%',
            height: RF(90),
            backgroundColor: 'rgba(217, 217, 217, 0.21)',
            marginTop: RF(55),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '10%',
              height: RF(90),
              paddingVertical: 8,
            }}>
            <CheckBox
              style={{
                flex: 1,
              }}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              checkBoxColor={'#A3A1A1'}
            />
          </View>

          <View
            style={{
              width: '70%',
              height: RF(90),
              paddingLeft: 2,
              paddingVertical: 8,
            }}>
            <P size={RF(10)}>Biodun Ade </P>

            <H1 size={RF(10)}>Mason</H1>
          </View>

          <View
            style={{
              width: '20%',
              height: RF(90),
              paddingVertical: 8,
            }}>
            <P size={RF(10)} color={Colors.appPrimary}>
              60 Days{' '}
            </P>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            height: RF(90),
            backgroundColor: 'rgba(217, 217, 217, 0.21)',
            marginTop: RF(55),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '10%',
              height: RF(90),
              paddingVertical: 8,
            }}>
            <CheckBox
              style={{
                flex: 1,
              }}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              checkBoxColor={'#A3A1A1'}
            />
          </View>

          <View
            style={{
              width: '70%',
              height: RF(90),
              paddingLeft: 2,
              paddingVertical: 8,
            }}>
            <P size={RF(10)}>Arena Investment </P>

            <H1 size={RF(10)}>Legal Services</H1>
          </View>

          <View
            style={{
              width: '20%',
              height: RF(90),
              paddingVertical: 8,
            }}>
            <P size={RF(10)} color={Colors.appPrimary}>
              60 Days{' '}
            </P>
          </View>
        </View>
      )}

      <View
        style={{
          width: '100%',
          height: RF(90),
          backgroundColor: 'rgba(217, 217, 217, 0.21)',
          marginTop: RF(15),
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '10%',
            height: RF(90),
            paddingVertical: 8,
          }}>
          <CheckBox
            style={{
              flex: 1,
            }}
            onClick={() => {
              setSelection(!isSelected);
            }}
            isChecked={isSelected}
            checkBoxColor={'#A3A1A1'}
          />
        </View>

        <View
          style={{
            width: '70%',
            height: RF(90),
            paddingLeft: 2,
            paddingVertical: 8,
          }}>
          <P size={RF(10)}>Arena Investment </P>

          <H1 size={RF(10)}>Legal Services</H1>
        </View>

        <View
          style={{
            width: '20%',
            height: RF(90),
            paddingVertical: 8,
          }}>
          <P size={RF(10)} color={Colors.appPrimary}>
            60 Days{' '}
          </P>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: RF(90),
          backgroundColor: 'rgba(217, 217, 217, 0.21)',
          marginTop: RF(15),
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '10%',
            height: RF(90),
            paddingVertical: 8,
          }}>
          <CheckBox
            style={{
              flex: 1,
            }}
            onClick={() => {
              setSelection(!isSelected);
            }}
            isChecked={isSelected}
            checkBoxColor={'#A3A1A1'}
          />
        </View>

        <View
          style={{
            width: '70%',
            height: RF(90),
            paddingLeft: 2,
            paddingVertical: 8,
          }}>
          <P size={RF(10)}>Arena Investment </P>

          <H1 size={RF(10)}>Legal Services</H1>
        </View>

        <View
          style={{
            width: '20%',
            height: RF(90),
            paddingVertical: 8,
          }}>
          <P size={RF(10)} color={Colors.appPrimary}>
            60 Days{' '}
          </P>
        </View>
      </View>
    </View>
  );
};

export default Service;
