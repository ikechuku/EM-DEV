import React, {useState, useEffect} from 'react';

import {StatusBar, View, Image, TouchableOpacity} from 'react-native';

import {Colors, RF, RR} from '../../../helper/constants';

import {color} from 'react-native-reanimated';
import {H1, Hr, P} from '../../../helper/element';
import Notification from '../../../components/notification';
import {AppIcons} from '../../../helper/images';
import ConfigButton from '../../../components/configButton';
import BalanceCard from '../../../components/balanceCard';
import MainCard from '../../../components/mainCard';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import CircleImage from '../../../components/circleImage';
import InputText from '../../../components/textInput';
import {Button} from '../../../component/button';

export const Home = props => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [editInfo, setEditInfo] = useState('');

  const admin = () => {
    setVisible(true);
    setActive('addNew');
  };

  const edit = () => {
    setEditInfo('');
    setActive('edit');
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
            height: '100%',
            width: '75%',
            paddingLeft: '5%',
            justifyContent: 'center',
          }}>
          <H1>Olawaiye Estate</H1>
        </View>

        <View
          style={{
            height: '100%',
            width: '25%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',

              justifyContent: 'center',
            }}>
            <Notification count={10} />
          </View>

          <View
            style={{
              height: '100%',
              width: '60%',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: RF(50), width: RF(50)}}
              source={AppIcons.bell}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            height: RF(70),
            width: '100%',
            justifyContent: 'center',
            paddingLeft: '5%',
          }}>
          <ConfigButton />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            paddingLeft: '5%',
            marginTop: '2%',
          }}>
          <H1 color={Colors.appPrimary}>Payment Summary</H1>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            height: RF(170),
            paddingLeft: '5%',
          }}>
          <BalanceCard amount={'N20,412,000'} height={RF(160)} width={'95%'} />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            paddingLeft: '5%',
            marginTop: '6%',
          }}>
          <H1 color={Colors.appPrimary}>Quick Links</H1>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            paddingVertical: 10,
            flexDirection: 'row',
          }}>
          <MainCard
            text={'Admin'}
            des={'Add and manage Estate executives'}
            count={12}
            icon={AppIcons.admin}
            onPress={() => admin()}
          />
          <MainCard
            text={'House'}
            des={'Add new houses '}
            count={2}
            icon={AppIcons.house}
          />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            paddingVertical: 10,
            flexDirection: 'row',
          }}>
          <MainCard
            text={'Residence'}
            des={'Add and manage new residence'}
            count={10}
            icon={AppIcons.resident}
          />
          <MainCard
            text={'Forum'}
            des={'Send message to all residence.'}
            count={1}
            icon={AppIcons.forum}
          />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            paddingVertical: 10,
            flexDirection: 'row',
            marginBottom: '10%',
          }}>
          <MainCard
            text={'Voting System'}
            des={'Add and manage candidates'}
            count={12}
            icon={AppIcons.voting}
          />
        </View>

        <View style={{height: '20%'}}></View>
      </ScrollView>

      <Modal
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}>
        {active != 'edit' ? (
          <View
            style={{
              height: RF(700),
              width: '100%',

              backgroundColor: Colors.appWhite,
            }}>
            <TouchableOpacity
              style={{marginTop: 15, marginLeft: 20}}
              onPress={() => setVisible(false)}>
              <Image
                style={{height: 17.5, width: 15}}
                source={AppIcons.cancel}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: RF(50),
                flexDirection: 'row',
                marginTop: RF(0),
                paddingLeft: '30%',
              }}>
              <View
                style={{
                  height: RF(60),
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity>
                  {active == 'addNew' ? (
                    <View
                      style={{
                        height: RF(50),
                        width: RF(220),
                        flexDirection: 'row',
                        backgroundColor: '#F2F2F2',
                        paddingLeft: RF(20),
                        borderRadius: RF(20),
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingRight: RF(10),
                      }}>
                      <View style={{marginRight: RF(0)}}>
                        <H1 size={RF(7)} color={Colors.appPrimary}>
                          {' '}
                          Add New Admin
                        </H1>
                      </View>
                      <CircleImage
                        icon={AppIcons.admin}
                        bg={Colors.appPrimary}
                      />
                    </View>
                  ) : (
                    <CircleImage
                      icon={AppIcons.admin}
                      onPress={() => setActive('addNew')}
                    />
                  )}
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: RF(15)}}>
                  {!active ? (
                    <View
                      style={{
                        height: RF(50),
                        width: RF(220),
                        flexDirection: 'row',
                        backgroundColor: '#F2F2F2',
                        paddingLeft: RF(25),
                        borderRadius: RF(20),
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingRight: RF(10),
                      }}>
                      <View style={{marginRight: RF(0)}}>
                        <H1 size={RF(7)} color={Colors.appPrimary}>
                          {' '}
                          View Admins
                        </H1>
                      </View>
                      <CircleImage
                        icon={AppIcons.guest}
                        bg={Colors.appPrimary}
                      />
                    </View>
                  ) : (
                    <CircleImage
                      icon={AppIcons.guest}
                      onPress={() => setActive(false)}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: RF(60),
                flexDirection: 'row',
                paddingLeft: '8%',
              }}>
              <View
                style={{
                  height: RF(70),

                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <CircleImage
                  bg={Colors.appPrimary}
                  icon={active == 'addNew' ? AppIcons.admin : AppIcons.guest}
                />
              </View>
              <View
                style={{
                  height: RF(70),

                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '5%',
                }}>
                <H1 color={Colors.appPrimary} size={RF(8)}>
                  {active == 'addNew' ? 'Add New Admin' : 'View Admins'}
                </H1>
              </View>
            </View>
            {active == 'addNew' ? (
              <View>
                <View
                  style={{width: '100%', paddingLeft: '5%', marginTop: RF(10)}}>
                  <InputText
                    placeholder={'Full Name'}
                    ic={AppIcons.person}
                    height={45}
                    width={'95%'}
                  />
                </View>

                <View
                  style={{width: '100%', paddingLeft: '5%', marginTop: RF(20)}}>
                  <InputText
                    placeholder={'Phone Number'}
                    ic={AppIcons.phone}
                    height={45}
                    width={'95%'}
                  />
                </View>

                <View
                  style={{width: '100%', paddingLeft: '5%', marginTop: RF(20)}}>
                  <InputText
                    placeholder={'Email Address'}
                    ic={AppIcons.at}
                    height={45}
                    width={'95%'}
                  />
                </View>

                <View
                  style={{width: '100%', paddingLeft: '5%', marginTop: RF(20)}}>
                  <InputText
                    placeholder={'Exco Role'}
                    ic={AppIcons.exco}
                    height={45}
                    width={'95%'}
                  />
                </View>

                <View
                  style={{width: '100%', paddingLeft: '5%', marginTop: RF(20)}}>
                  <InputText
                    placeholder={'EPasscode'}
                    ic={AppIcons.pass}
                    height={45}
                    width={'95%'}
                  />
                </View>

                <Button
                  marginTop={30}
                  text={'Submit'}
                  width={'90%'}
                  marginLeft={'5%'}
                  height={50}
                  onPress={() => setVisible(false)}
                />
              </View>
            ) : (
              <View
                style={{
                  width: '100%',
                  marginTop: RF(20),
                  height: '70%',
                  paddingHorizontal: '8%',
                }}>
                <TouchableOpacity onPress={() => edit()}>
                  <View
                    style={{
                      width: '100%',
                      paddingLeft: '5%',
                      marginTop: RF(5),
                      backgroundColor: '#F2F2F2',
                      height: 80,
                      paddingHorizontal: '5%',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: '50%',
                        height: '100%',
                        paddingTop: 15,
                        paddingLeft: 10,
                      }}>
                      <H1 size={RF(7)} color={'#565656'}>
                        Chairman
                      </H1>
                    </View>
                    <View
                      style={{
                        width: '50%',
                        height: '100%',
                        paddingTop: 15,
                        paddingLeft: 10,
                      }}>
                      <P size={RF(7)} color={'#565656'}>
                        Avis Charles
                      </P>
                      <P size={RF(7)} color={'#565656'}>
                        avisc@infoabc.com
                      </P>
                      <P size={RF(7)} color={'#565656'}>
                        08022222222
                      </P>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      paddingLeft: '5%',
                      marginTop: RF(10),
                      backgroundColor: '#F2F2F2',
                      height: 80,
                      paddingHorizontal: '5%',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: '50%',
                        height: '100%',
                        paddingTop: 15,
                        paddingLeft: 10,
                      }}>
                      <H1 size={RF(7)} color={'#565656'}>
                        V. Chairman
                      </H1>
                    </View>
                    <View
                      style={{
                        width: '50%',
                        height: '100%',
                        paddingTop: 15,
                        paddingLeft: 10,
                      }}>
                      <P size={RF(7)} color={'#565656'}>
                        Avis Charles
                      </P>
                      <P size={RF(7)} color={'#565656'}>
                        avisc@infoabc.com
                      </P>
                      <P size={RF(7)} color={'#565656'}>
                        08022222222
                      </P>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View
            style={{
              height: RF(700),
              width: '100%',
              backgroundColor: Colors.appWhite,
              paddingHorizontal: '5%',
            }}>
            <TouchableOpacity
              style={{marginTop: 15}}
              onPress={() => setVisible(false)}>
              <Image
                style={{height: 17.5, width: 15}}
                source={AppIcons.cancel}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: RF(50),
                flexDirection: 'row',
                marginTop: RF(0),
                paddingLeft: '50%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <H1 size={RF(7)} color={'#5E38AF'}>
                Admin
              </H1>

              <View style={{marginLeft: 20}}>
                <CircleImage icon={AppIcons.admin} />
              </View>
              <View style={{marginLeft: 5}}>
                <CircleImage icon={AppIcons.guest} />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: RF(60),
                flexDirection: 'row',
                paddingLeft: '2%',
              }}>
              <View
                style={{
                  height: RF(70),

                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <CircleImage bg={Colors.appPrimary} icon={AppIcons.adminedit} />
              </View>
              <View
                style={{
                  height: RF(70),

                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '5%',
                }}>
                <Hr color={Colors.appPrimary} size={RF(8)}>
                  View Admin Details
                </Hr>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'pink',
                width: '100%',
                height: '65%',
                marginTop: 10,
              }}></View>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default Home;
