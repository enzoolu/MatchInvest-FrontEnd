import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "@matchinvest_token";
const USER_ID = "@user_id";
const USER_TYPE = "@user_type";
const USER_LOGIN = "@user_login";
const USER_PASS = "@user_password";

export async function saveToken(token: string) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function saveUserId(userId: string) {
  await AsyncStorage.setItem(USER_ID, userId);
}

export async function saveUserType(userType: string) {
  await AsyncStorage.setItem(USER_TYPE, userType);
}

export async function saveUserLogin(userLogin: string, userPassword: string) {
  await AsyncStorage.setItem(USER_LOGIN, userLogin);
  await AsyncStorage.setItem(USER_PASS, userPassword);
}

export async function getUserType() {
  const userType = await AsyncStorage.getItem(USER_TYPE);
  return userType;
}

export async function getUserId() {
  const userId = await AsyncStorage.getItem(USER_ID);
  return userId;
}

export async function getUserLogin() {
  const userLogin = await AsyncStorage.getItem(USER_LOGIN);
  const userPassword = await AsyncStorage.getItem(USER_PASS);
  return { userLogin, userPassword };
}

export async function getToken() {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
}
