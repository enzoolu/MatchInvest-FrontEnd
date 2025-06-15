import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import AccountType from "../screens/AccountType";
import Investor from "../screens/Investor";
import Assessor from "../screens/Assessor";
import InvestorDetails from "../screens/InvestorDetails";
import AssessorDetails from "../screens/AssessorDetails";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AccountType" component={AccountType} />
      <Stack.Screen name="Investor" component={Investor} />
      <Stack.Screen name="InvestorDetails" component={InvestorDetails} />
      <Stack.Screen name="Assessor" component={Assessor} />
      <Stack.Screen name="AssessorDetails" component={AssessorDetails} />
    </Stack.Navigator>
  );
}
