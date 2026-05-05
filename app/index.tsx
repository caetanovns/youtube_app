import { Redirect, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
      <Redirect href="/(tabs)" />
  );
}
