import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={sytles.topContainer}>
        <Image source={require('../assets/images/logo.png')} />
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Image source={require('../assets/images/screencast.png')} />
          <Image source={require('../assets/images/notification.png')} />
          <Image source={require('../assets/images/search.png')} />
          <Image source={require('../assets/images/user.png')} />
        </View>
      </View>
      <View style={sytles.categoriesContainer}>
        <Text>Explore</Text>
        <Text> | </Text>
        <Text>All</Text>
        <Text>Mixes</Text>
        <Text>Music</Text>
        <Text>Movies</Text>
      </View>
    </>
  );
}

const sytles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
  }
});
