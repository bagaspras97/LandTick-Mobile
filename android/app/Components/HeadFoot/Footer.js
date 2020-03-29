import React, {Component} from 'react';

import {View, StyleSheet, ImageBackground} from 'react-native';
import {Footer, FooterTab, Button, Text} from 'native-base';

import {withNavigation} from 'react-navigation';

class Foot extends Component {
  render() {
    return (
      <>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <Text style={styles.textFooter}>Home</Text>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('MyTicket');
              }}>
              <Text style={styles.textFooter}>My Ticket</Text>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Payment');
              }}>
              <Text style={styles.textFooter}>Payment</Text>
            </Button>
          </FooterTab>
        </Footer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textFooter: {
    color: '#02151f',
  },
  footer: {
    backgroundColor: '#49b3e8',
  },
});

export default withNavigation(Foot);
