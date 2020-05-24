import React from 'react';
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';

const Estilos = {
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 250,
    height: 140
  },
  botao: {
    backgroundColor: '#E84A4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  let num = Math.random();
  num = Math.floor(num * 5);
  const frases = [
    'A vida é um constante recomeço. Não se dê por derrotado e siga adiante. As pedras que hoje atrapalham sua caminhada amanhã enfeitarão a sua estrada.',
    'Diante dos muros da cidade, uma noite de inverno um homem que tinha sofrido muito gritou, desesperado:qual o sentido da vida? e o eco respondeu-lhe claramente: A vida!',
    'Ouse, arrisque, não desista jamais e saiba valorizar quem te ama, esses sim merecem seu respeito. Quanto ao resto, bom, ninguém nunca precisou de restos para ser feliz.',
    'Não tenha medo da mudança. Coisas boas se vão para que melhores possam vir.',
    'E mesmo que meus passos sejam falsos, mesmo que os meus caminhos sejam errados, mesmo que o meu jeito de levar a vida incomode, eu sei quem sou, e sei pelo que devo lutar. Se você acha que o meu orgulho é grande, é porque nunca viu o tamanho da minha fé!'
  ];
  Alert.alert(frases[num]);
};

export default class App extends React.Component {
  render() {
    const { view, logo, botao, botaoTexto } = Estilos;
    return (
      <View style={view}>
        <Image source={require('./assets/img/logo.png')} style={logo} />
        <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
          <Text style={botaoTexto}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}