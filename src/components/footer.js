import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Products Bela Vista - 2021</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#606060',
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    margin: 16,
  },
});

export default Footer;
