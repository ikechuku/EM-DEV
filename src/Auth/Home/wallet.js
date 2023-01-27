import React, { useState, useEffect } from 'react';
import { Container } from '../../helper';
import { StatusBar, View, Image } from 'react-native';
import { H1, P } from '../../../helper/element';
import { Button } from '../../../component/button';
import { Colors, RF, RR } from '../../../helper/constants';
import { AppIcons } from '../../../helper/images';
import { axiosCalls } from '../../../helper/api';
import InputText from '../../../components/textInput';
import WalletCard from '../../../components/walletCard';
import TransactionCard from '../../../components/transactionCard';

export const Wallet = props => {
  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const getWalletBalance = async () => {
    try {
      console.warn('this is the wallet Balance ??>>>>');
      const res = await axiosCalls('/wallet/balance', 'GET');
      // console.warn('this is the admin list', res.data);
      // console.log('this is the Wallet balance]>>', res.data.balance);
      setBalance(res.data.balance.value);
      // console.warn('this is the admin list>>', res.data.admins.length);
    } catch (e) {
      console.warn('get Wallet Balance error...', e);
    }
  };
  const getTransactions = async () => {
    try {
      console.warn('this is the wallet Transactions ??>>>>');
      const res = await axiosCalls('/estate/wallet/transaction', 'GET');
      // console.warn('this is the admin list', res.data);
      console.log('this is the Wallet Transactions]>>', res.data);
      setTransactions(res.data.data);
      // console.warn('this is the admin list>>', res.data.admins.length);
    } catch (e) {
      console.warn('get Wallet Transactions error...', e);
    }
  };

  useEffect(() => {
    getWalletBalance();
  }, []);
  useEffect(() => {
    getTransactions();
  }, []);

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
      <WalletCard amount={`₦${balance}`} height={RF(180)} width={'95%'} />

      <View style={{ marginTop: RF(20) }}>
        <H1 color={Colors.appPrimary} size={RF(10)}>
          TRANSACTIONS HISTORY
        </H1>
      </View>
      {transactions?.length > 0 ? transactions?.map((item) => {
        return (

          <View style={{ marginTop: RF(20) }}>
            <TransactionCard
              height={RF(60)}
              width={'100%'}
              name={item.name}
              type={item.type}
              amount={item.amount}
              createdOn={item.createdOn}
            />
          </View>
        )
      }) : <View></View>}

    </View>
  );
};

export default Wallet;
