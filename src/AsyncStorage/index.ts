import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "@matchinvest_token";
const USER_ID = "@user_id";
const USER_TYPE = "@user_type";

export async function saveToken(token: string) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function saveUserId(userId: string) {
  await AsyncStorage.setItem(USER_ID, userId);
}

export async function saveUserType(userType: string) {
  await AsyncStorage.setItem(USER_TYPE, userType);
}

export async function getUserType() {
  const userType = await AsyncStorage.getItem(USER_TYPE);
  return userType;
}

export async function getUserId() {
  const userId = await AsyncStorage.getItem(USER_ID);
  return userId;
}

export async function getToken() {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
}
