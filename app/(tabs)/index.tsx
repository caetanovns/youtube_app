import VideoContainer from "@/src/components/video_container";
import { usePlaylist } from "@/src/hooks/usePlaylist";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Feed() {

  const [list, setList] = useState([]);

  const { playlist, fetchPlaylist } = usePlaylist();

  const itens = [
    'All',
    'Mixes',
    'Music',
    'Movies',
    'Live',
    'Gaming',
    'News',
    'Sports',
    'Learning',
    'Fashion & Beauty',
  ]

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={sytles.topContainer}>
        <Image source={require('../../assets/images/logo.png')} />
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Image source={require('../../assets/images/screencast.png')} />
          <Image source={require('../../assets/images/notification.png')} />
          <Image source={require('../../assets/images/search.png')} />
          <Image source={require('../../assets/images/user.png')} />
        </View>
      </View>
      <View style={sytles.categoriesContainer}>
        <View style={sytles.itemExploreView}>
          <Image source={require('../../assets/images/explore_icon.png')} />
          <Text style={{ fontWeight: '600' }}>Explorar</Text>
        </View>

        <FlatList
          data={itens}
          horizontal
          renderItem={({ item }) => (
            <View style={sytles.itemView}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      <FlatList
        data={playlist}
        renderItem={({ item }) => <VideoContainer title={item.title} views={item.views} date={item.date} publisher={item.publisher} />}
        keyExtractor={(item, index) => index.toString()}
      />

    </SafeAreaView>
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
    gap: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  itemView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 5,
    backgroundColor: '#ECECEC',
    borderColor: '#CECECE',
    borderWidth: 1,
  },
  itemExploreView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#ECECEC',
    borderColor: '#CECECE',
  }
});
