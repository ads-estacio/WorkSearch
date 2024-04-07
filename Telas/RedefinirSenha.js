import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const RedefinirSenha = () => {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const handleRedefinirSenha = () => {
    // Lógica para redefinir a senha aqui
    console.log('Email:', email);
    console.log('Nova Senha:', novaSenha);
    // Limpar campos após redefinição de senha
    setEmail('');
    setNovaSenha('');
  };

  return (    
    <ImageBackground source={require('../assets/background-sec.png')} style={styles.imageBackground}>
     <Image style={styles.image}
            source={require('../assets/JobFinder-semfundo.png')}
          />
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a nova senha"
        placeholderTextColor="black"
        secureTextEntry
        value={novaSenha}
        onChangeText={setNovaSenha}
      />
      <TouchableOpacity style={styles.button} onPress={handleRedefinirSenha}>
        <Text style={styles.buttonText}>Redefinir Senha</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0cc0df'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0cc0df',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
   imageBackground: {
    flex: 1,
    width: '100%',
    height:'100%',
    resizeMode: 'cover',
  },
   image: {
    width: 400,
    height: 400,
    borderRadius: 10,
    position: 'absolute',
    top: 80,
  },
});

export default RedefinirSenha;

