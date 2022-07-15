import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import PokemonContext from '../context/Pokemon/PokemonContext';


const Input = () => {

  const [searchText, setSearchText] = useState('')
  const { searchRequest } = useContext(PokemonContext)

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Buscar'
        value={searchText}
        onChangeText={(e) => setSearchText(e)}
        onSubmitEditing={(e) => { searchRequest(e.target.value) }}
        onBlur={() => setSearchText('')}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});