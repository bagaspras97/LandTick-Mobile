import React, {Component} from 'react';

import {View, StyleSheet, ImageBackground} from 'react-native';
import {Header, Left, Button, Icon, Title, Body} from 'native-base';

export default class Head extends Component {
  render() {
    return (
      <>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>LandTick</Title>
          </Body>
        </Header>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
  title: {
    position: 'relative',
    left: 52,
    color: '#49b3e8',
  },
});
