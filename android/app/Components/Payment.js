import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Body,
  Title,
  Left,
  Button,
} from 'native-base';
import Head from './HeadFoot/Header';
import Foot from './HeadFoot/Footer';

export default class Payment extends Component {
  render() {
    return (
      <>
        <Head />
        <Content>
          <View style={styles.content}>
            <Text style={styles.invoice}>Invoice</Text>

            <View style={styles.invoiceContent}>
              <Image
                source={require('../img/alert.png')}
                style={styles.alert}
              />
              <Text style={styles.textAlert}>
                Silakan melakukan pembayaran memalui M-Banking, E-Banking dan
                ATM Ke No.rek Yang Tertera.
              </Text>
              <Text style={styles.textAlert2}>No.rek: 1234567890</Text>
            </View>
            <View style={styles.uploadProof}></View>
            <Image
              source={require('../img/photo.png')}
              style={styles.chooseImg}
            />
            <Text style={styles.textUpload}>Upload Payment Proof</Text>
            <Text style={styles.rincianHarga}>Rincian Harga</Text>
            <View style={styles.detailHarga}>
              <Text style={styles.trainName}>Argo Wilis</Text>
              <Text style={styles.trainCost}>Rp 250000</Text>
              <View style={styles.line}></View>
              <Text style={styles.trainName}>Total</Text>
              <Text style={styles.trainCost}>Rp 250000</Text>
              <Button style={styles.btnPay}>
                <Text style={styles.textPay}>Bayar Sekarang</Text>
              </Button>
            </View>
          </View>
        </Content>
        <Foot />
      </>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: 600,
  },
  invoice: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  invoiceContent: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  alert: {
    height: 20,
    width: 20,
    position: 'relative',
    top: 25,
    left: 5,
  },
  textAlert: {
    paddingLeft: 30,
  },
  textAlert2: {
    paddingLeft: 30,
    paddingTop: 5,
  },
  uploadProof: {
    borderWidth: 1,
    borderColor: 'black',
    height: 130,
    width: 130,
    position: 'absolute',
    top: 153,
    left: 50,
  },
  chooseImg: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 200,
    left: 100,
  },
  textUpload: {
    position: 'absolute',
    top: 290,
    left: 45,
  },
  rincianHarga: {
    position: 'relative',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    left: 285,
  },
  detailHarga: {
    height: 100,
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    position: 'relative',
    alignSelf: 'flex-end',
    borderRadius: 5,
    right: 2,
  },
  line: {
    width: '100%',
    height: 0,
    borderWidth: 1,
    borderColor: 'black',
    position: 'relative',
    top: 10,
  },
  trainName: {
    paddingLeft: 8,
    paddingTop: 5,
    top: 15,
  },
  trainCost: {
    position: 'relative',
    top: -5,
    right: 5,
    alignSelf: 'flex-end',
  },
  btnPay: {
    position: 'absolute',
    top: 110,
    width: 120,
    borderRadius: 6,
    backgroundColor: 'yellow',
    left: 37,
  },
  textPay: {
    position: 'relative',
    left: 12,
    color: '#02151f',
  },
});
