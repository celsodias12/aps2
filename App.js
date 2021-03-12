import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frase: '',
      image: '',
      imgBookOpen:
        'https://media.discordapp.net/attachments/819026805762555914/819027728727670844/unnamed.png',
      frases: [
        {
          nome: 'Arroz',
          image:
            'https://cdn.pensador.com/img/imagens/pe/ns/pensador_legendas_de_fotos_01.jpg',
        },
        {
          nome: 'Feijão',
          image:
            'https://i.pinimg.com/originals/39/70/d2/3970d2a113a439a136deea2e55728479.jpg',
        },
        {
          nome: 'Detergente',
          image:
            'https://i.pinimg.com/originals/76/c8/d5/76c8d57f4538f35ba266135c657f43a2.jpg',
        },
        {
          nome: 'teste',
          image:
            'https://i.pinimg.com/474x/8a/b0/4b/8ab04bf101c7330da052b734f1870200.jpg',
        },
        {
          nome: 'caldo',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTausQqPhhjYO9wJzOiVKDM2gRxhfSu7vzQ&usqp=CAU',
        },
        {
          nome: 'comida',
          image:
            'https://pics.me.me/evite-pessoas-que-so-querem-sua-companhia-quando-se-sent-17211043.png',
        },
      ],
    };
  }
  randomPhrase() {
    let number = Math.floor(Math.random() * this.state.frases.length);

    this.setState({
      frase: this.state.frases[number].nome,
      image: this.state.frases[number].image,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{
            uri: this.state.image ? this.state.image : this.state.imgBookOpen,
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
    width: '100%',
    height: '30%',
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
