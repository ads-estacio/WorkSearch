import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const Filtro = () => {
  const [selected1, setSelected1] = React.useState([]);
  const [selected2, setSelected2] = React.useState([]);
  const [selected3, setSelected3] = React.useState([]);
  const [selected4, setSelected4] = React.useState([]);
  const [selected5, setSelected5] = React.useState([]);

  const data1 = [
    { key: '1', value: 'Auxiliar Administrativo' },
    { key: '2', value: 'Analista de Sistemas' },
    { key: '3', value: 'Vendedor' },
    { key: '4', value: 'Programador' },
    { key: '5', value: 'Recepcionista' },
    { key: '6', value: 'Caixa' },
    { key: '7', value: 'Jornalismo' },
  ];

  const data2 = [
    { key: '8', value: 'São Paulo - SP' },
    { key: '9', value: 'Belo Horizonte - MG' },
    { key: '10', value: 'Curitiba - PR' },
    { key: '11', value: 'Goiania - GO' },
    { key: '12', value: 'Salvador - BA' },
  ];

  const data3 = [
    { key: '13', value: 'A partir de R$ 1.000,00' },
    { key: '14', value: 'A partir de R$ 2.000,00' },
    { key: '15', value: 'A partir de R$ 3.000,00' },
    { key: '16', value: 'A partir de R$ 4.000,00' },
    { key: '17', value: 'A partir de R$ 5.000,00' },
  ];

  const data4 = [
    { key: '18', value: 'Presencial' },
    { key: '19', value: 'Home Office' },
    { key: '20', value: 'Híbrido' },
  ];

  const data5 = [
    { key: '21', value: 'CLT (Efetivo)' },
    { key: '22', value: 'Prestador de Serviço (PJ)' },
    { key: '23', value: 'Temporário' },
    { key: '24', value: 'Autônomo' },
    { key: '25', value: 'Free-Lancer' },
  ];

  const handleSelect1 = (selectedItems) => {
    setSelected1(selectedItems);
  };

  const handleSelect2 = (selectedItems) => {
    setSelected2(selectedItems);
  };

  const handleSelect3 = (selectedItems) => {
    setSelected3(selectedItems);
  };

  const handleSelect4 = (selectedItems) => {
    setSelected4(selectedItems);
  };

  const handleSelect5 = (selectedItems) => {
    setSelected5(selectedItems);
  };

    const handleFilterPress = () => {
    console.log('Filtrar');
  };


  return (
    <ImageBackground source={require('../assets/backgroundvagas.png')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.text}>Cargo</Text>
        <MultipleSelectList
          selected={selected1}
          setSelected={handleSelect1}
          data={data1}
          save="value"
          label=""
        />
        <Text style={styles.text}>Cidade, estado ou região</Text>
        <MultipleSelectList
          selected={selected2}
          setSelected={handleSelect2}
          data={data2}
          save="value"
          label=""
        />
        <Text style={styles.text}>Faixa salarial</Text>
        <MultipleSelectList
          selected={selected3}
          setSelected={handleSelect3}
          data={data3}
          save="value"
          label=""
        />
        <Text style={styles.text}>Modelo de Trabalho</Text>
        <MultipleSelectList
          selected={selected4}
          setSelected={handleSelect4}
          data={data4}
          save="value"
          label=""
        />
        <Text style={styles.text}>Tipo de contrato</Text>
        <MultipleSelectList
          selected={selected5}
          setSelected={handleSelect5}
          data={data5}
          save="value"
          label=""
        />
        <TouchableOpacity style={styles.button} onPress={handleFilterPress}>
          <Text style={styles.buttonText}>Filtrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#0cc0df',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',

  },
});

export default Filtro;
