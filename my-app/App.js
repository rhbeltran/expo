// Instalar las dependencias
// npm install @react-navigation/native @react-navigation/stack react-native-paper

import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de validación y autenticación
    if (username && password) {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Por favor, introduce un nombre de usuario y una contraseña');
    }
  };

  return (
    <View>
      <TextInput
        label="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin}>
        Iniciar sesión
      </Button>
    </View>
  );
}