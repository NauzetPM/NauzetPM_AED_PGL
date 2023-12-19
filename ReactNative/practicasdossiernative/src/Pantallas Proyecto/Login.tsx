import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => {
        console.log('Iniciando sesión...');
        navigation.navigate('Main');
      }}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
 },
 button: {
    width: '80%',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 5,
 },
 buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
 },
 registerButton: {
    width: '80%',
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 10,
 },
 registerButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
 },
});

export default LoginScreen;