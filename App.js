import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import api from './src/services/api';

import Card from './src/components/Card';

export default App = props => {
  const [items, setItems] = useState('');

  useEffect(() => {
    api
      .get('/items')
      .then(res => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch(() => {
        alert('Erro ao exibir os itens');
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            item={{
              nome: item.description,
              perecivel: item.category,
              image: item.image,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
