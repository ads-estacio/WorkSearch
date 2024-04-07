import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Login from './Telas/Login'; 
import Cadastro from './Telas/Cadastro'; 
import Curriculo from './Telas/Curriculo'; 
import Vagas from './Telas/Vagas';
import IncluirVagas from './Telas/IncluirVagas'; 
import Filtro from './Telas/Filtro'; 
import RedefinirSenha from './Telas/RedefinirSenha'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tela principal com as tabs
function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Vagas" 
        component={Vagas} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="work" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Filtros" 
        component={Filtro} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="filter-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Curriculo" 
        component={Curriculo} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="description" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Incluir Vagas" 
        component={IncluirVagas} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainStack} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
