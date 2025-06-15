import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "@matchinvest_token";

export async function saveToken(token: string) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function getToken() {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
}
