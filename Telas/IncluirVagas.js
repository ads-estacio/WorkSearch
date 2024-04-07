import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const IncluirVagas = () => {
  const [empresa, setEmpresa] = useState('');
  const [salario, setSalario] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleIncluirVaga = () => {
    // Lógica para incluir a vaga aqui
    console.log('Empresa:', empresa);
    console.log('Salário:', salario);
    console.log('Localização:', localizacao);
    console.log('Descrição:', descricao);
    // Limpar campos após inclusão da vaga
    setEmpresa('');
    setSalario('');
    setLocalizacao('');
    setDescricao('');
  };

  return (    
    <ImageBackground source={require('../assets/backgroundvagas.png')} style={styles.imageBackground}>
     <Image style={styles.image}
            source={require('../assets/JobFinder-semfundo.png')}
          />
      <View style={styles.container}>
        <Text style={styles.title}>Incluir Vaga</Text>
        <TextInput
          style={styles.input}
          placeholder="Empresa"
          placeholderTextColor="black"
          value={empresa}
          onChangeText={setEmpresa}
        />
        <TextInput
          style={styles.input}
          placeholder="Salário"
          placeholderTextColor="black"
          value={salario}
          onChangeText={setSalario}
        />
        <TextInput
          style={styles.input}
          placeholder="Localização"
          placeholderTextColor="black"
          value={localizacao}
          onChangeText={setLocalizacao}
        />
        <TextInput
          style={styles.description}
          placeholder="Descrição"
          placeholderTextColor="black"
          multiline
          value={descricao}
          onChangeText={setDescricao}
        />
        <TouchableOpacity style={styles.button} onPress={handleIncluirVaga}>
          <Text style={styles.buttonText}>Incluir Vaga</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0cc0df',
    textAlign: 'center',

  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  description: {
    width: '100%',
    height: 200,
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
    textAlign: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    position: 'absolute',
    top: -30,
  },
});

export default IncluirVagas;
