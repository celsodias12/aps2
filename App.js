import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aberto: false,
      frase: '',
      imgBookClose:
        'https://media.discordapp.net/attachments/819026805762555914/819028457798893578/251-2515843_nice-red-book.png?width=731&height=480',
      imgBookOpen:
        'https://media.discordapp.net/attachments/819026805762555914/819027728727670844/unnamed.png',
      frases: [
        {
          nome: 'Arroz',
        },
        {
          nome: 'Feijão',
        },
        {
          nome: 'Detergente',
        },
        {
          nome: 'teste',
        },
        {
          nome: 'caldo',
        },
        {
          nome: 'comida',
        },
      ],
    };
  }
  randomPhrase() {
    let number = parseInt(Math.random() * (this.state.frases.length - 0));

    this.setState({
      frase: this.state.frases[number].nome,
      aberto: true,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{
            uri: this.state.aberto
              ? this.state.imgBookOpen
              : this.state.imgBookClose,
          }}
        />
        <Text styles={styles.txt}>
          {this.state.frase
            ? this.state.frase
            : 'Cliente no botão para gerar uma frase'}
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.randomPhrase();
          }}>
          <Text style={styles.txtBtn}>Gerar frase aleatória</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '50%',
    height: '20%',
    marginBottom: 30,
  },
  viewTxt: {},
  txt: {},
  btn: {
    marginTop: 30,
    width: '50%',
    height: '6%',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    color: 'orange',
  },
});

export default App;
