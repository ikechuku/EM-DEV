import React, {useState, useEffect} from 'react';
import {Container} from '../../helper';
import {StatusBar, View, Image} from 'react-native';
import {H1, P} from '../../../helper/element';
import {Button} from '../../../component/button';
import {Colors, RF, RR} from '../../../helper/constants';
import {AppIcons} from '../../../helper/images';

import InputText from '../../../components/textInput';
import WalletCard from '../../../components/walletCard';
import TransactionCard from '../../../components/transactionCard';

export const Wallet = props => {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: RR(15),
        paddingHorizontal: '5%',
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
          Wallet
        </H1>
      </View>
      <WalletCard amount={'₦30,000'} height={RF(180)} width={'95%'} />

      <View style={{marginTop: RF(20)}}>
        <H1 color={Colors.appPrimary} size={RF(10)}>
          TRANSACTIONS HISTORY
        </H1>
      </View>

      <View style={{marginTop: RF(20)}}>
        <TransactionCard height={RF(60)} width={'100%'} />
      </View>
      <View style={{marginTop: RF(20)}}>
        <TransactionCard height={RF(60)} width={'100%'} />
      </View>

      <View style={{marginTop: RF(20)}}>
        <TransactionCard height={RF(60)} width={'100%'} />
      </View>
    </View>
  );
};

export default Wallet;
