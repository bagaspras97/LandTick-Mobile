import React, {Component} from 'react';

import {View, StyleSheet, ImageBackground} from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Title,
  FooterTab,
  Footer,
  Text,
  Content,
  Form,
  Item,
  Label,
  Input,
  DatePicker,
} from 'native-base';

import Head from './HeadFoot/Header';
import Foot from './HeadFoot/Footer';

export default class Home extends Component {
  render() {
    return (
      <>
        <Container style={styles.Container}>
          <Head />
          <Content>
            <View style={styles.banner}>
              <ImageBackground
                source={require('../img/kereta.jpg')}
                style={styles.imgBanner}>
                <Text style={styles.bannerTitle}>
                  Dapatkan Harga Terbaik Hanya di
                </Text>
                <Text style={styles.bannerTitle1}>LandTick</Text>
              </ImageBackground>
            </View>
            <Text style={styles.titleForm}>Mau Kemana?</Text>
            <View style={styles.content}>
              <Form style={styles.formLogin}>
                <Item stackedLabel last style={styles.itemAsal}>
                  <Label>Asal</Label>
                  <Input />
                </Item>
                <Item stackedLabel last style={styles.itemTujuan}>
                  <Label>Tujuan</Label>
                  <Input />
                </Item>
                <Item stackedLabel last style={styles.itemTglBerangkat}>
                  <Label>Tanggal Berangkat</Label>
                  <DatePicker
                    placeHolderText="                                 "
                    style={styles.date}
                  />
                </Item>
                <Button style={styles.btnCariTiket}>
                  <Text style={styles.textCariTiket}>Cari Tiket</Text>
                </Button>
              </Form>
            </View>
          </Content>
          <Foot />
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#f2f2f2',
  },
  banner: {
    Color: '#49b3e8',
  },
  imgBanner: {
    width: '100%',
    height: '100%',
  },
  banner: {
    height: 150,
    width: '100%',
    backgroundColor: '#49b3e8',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  bannerTitle: {
    textAlign: 'center',
    color: '#02151f',
  },
  bannerTitle1: {
    textAlign: 'center',
    color: '#02151f',
    fontSize: 19,
  },
  titleForm: {
    textAlign: 'center',
  },
  date: {
    width: '100%',
  },
  itemTglBerangkat: {
    alignItems: 'flex-start',
  },
  btnCariTiket: {
    width: '25%',
    backgroundColor: 'yellow',
    borderRadius: 8,
    position: 'relative',
    top: 20,
    left: 300,
  },
  textCariTiket: {
    color: '#02151f',
  },
  content: {
    marginTop: 5,
    height: 300,
    width: '100%',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'black',
  },
  title: {
    position: 'relative',
    left: 52,
    color: '#49b3e8',
  },
});
