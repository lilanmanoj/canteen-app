import { StatusBar } from 'expo-status-bar';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavourites } from '../context/FavouritesContext';

export default function Favourite() {
  const { savedItems } = useFavourites();

  if (!savedItems || savedItems.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.pageTitle}>Favourites</Text>
        <Text style={styles.pageSubTitle}>No Favourites Yet</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Favourites</Text>
      <FlatList
        data={savedItems}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Item = ({data}) => (
  <View style={styles.item}>
    <Image
      style={styles.itemImage}
      source={{
        uri: data.image || 'https://cdn.vectorstock.com/i/500p/42/11/creative-concept-of-brain-food-symbolized-vector-53434211.jpg',
      }}
    />
    <Text style={styles.itemTitle}>{data.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  pageTitle: {
    width: '100%',
    textAlign: 'left',
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pageSubTitle: {
    width: '100%',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#666',
    marginTop: 20,
    flexGrow: 2,
  },
  item: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#dcdde3',
    gap: 14,
    borderRadius: 8,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  itemTitle: {
    fontSize: 15,
    flexGrow: 2,
    fontWeight: 500,
  },
  itemImage: {
    width: 50,
    height: 50,
    flexGrow: 0,
  },
});
