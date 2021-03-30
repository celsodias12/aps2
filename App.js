import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {normalize} from './utils/normalizeFont';

export default App = () => {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [turno, setTurno] = useState('');

  let data = [
    {
      nome: 'Sistemas de Informação',
      valor: 800,
      periodos: 8,
    },
    {
      nome: 'Administração',
      valor: 1500,
      periodos: 10,
    },
    {
      nome: 'Psicologia',
      valor: 900,
      periodos: 6,
    },
  ];

  let qtdePeriodos = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      for (let j = 1; j <= data[i].periodos; j++) {
        if (data[i].nome == curso) {
          qtdePeriodos.push({periodo: j});
        }
      }
    }
  }

  let periodosPicker = qtdePeriodos.map((item, value) => {
    return (
      <Picker.Item
        key={value}
        label={`${item.periodo}`}
        value={`${item.periodo}`}
      />
    );
  });

  let cursosPicker = data.map((item, value) => {
    return <Picker.Item key={value} label={item.nome} value={item.nome} />;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Logo</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.form}>
          <Text style={styles.text}>Selecione os parâmetros:</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />

          <View style={styles.picker}>
            <Picker
              selectedValue={curso}
              onValueChange={(itemValue, itemIndex) => {
                setCurso(itemValue);
                setPeriodo('');
              }}>
              <Picker.Item label="Curso" value="" />
              {cursosPicker}
            </Picker>
          </View>

          <View style={styles.picker}>
            <Picker
              selectedValue={periodo}
              onValueChange={(itemValue, itemIndex) => {
                setPeriodo(itemValue);
              }}>
              <Picker.Item label="Período" value="" />
              {periodosPicker}
            </Picker>
          </View>

          <View style={styles.picker}>
            <Picker
              selectedValue={turno}
              onValueChange={(itemValue, itemIndex) => setTurno(itemValue)}>
              <Picker.Item label="Turno" value="" />
              <Picker.Item label="Diurno" value="Diurno" />
              <Picker.Item label="Noturno" value="Noturno" />
            </Picker>
          </View>
        </View>

        <View style={styles.data}>
          <Text style={styles.title}>Informações inseridas:</Text>
          <View style={styles.keyValue}>
            <Text style={styles.key}>Nome:</Text>
            <Text style={styles.value}>{nome}</Text>
          </View>
          <View style={styles.keyValue}>
            <Text style={styles.key}>Curso:</Text>
            <Text style={styles.value}>{curso}</Text>
          </View>
          <View style={[styles.keyValue, {flex: 1}]}>
            <View style={[styles.row, {flex: 1}]}>
              <Text style={styles.key}>Período:</Text>
              <Text style={styles.value}>{periodo}</Text>
            </View>
            <View style={[styles.row, {flex: 1}]}>
              <Text style={styles.key}>Turno:</Text>
              <Text style={styles.value}>{turno}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'blue',
  },
  textHeader: {
    color: 'white',
    marginLeft: '5%',
    fontSize: normalize(24),
  },
  body: {
    flex: 1,
    margin: '8%',
  },
  form: {},
  text: {
    marginBottom: '5%',
    fontSize: normalize(16),
  },
  textInput: {
    padding: '4%',
    borderWidth: 1,
    borderColor: 'black',
  },
  picker: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '3%',
  },
  title: {
    fontSize: normalize(16),
    marginTop: '5%',
  },
  data: {
    flex: 1,
  },
  keyValue: {
    flexDirection: 'row',
    marginVertical: '3%',
  },
  key: {
    marginRight: '6%',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
});
