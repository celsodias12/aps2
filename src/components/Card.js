import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Components(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: props.item.image,
          }}
        />
      </View>
      <View style={styles.detailsSection}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {props.item.nome}
        </Text>
        <View style={styles.button}>
          <Text
            style={[
              styles.textButton,
              {
                backgroundColor:
                  props.item.perecivel == 'Perecivel' ? 'orange' : 'blue',
              },
            ]}>
            {props.item.perecivel}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    backgroundColor: '#AFF9EF',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewImage: {},
  image: {
    margin: '5%',
    width: 150,
    height: 100,
  },
  detailsSection: {
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
    color: 'black',
  },
  button: {},
  textButton: {
    borderRadius: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    padding: 5,
  },
});
