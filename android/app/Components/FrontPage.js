/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './Home';

import {withNavigation} from 'react-navigation';

import {Button, Text, Container, Form, Item, Label, Input} from 'native-base';

class FrontPage extends Component {
  tes = () => {
    alert('ini alert');
  };
  render() {
    return (
      <>
        <Container style={styles.Container}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.head}>
            <Text style={styles.title}> Landtick </Text>
          </View>
          <ImageBackground
            source={require('../img/train.png')}
            style={styles.img}
          />
          <Form style={styles.formLogin}>
            <Item stackedLabel last>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>

          <Button
            primary
            style={styles.btn_login}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text style={styles.login}>Login</Text>
          </Button>

          <Button bordered style={styles.btn_daftar}>
            <Text style={styles.daftar}>Daftar</Text>
          </Button>
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f2f2f2',
  },
  img: {
    position: 'relative',
    height: 100,
    width: 80,
    left: 175,
    top: 20,
  },
  head: {
    borderBottomWidth: 3,
    borderColor: '#d6d7da',
    height: 100,
  },
  title: {
    fontSize: 30,
    color: '#49b3e8',
    paddingTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  formLogin: {
    position: 'relative',
    top: 180,
    left: 38,
    width: '80%',
    borderTopWidth: 0.66666,
    borderColor: '#d9d5dc',
  },
  btn_login: {
    position: 'relative',
    top: 290,
    borderRadius: 10,
    width: '80%',
    left: 40,
    backgroundColor: '#49b3e8',
  },

  login: {
    position: 'relative',
    left: 135,
  },

  btn_daftar: {
    position: 'relative',
    top: 300,
    width: '80%',
    left: 40,
    borderRadius: 10,
    borderColor: '#49b3e8',
  },
  daftar: {
    position: 'relative',
    left: 128,
    color: '#49b3e8',
  },
});

export default withNavigation(FrontPage);
