import React, { useEffect, useContext } from 'react';
import { Text, View, Button, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import PokemonContext from '../context/Pokemon/PokemonContext';

const PokemonList = () => {

  const { pokemonList, selectedPokemon, currentPage, getPokemons, nextPage, previousPage, searchRequest } = useContext(PokemonContext);


  useEffect(() => {
    if (!selectedPokemon) {
      getPokemons()
    }
  }, [currentPage])

  return (
    <>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={pokemonList}
        renderItem={({ item }) => (
          <Pressable onPress={() => searchRequest(item.name)} >
            <View style={styles.card}  >
              <View>
                <Image
                  style={styles.image}
                  source={{ uri: item.sprites.other["official-artwork"].front_default }}
                />
              </View>
              <View>
                <Text style={styles.cText}>
                  {`# ${item.id}`}
                </Text>
                <Text style={styles.cText}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
      <View style={styles.buttons} >
        <Button
          onPress={previousPage}
          title="< Atrás"
          disabled={currentPage >= 5 ? false : true}
        />
        <Button onPress={nextPage} title="Siguiente >" />
      </View>
    </>
  )

}

export default PokemonList;

const cardColors = ['#E0F0EE', '#EEE0F0', '#EAF0E0', '#F0E6E0'];

const styles = StyleSheet.create({
  card: {
    padding: 7,
    margin: 5,
    width: 160,
    height: 180,
    borderWidth: 2,
    borderColor: '#787770',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: cardColors[Math.floor(Math.random() * (3 - 0 + 1) + 0)]
  },
  image: {
    width: 100,
    height: 130,
    resizeMode: 'contain'
  },
  cText: {
    fontWeight: 'bold',
    color: '#484743',
    textAlign: 'center'
  },
  buttons: {
    height: 150,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});