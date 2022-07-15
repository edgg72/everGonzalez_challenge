import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React, { useContext } from 'react'
import PokemonContext from '../context/Pokemon/PokemonContext'

const SinglePokemon = () => {

  const { selectedPokemon, searchRequest } = useContext(PokemonContext);

  return (
    <View>
      <View style={styles.card} >
        <View>
          <Image
            style={styles.image}
            source={{ uri: selectedPokemon.sprites.other["official-artwork"].front_default }}
          />
        </View>
        <View>
          <Text style={styles.cText}>
            {`# ${selectedPokemon.id}`}
          </Text>
          <Text style={styles.cText}>
            {selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}
          </Text>
        </View>

        {/* EXTRA INFO */}
        <View style={styles.info} >
          <View  >
            <Text style={styles.subtitle} >Types</Text>
            {selectedPokemon.types.map(type => <Text key={type.type.name}>{type.type.name}</Text>)}
          </View>
          <View>
            <Text style={styles.subtitle} >Peso</Text>
            <Text>{selectedPokemon.weight}</Text>
          </View>
          {/* SPRITES */}

          <View>
            <Text style={styles.subtitle}>Sprites</Text>
            <View style={styles.sprites} >
              <Image
                style={styles.sprite}
                source={{ uri: selectedPokemon.sprites.back_default }}
              />
              <Image
                style={styles.sprite}
                source={{ uri: selectedPokemon.sprites.front_default }}
              />
              <Image
                style={styles.sprite}
                source={{ uri: selectedPokemon.sprites.back_shiny }}
              />
              <Image
                style={styles.sprite}
                source={{ uri: selectedPokemon.sprites.front_shiny }}
              />
            </View>
          </View>

          {/* MOVIMIENTOS */}

          <View>
            <Text style={styles.subtitle}>Movimientos</Text>
            <Text>
              {selectedPokemon.moves.slice(0, 3).map((move) => `${move.move.name}, `)}
            </Text>
          </View>
        </View>

      </View>
      <Button title='Cerrar' onPress={() => searchRequest(null)} />
    </View>
  )
}

export default SinglePokemon;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 7,
    margin: 5,
    width: 260,
    borderWidth: 2,
    borderColor: '#787770',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#D5D5D5'
  },
  image: {
    width: 100,
    height: 130,
    resizeMode: 'contain'
  },
  sprite: {
    width: 50,
    height: 65,
    resizeMode: 'contain'
  },
  sprites: {
    flexDirection: 'row'
  },
  cText: {
    fontWeight: 'bold',
    color: '#484743',
    textAlign: 'center'
  },
  subtitle: {
    fontWeight: 'bold',
    marginTop: 5,
    color: '#484743'
  },
  info: {
    width: '100%',
    textAlign: 'left'
  }
})