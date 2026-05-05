import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs screenOptions={{
    headerShown: false
  }}>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="shorts" options={{ title: "Shorts" }} />
    <Tabs.Screen name="create" options={{ title: "Create" }} />
    <Tabs.Screen name="subscription" options={{ title: "Subscription" }} />
    <Tabs.Screen name="library" options={{ title: "Library" }} />
  </Tabs>
}
