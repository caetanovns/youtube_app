import { Image, Text, View } from "react-native";

export default function VideoContainer({ title, views, date, publisher }: { title: string, views: string, date: string, publisher: string }) {
    return (
        <View>
            <Image
                style={{ width: '100%', height: 215 }}
                source={require('../../assets/images/thumb.png')} />


            <View style={{ padding: 10, flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                <Image source={require('../../assets/images/user_publisher.png')} style={{ width: 36, height: 36, borderRadius: 20, marginTop: 10 }} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '600', marginTop: 5 }}>{title}</Text>
                    <Text style={{ color: 'gray' }}>{views} {date}</Text>
                </View>

                <Image source={require('../../assets/images/options.png')} style={{ width: 24, height: 24, marginTop: 10 }} />
            </View>

            

        </View>
    );
}