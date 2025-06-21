import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MenuTab() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Today's Menu</Text>
      <FlatList
        data={MENU_ITEMS}
        renderItem={({item}) => <Item id={item.id} image={item.image} title={item.name} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Item = ({id, title, image}) => (
  <Pressable
    onPress={() =>
      router.navigate({
        pathname: '/menu/[itemId]',
        params: { id: id }
      })
    }
  >
    <View style={styles.item}>
      <Image
        style={styles.itemImage}
        source={{
          uri: image || 'https://cdn.vectorstock.com/i/500p/42/11/creative-concept-of-brain-food-symbolized-vector-53434211.jpg',
        }}
      />
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  </Pressable>
);

const MENU_ITEMS = [
  {
    id: 'kottu',
    name: 'Chicken Kottu',
    price: 550,
    image: 'https://art.whisk.com/image/upload/fl_progressive,h_649,w_1760,c_limit/v1582142517/recipe/63748663188716771fcf86b10e45c193.jpg',
    description: 'Hot griddled roti shredded with chicken, egg & veggies',
  },
  {
    id: 'veg-roti',
    name: 'Vegetable Roti',
    price: 120,
    image: 'https://art.whisk.com/image/upload/fl_progressive,h_649,w_1760,c_limit/v1686602703/recipe/268b27b7b836c17d1e176502c2b7198d.jpg',
    description: 'Tri-folded roti stuffed with mildly spiced vegetables',
  },
  {
    id: 'milk-tea',
    name: 'Milk Tea (Hot)',
    price: 80,
    image: 'https://art.whisk.com/image/upload/fl_progressive,h_649,w_1760,c_limit/v1656494977/recipe/961190fd641ef90b9d2745f69ae92f27.jpg',
    description: 'Ceylon black tea brewed strong with condensed milk',
  },
  {
    id: 'ice-coffee',
    name: 'Iced Coffee',
    price: 180,
    image: 'https://art.whisk.com/image/upload/fl_progressive,h_560,w_560,c_fill/v1656858068/v3/user-recipes/blq8qirgsd9zaopbvsq3.jpg',
    description: 'Chilled sweet coffee with a hint of cardamom',
  },
  {
    id: 'fish-bun',
    name: 'Fish Bun',
    price: 140,
    image: 'https://art.whisk.com/image/upload/fl_progressive,h_560,w_560,c_fill/v1642417064/recipe/50e23993959e58e542777fda1cdd8c2c.jpg',
    description: 'Soft bun filled with spicy fish sambol',
  },
  {
    id: 'string-hoppers',
    name: 'String Hoppers (5 pcs)',
    price: 200,
    image: 'https://revi.b-cdn.net/wp-content/uploads/2017/01/idiyappam-vert2.jpg.webp',
    description: 'Steamed rice-flour nests served with coconut sambol',
  },
  {
    id: 'egg-hopper',
    name: 'Egg Hopper',
    price: 110,
    image: 'https://www.foodrepublic.com/img/gallery/how-to-make-a-sri-lankan-egg-hopper/intro-import.webp',
    description: 'Crispy bowl-shaped appa with a runny egg center',
  },
  {
    id: 'pol-roti',
    name: 'Pol Roti & Lunu Miris',
    price: 130,
    image: 'https://www.theflavorbender.com/wp-content/uploads/2020/05/Pol-Roti-SM-6714.jpg',
    description: 'Coconut flatbread with spicy onion–chilli relish',
  },
  {
    id: 'cbp',
    name: 'Chocolate Biscuit Pudding',
    price: 250,
    image: 'https://art.whisk.com/image/upload/fl_progressive,h_560,w_560,c_fill/v1704845372/recipe/78f22228a87393dcb77b9adf860a29ee.jpg',
    description: 'Layered Marie biscuits soaked in chocolate cream',
  },
  {
    id: 'faluda',
    name: 'Rose Faluda',
    price: 220,
    image: 'https://art.whisk.com/image/upload/fl_progressive,h_560,w_560,c_fill/v1675245792/recipe/6b86659f850a810f9b5006feff002480.jpg',
    description: 'Rose-flavoured milkshake with ice cream & basil seeds',
  },
];

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
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
    fontSize: 16,
    flexGrow: 2,
  },
  itemImage: {
    width: 50,
    height: 50,
    flexGrow: 0,
  },
});
