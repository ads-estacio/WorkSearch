import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleCadastro = () => {
    // Lógica de validação dos campos
    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Todos os campos são obrigatórios');
    } else if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem');
    } else {
      // Lógica de cadastro aqui
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Senha:', senha);
      // Limpar os campos após o cadastro
      setNome('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      setErro('');
    }
  };

  return (
    <ImageBackground source={require('../assets/background-sec.png')} style={styles.imageBackground}>
    <Image style={styles.image}
            source={require('../assets/JobFinder-semfundo.png')}
          />
      <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
          placeholderTextColor="black" // Cor do texto do placeholder

        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="black" // Cor do texto do placeholder
        />
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="black" // Cor do texto do placeholder
        />
        <TextInput
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholder="Confirmar Senha"
          secureTextEntry
          placeholderTextColor="black" // Cor do texto do placeholder
        />
        {erro ? <Text style={styles.erro}>{erro}</Text> : null}
        <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    imageBackground: {
    flex: 1,
    width: '100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
    position: 'absolute',
    top: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0cc0df'
  },
  container: {
    paddingHorizontal: 20,
    width: '100%',
    position: 'absolute',
    bottom: 160,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#0cc0df',
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Cadastro;
