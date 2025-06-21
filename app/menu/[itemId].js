import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useFavourites } from '../../context/FavouritesContext';

export default function ShowItem() {
  const ITEM = useLocalSearchParams();
  const { toggleFavourite, isFavourite } = useFavourites();
  
  if (!ITEM || !ITEM.id) {
    return (
      <View style={styles.container}>
        <Text style={styles.itemName}>Item not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.itemImage}
        source={{
          uri: ITEM.image || 'https://cdn.vectorstock.com/i/500p/42/11/creative-concept-of-brain-food-symbolized-vector-53434211.jpg',
        }}
      />
      <Text style={styles.itemName}>{ITEM.name}</Text>
      <Text style={styles.itemPrice}>${ITEM.price}</Text>
      <Text style={styles.itemDescription}>{ITEM.description}</Text>
      <Button
        title={isFavourite(ITEM.id) ? 'Unsave from Favourites' : 'Save to Favourites'}
        onPress={() => toggleFavourite(ITEM)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    gap: 5,
  },
  itemImage: {
    width: 200,
    height: 200,
    flexGrow: 0,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
  itemName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    textAlign: 'center',
    color: 'green',
    fontSize: 16,
    fontWeight: 600,
  },
  itemDescription: {
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 20,
  },
});
