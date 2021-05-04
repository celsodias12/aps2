/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function card({items}) {
  const [quantity, setQuantity] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const nomeInput = useRef(null);

  useEffect(() => {
    async function getLocalStorage() {
      const localQuantity = JSON.parse(await AsyncStorage.getItem('quantity'));
      setSelectedQuantity({...localQuantity});
    }

    function novoNome() {
      nomeInput.current.focus();
    }

    novoNome();
    getLocalStorage();
  }, []);

  const handleQuantity = (field, value) => {
    setQuantity(state => ({...state, [field]: value}));
  };

  const submit = async () => {
    const localQuantity = JSON.parse(await AsyncStorage.getItem('quantity'));

    setSelectedQuantity({...localQuantity, ...quantity});
    AsyncStorage.setItem('quantity', JSON.stringify(quantity));
  };

  console.log(selectedQuantity);

  return (
    <FlatList
      data={items}
      keyExtractor={item => item._id}
      renderItem={({item}) => (
        <View style={styles.card}>
          <View style={styles.viewImage}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <View style={styles.description}>
            <View style={styles.header}>
              <Text style={styles.title}>{item.description}</Text>
              <Text style={styles.subtitle}>
                Quantity:
                <Text style={styles.bold}>
                  {' '}
                  {selectedQuantity[item._id] || 0}
                </Text>
              </Text>
            </View>
            <View style={styles.body}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={v => handleQuantity(item._id, v)}
                ref={nomeInput}
              />
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => {
                  submit();
                }}>
                <Text style={styles.textButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#efefef',
    marginBottom: '5%',
  },
  viewImage: {},
  image: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },
  description: {
    flex: 1,
    marginLeft: '5%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 16,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    width: 70,
  },
  button: {
    marginLeft: '15%',
    backgroundColor: '#8CD55D',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  textButton: {
    fontSize: 35,
    color: 'white',
  },
});
