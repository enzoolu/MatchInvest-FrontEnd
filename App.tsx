import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/Welcome";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import AccountType from "./src/screens/AccountType";
import Investor from "./src/screens/Investor";
import PickAssessor from "./src/screens/PickAssessor";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PickAssessor" component={PickAssessor} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AccountType" component={AccountType} />
        <Stack.Screen name="Investor" component={Investor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
