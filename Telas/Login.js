import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // Lógica de autenticação aqui
    // Se o login for bem-sucedido, navegue para a tela principal (com as tabs)
    navigation.navigate('Main');
  };

  const handleCadastro = () => {
    // Navega para a tela de cadastro
    navigation.navigate('Cadastro'); // Assumindo que 'Cadastro' é o nome da rota da tela de cadastro
  };

  const handleEsqueceuSenha = () => {
    // Navegar para a tela de redefinição de senha
    navigation.navigate('RedefinirSenha');
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Image style={styles.image}
            source={require('../assets/JobFinder-semfundo.png')}
          />
        <TextInput  
          placeholder="E-Mail" 
          style={styles.inputEmail} 
          placeholderTextColor="black" // Cor do texto do placeholder
        />
        <TextInput 
          placeholder="Senha" 
          secureTextEntry 
          style={styles.inputSenha} 
          placeholderTextColor="black" // Cor do texto do placeholder
        />
        <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={handleCadastro} style={styles.buttonCadastro}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEsqueceuSenha}>
        <Text style={styles.esqueceuSenhaText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
    position: 'absolute',
    top: 100,
  },
  inputEmail: {
    width:250,
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    position: 'absolute',
    top: 500,
  },
  inputSenha: {
    width:250,
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    position: 'absolute',
    top: 580,

  },
  buttonContainer: {
    width:170,
    backgroundColor: '#0cc0df', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 200,
  },
  buttonCadastro: {
    width:170,
    backgroundColor: '#0cc0df', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 160,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontWeight: 'bold', // Peso da fonte
    textAlign: 'center', // Alinhamento do texto
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
   esqueceuSenhaText: {
    color: 'red',
    top: 350,
    textDecorationLine: 'none', // Adiciona sublinhado ao texto para indicar que é clicável
  },
});
