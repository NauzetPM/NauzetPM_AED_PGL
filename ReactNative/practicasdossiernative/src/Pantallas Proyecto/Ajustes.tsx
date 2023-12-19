// Importa las dependencias necesarias
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  // Función para manejar el botón de retroceso
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      {/* Aquí puedes agregar diferentes ajustes y opciones */}
      <TouchableOpacity style={styles.option} onPress={() => console.log('Ajuste 1')}>
        <Text>Ajuste 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => console.log('Ajuste 2')}>
        <Text>Ajuste 2</Text>
      </TouchableOpacity>

      {/* Botón para regresar a la pantalla anterior */}
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Volver</Text>
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
  option: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  goBackButton: {
    width: '80%',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SettingsScreen;
