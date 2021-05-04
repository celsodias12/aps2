import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import axios from './src/services/api';
import Card from './src/components/Card';

export default function App() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      await axios({
        url: '/items',
        method: 'GET',
      })
        .then(res => {
          setData(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getItems();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="black" style={styles.loading} />
    );
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Card items={data} />
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.buttonFinalize} activeOpacity={0.7}>
          <Text style={styles.textButtonFinalize}>FINALIZAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSubmit}
          activeOpacity={0.7}
          onPress={() => {
            Alert.alert(
              'Pedido efetuado com sucesso!',
              'Seu pedido será entregue nas próximas horas.',
            );
            AsyncStorage.removeItem('quantity');
          }}>
          <Image
            source={{
              uri:
                'https://images-ext-2.discordapp.net/external/j8Cem0xGa1v9j5BG5YjYBsd_uk6GsKrmmh6EMXPFGq4/%3Fcaw%3D800/https/stat.ameba.jp/user_images/20181004/23/plusmarket-kanda/e9/8d/p/o0656058914278182582.png?width=535&height=480',
            }}
            style={styles.image}
          />
          <Text style={styles.textButtonSubmit}>Realizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonFinalize: {
    backgroundColor: '#c7c7c7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
  },
  textButtonFinalize: {
    fontSize: 20,
  },
  buttonSubmit: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#8CD55D',
    alignItems: 'center',
    padding: 5,
    marginBottom: '5%',
    marginHorizontal: '2%',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: '5%',
  },
  textButtonSubmit: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});
