import VideoContainer from "@/src/components/video_container";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Feed() {

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

  const playlist = [
    {
      title: 'The Beauty of Existence',
      views: '19,210,251 views',
      date: 'Jul • 1, 2016',
      publisher: 'The Beauty of Existence',
    },
    {
      title: 'Journey Through Silence',
      views: '8,543,120 views',
      date: 'Aug • 12, 2017',
      publisher: 'Inner Peace Studio',
    },
    {
      title: 'Moments of Reflection',
      views: '5,982,334 views',
      date: 'Jan • 5, 2018',
      publisher: 'Calm Mind',
    },
    {
      title: 'Nature and Serenity',
      views: '12,774,903 views',
      date: 'Mar • 22, 2019',
      publisher: 'Nature Bliss',
    },
    {
      title: 'Awakening the Soul',
      views: '9,120,456 views',
      date: 'Jun • 14, 2020',
      publisher: 'Soul Awakening',
    },
    {
      title: 'Meditative Sounds',
      views: '15,334,876 views',
      date: 'Sep • 9, 2021',
      publisher: 'Zen Vibes',
    },
    {
      title: 'Echoes of the Universe',
      views: '7,998,210 views',
      date: 'Nov • 30, 2022',
      publisher: 'Cosmic Flow',
    },
    {
      title: 'Peaceful Mind Journey',
      views: '11,456,782 views',
      date: 'Feb • 18, 2023',
      publisher: 'Mindful Path',
    },
    {
      title: 'Harmony Within',
      views: '6,789,543 views',
      date: 'Apr • 7, 2024',
      publisher: 'Inner Harmony',
    },
    {
      title: 'Stillness and Light',
      views: '4,321,098 views',
      date: 'Jan • 10, 2025',
      publisher: 'Light Within',
    }
  ];

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
