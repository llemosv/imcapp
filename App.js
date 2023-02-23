import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  function calculaImc() {
    if (!altura || !peso) {
      setResultado('Por favor, informe sua altura e seu peso!');
      return;
    }
    const imc = (peso / (altura * altura)).toFixed(2);

    console.log(imc)

    if (imc < 18.5) setResultado(`Seu IMC é abaixo do peso normal`)
    if (imc >= 18.5 && imc <= 24.9) setResultado(`Seu IMC é normal.`)
    if (imc >= 25 && imc <= 29.9) setResultado(`Seu IMC é excesso de peso.`)
    if (imc >= 30 && imc <= 34.9) setResultado(`Seu IMC é obesidade classe 1.`)
    if (imc >= 35 && imc <= 39.9) setResultado(`Seu IMC é obesidade classe 2.`)
    if (imc >= 40) setResultado(`Seu IMC é obesidade classe 3.`)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Informe a sua altura (m)"
          keyboardType="numeric"
          value={altura}
          onChangeText={(value) => {
            if (value < 0) {
              alert(
                'Informe uma altura válida.'
              );
            } else {
              setAltura(value)
            }
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Informe o seu peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={(value) => {
            if (value < 0) {
              alert(
                'Informe um peso válido.'
              );
            } else {
              setPeso(value)
            }
          }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculaImc}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353b48',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f5f6fa',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f5f6fa',
    backgroundColor: '#f5f6fa',
    borderRadius: 4,
    padding: 8,
    width: 200,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#fbc531',
    borderRadius: 4,
    padding: 8,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f5f6fa',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 24,
    color: '#f5f6fa',
  },
});