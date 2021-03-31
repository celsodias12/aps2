import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {normalize} from './utils/normalizeFont';

export default App = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [turno, setTurno] = useState('');
  const [renda, setRenda] = useState(0);
  const [bolsa, setBolsa] = useState(false);
  const [submit, setSubmit] = useState(false);

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

  function submitData() {
    setSubmit(false);
    Alert.alert('Alerta!', 'Tem certeza que deseja enviar os dados?', [
      {
        text: 'NÃo',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'SIM',
        onPress: () => {
          if (nome && idade && sexo && curso && periodo && turno && renda) {
            Alert.alert(
              'Dados enviados com sucesso!',
              'Confira abaixo os dados inseridos.',
            );
            setSubmit(true);
          } else {
            Alert.alert(
              'Erro ao enviar os dados',
              'Todos os campos são obrigatórios.',
            );
          }
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Logo</Text>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.form}>
            <Text style={styles.text}>Selecione os parâmetros:</Text>

            <TextInput
              style={styles.textInput}
              onChangeText={setNome}
              placeholder="Digite seu nome"
              value={submit ? '' : nome}
            />

            <TextInput
              style={[styles.textInput, {marginTop: '3%'}]}
              onChangeText={setIdade}
              placeholder="Idade"
              maxLength={2}
              keyboardType="numeric"
              value={submit ? '' : idade}
            />

            <View style={styles.picker}>
              <Picker
                selectedValue={submit ? '' : sexo}
                onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
                <Picker.Item label="Sexo" value="" />
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino" />
              </Picker>
            </View>

            <View style={styles.picker}>
              <Picker
                selectedValue={submit ? '' : curso}
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
                selectedValue={submit ? '' : periodo}
                onValueChange={(itemValue, itemIndex) => {
                  setPeriodo(itemValue);
                }}>
                <Picker.Item label="Período" value="" />
                {periodosPicker}
              </Picker>
            </View>

            <View style={styles.picker}>
              <Picker
                selectedValue={submit ? '' : turno}
                onValueChange={(itemValue, itemIndex) => setTurno(itemValue)}>
                <Picker.Item label="Turno" value="" />
                <Picker.Item label="Diurno" value="Diurno" />
                <Picker.Item label="Noturno" value="Noturno" />
              </Picker>
            </View>

            <View style={styles.keyValue}>
              <View style={styles.keyValueRenda}>
                <Text style={styles.keyForm}>Renda:</Text>
                <Text style={styles.valueForm}>
                  R$ {submit ? 0 : renda.toFixed(0)}
                </Text>
              </View>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={5000}
                disabled={submit ? true : false}
                minimumTrackTintColor="green"
                onValueChange={value => {
                  setRenda(value);
                }}
                value={submit ? 0 : renda}
              />
            </View>

            <View style={styles.keyValue}>
              <Text style={styles.keyForm}>Já ganhou bolsa:</Text>
              <Switch
                trackColor={{false: '#767577', true: 'green'}}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setBolsa}
                value={submit ? false : bolsa}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.btnSubmit}
            activeOpacity={0.7}
            onPress={() => {
              submitData();
            }}>
            <Text style={styles.txtBtnSubmit}>Salvar</Text>
          </TouchableOpacity>

          {submit ? (
            <View style={styles.data}>
              <Text style={styles.title}>Informações inseridas:</Text>
              <View style={styles.keyValue}>
                <Text style={styles.key}>Nome:</Text>
                <Text style={styles.value}>{nome}</Text>
              </View>
              <View style={styles.keyValue}>
                <Text style={styles.key}>Idade:</Text>
                <Text style={styles.value}>{idade}</Text>
              </View>
              <View style={styles.keyValue}>
                <Text style={styles.key}>Sexo:</Text>
                <Text style={styles.value}>{sexo}</Text>
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
              <View style={styles.keyValue}>
                <Text style={styles.key}>Renda:</Text>
                <Text style={styles.value}>{renda}</Text>
              </View>
              <View style={styles.keyValue}>
                <Text style={styles.key}>bolsa:</Text>
                <Text style={styles.value}>{renda ? 'sim' : 'não'}</Text>
              </View>
            </View>
          ) : (
            <View />
          )}
        </View>
      </ScrollView>
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
  keyForm: {
    marginRight: '3%',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  valueForm: {
    fontSize: normalize(14),
  },
  keyValueRenda: {
    flexDirection: 'row',
    width: '30%',
  },
  slider: {
    flex: 1,
  },
  btnSubmit: {
    marginTop: '6%',
    backgroundColor: 'blue',
    borderRadius: 8,
    marginHorizontal: '20%',
    padding: '5%',
  },
  txtBtnSubmit: {
    textAlign: 'center',
    fontSize: normalize(18),
    color: 'white',
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
