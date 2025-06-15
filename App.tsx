import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import Welcome from "./src/screens/Welcome";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import AccountType from "./src/screens/AccountType";
import Investor from "./src/screens/Investor";
import InvestorDetails from "./src/screens/InvestorDetails";
import AssessorDetails from "./src/screens/AssessorDetails";
import PickAssessor from "./src/screens/PickAssessor";
import Assessor from "./src/screens/Assessor";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AccountType" component={AccountType} />
          <Stack.Screen name="Investor" component={Investor} />
          <Stack.Screen name="Assessor" component={Assessor} />
          <Stack.Screen name="InvestorDetails" component={InvestorDetails} />
          <Stack.Screen name="AssessorDetails" component={AssessorDetails} />
          <Stack.Screen name="PickAssessor" component={PickAssessor} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
