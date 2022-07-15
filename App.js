
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './containers/MainContainer';
import PokemonState from './context/Pokemon/PokemonState';


export default function App() {

  return (
    <PokemonState>
      <View style={styles.outerContainer} >
        <Text style={styles.title}>Listado de Pokemon</Text>
        <View style={styles.container}>
          <MainContainer />
        </View>
      </View>
    </PokemonState>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 3
  },
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    padding: 8,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  }
});
