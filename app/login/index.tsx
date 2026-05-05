import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function Login() {

  const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <Button title="Voltar" onPress={() => router.navigate("/")} />
    </div>
  );
}