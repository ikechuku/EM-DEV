import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import {Colors, RF} from './helper/constants';
import {AppIcons} from './helper/images';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',

        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.appPrimary,
          height: '7%',
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 7,
          marginTop: 3,
        }}>
        <Text style={{color: Colors.appWhite, fontFamily: 'bold'}}>Submit</Text>
      </TouchableOpacity>
      {/* card */}
      <View
        style={{
          backgroundColor: Colors.appLightbrown,
          width: '80%',
          height: '18%',
          marginTop: 10,
          borderRadius: 5,
        }}>
        <View
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2%',
          }}>
          <Text
            style={{
              color: Colors.apptext,
              fontFamily: 'bold',
              textAlign: 'center',
            }}>
            Are sure you want delete this
          </Text>
          <Text
            style={{
              color: Colors.apptext,
              fontFamily: 'bold',
              textAlign: 'center',
            }}>
            Admin?
          </Text>
        </View>
        {/* button */}
        <View
          style={{
            width: '100%',
            height: '50%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.appThickbrown,
              height: RF(35),
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginTop: '-5%',
              marginLeft: '3%',
            }}>
            <Text style={{color: Colors.appWhite, fontFamily: 'bold'}}>
              cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.appPrimary,
              height: RF(35),
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginTop: '-5%',
              marginLeft: '-8%',
            }}>
            <Text style={{color: Colors.appWhite, fontFamily: 'bold'}}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* settings */}
      <View
        style={{
          backgroundColor: Colors.appRed,
          width: '60%',
          marginTop: '5%',
          height: RF(40),
          flexDirection: 'row',
          borderRadius: 5,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        {/* img */}
        <View
          style={{
            marginLeft: '5%',

            width: '13%',
            height: RF(30),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={{height: 19.5, width: 17}} source={AppIcons.setting} />
        </View>
        <View
          style={{
            backgroundColor: Colors.appRed,
            width: '59%',
            height: RF(30),
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{color: Colors.appWhite, fontSize: 10, fontWeight: 'bold'}}>
            Configure Emergency Details
          </Text>
        </View>
      </View>
      {/* button */}
      <View
        style={{
          backgroundColor: Colors.appRed,
          width: '6.5%',
          height: RF(25),
          marginTop: '5%',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: Colors.appWhite, fontSize: 10}}>12</Text>
      </View>

      {/* shortcard */}
      <View
        style={{
          backgroundColor: Colors.appCard,
          width: '30%',
          height: RF(200),
          marginTop: '5%',
          borderRadius: 5,
        }}>
        <View
          style={{
            width: '100%',
            height: RF(30),
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: Colors.appRed,
              width: '20%',
              height: RF(25),
              marginTop: '5%',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '14%',
            }}>
            <Text style={{color: Colors.appWhite, fontSize: 10}}>12</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: RF(45),
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: '-5%',
          }}>
          <View
            style={{
              backgroundColor: Colors.appThickbrown,
              width: '29%',
              height: RF(37),
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '15%',
            }}>
            <Image style={{height: 19.5, width: 17}} source={AppIcons.admin} />
          </View>
        </View>
        <View
          style={{
            height: RF(30),
            width: '100%',
            marginTop: '13%',
          }}>
          <Text
            style={{
              color: Colors.appPrimary,
              fontSize: 19,
              fontWeight: 'bold',
              marginLeft: '18%',
            }}>
            Admin
          </Text>
        </View>
        <View
          style={{
            height: RF(30),
            width: '100%',
            marginTop: '10%',
          }}>
          <Text
            style={{
              color: Colors.apptext,
              fontSize: 10,

              marginLeft: '18%',
            }}>
            Add and manage new residence
          </Text>
        </View>
      </View>
      {/* card */}
      {/* <View
        style={{
          backgroundColor: Colors.appCard,
          width: '80%',
          height: RF(130),
          marginTop: '2%',
          borderRadius: 6,
        }}>
        <View
          style={{
            width: '80%',
            height: RF(20),
            marginTop: '3%',

            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: Colors.apptext,
              fontSize: 15,

              marginLeft: '7%',
            }}>
            Wallet Balance
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: RF(55),
            marginTop: '3%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              backgroundColor: Colors.appPrimary,
              width: '9%',
              height: RF(33),
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '5%',
            }}>
            <Image style={{height: 19.5, width: 17}} source={AppIcons.thread} />
          </View>
          <View
            style={{
              width: '39%',
              height: RF(33),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '3%',
            }}>
            <Text
              style={{
                color: Colors.appPrimary,
                fontSize: 17,
                marginLeft: '3%',
                fontWeight: 'bold',
              }}>
              N20,412,000
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.appBrown,
              height: RF(32),
              width: '25%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
              marginLeft: '8%',
            }}>
            <Text style={{color: Colors.appWhite, fontFamily: 'bold'}}>
              View
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
      {/* topcircle */}
      <View
        style={{
          backgroundColor: Colors.appLightbrown,
          width: '50%',
          height: RF(60),
          marginTop: '2%',
          borderRadius: 30,

          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: Colors.appLightbrown,
            width: '70%',
            height: RF(28),
            marginLeft: '7%',
          }}>
          <Text
            style={{
              color: Colors.appPrimary,
              fontFamily: 'bold',
              fontSize: 18,
            }}>
            Add New Admin
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.appPrimary,
            width: '16.5%',
            height: RF(35),
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '2%',
          }}>
          <Image style={{height: 19.5, width: 17}} source={AppIcons.thread} />
        </View>
      </View>
      {/* textinput */}

      <TextInput
        style={{
          marginTop: '3%',
          backgroundColor: 'yellow',
          width: '80%',
          height: RF(39),
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        placeholder=" Full name"
      />
      <View
        style={{
          height: RF(28),
          width: '13%',
          marginTop: '-8%',
          marginRight: '69%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{height: 19.5, width: 17}} source={AppIcons.at} />
      </View>
    </View>
  );
};
{"notificationId":null,"isUsingDefaultPassword":false,"photo":"","supplierId":217,"wallet":{"id":5259,"accountReference":"","accountName":null,"currencyCode":"NG","accountNumber":null,"bankName":null,"bankCode":null,"isActive":true,"balance":300,"createdOn":"2022-05-06T15:17:07.315189","bvnValidated":false,"createdOnPaystack":true,"hasPin":true,"address":null,"fraudSuspected":false,"canWithdraw":false},"id":177,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmbHlib3l0ZWNoQGdtYWlsLmNvbSIsImp0aSI6IjkzYjNlNWQ3LWZhM2YtNDE5Zi1hOWViLTIzZjAzNjk4YjE0OSIsImlkIjoiMTc3IiwibmFtZSI6IkZyYW5rIDk5Iiwicm9sZSI6IkRpc3BhdGNoZXIiLCJuYmYiOjE2NTU3NTIxMjYsImV4cCI6MTY4NzI4ODEyNiwiaXNzIjoiQ3lkZW5lIChBZG1pbikiLCJhdWQiOiJDeWRlbmUgKEFkbWluKSJ9.Pqm2VBaOFMwHAm17eJ5trfCbl1Q_egZLT6lp5GYn6OU","lastName":"99","firstName":"Frank","phone":"09038734910","email":"flyboytech@gmail.com"}
export default App;
