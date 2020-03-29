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

export default class MyTicket extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#f2f2f2'}}>
        <Head />
        <Content style={styles.container}>
          <View style={styles.content}>
            <View>
              <Text style={styles.trainName}>Argo Wilis</Text>
              <Text style={styles.class}>Eksekutif</Text>
              <Text style={styles.status}>Pending</Text>
            </View>
            <View style={styles.leftTitle}>
              <Text>Kereta Api</Text>
              <Text>Sabtu, 29 Februari 2099</Text>
            </View>
            <View style={styles.circleTop}></View>
            <View style={styles.line}></View>
            <View style={styles.circleBot}></View>
            <View style={styles.timeLeft}>
              <Text>05.00</Text>
              <Text>29 Februari 2020</Text>
            </View>
            <View style={styles.timeArrived}>
              <Text>10.00</Text>
              <Text>29 Februari 2020</Text>
            </View>
            <View style={styles.stasiunLeft}>
              <Text>Jakarta</Text>
              <Text>Stasiun Gambir</Text>
            </View>
            <View style={styles.stasiunArrived}>
              <Text>Surabaya</Text>
              <Text>Stasiun Surabaya</Text>
            </View>
            <View style={styles.lineBot}></View>
            <Button style={styles.btnPayNow}>
              <Text style={styles.textPayNow}>Bayar Sekarang</Text>
            </Button>
          </View>
        </Content>
        <Foot />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: 400,
    borderTopWidth: 1,
    borderColor: 'black',
  },
  trainName: {
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 10,
  },
  class: {
    paddingLeft: 10,
  },
  status: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  leftTitle: {
    position: 'absolute',
    right: 0,
    paddingRight: 10,
    paddingTop: 20,
  },
  line: {
    width: 0,
    height: 90,
    borderWidth: 1,
    borderColor: 'black',
    position: 'relative',
    left: 46,
    top: 5,
  },
  circleTop: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#49b3e8',
    position: 'relative',
    left: 40,
    marginTop: 30,
  },
  circleBot: {
    height: 15,
    width: 15,
    borderRadius: 10,
    position: 'relative',
    left: 40,
    marginTop: 10,
    backgroundColor: '#49b3e8',
  },
  timeLeft: {
    position: 'absolute',
    left: 65,
    top: 115,
  },
  timeArrived: {
    position: 'absolute',
    left: 65,
    top: 220,
  },
  stasiunLeft: {
    position: 'absolute',
    left: 225,
    top: 115,
  },
  stasiunArrived: {
    position: 'absolute',
    left: 225,
    top: 220,
  },
  lineBot: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'black',
    position: 'relative',
    top: 30,
  },
  btnPayNow: {
    position: 'relative',
    top: 55,
    width: '80%',
    left: 43,
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
  textPayNow: {
    color: '#02151f',
    position: 'relative',
    left: 122,
  },
});
