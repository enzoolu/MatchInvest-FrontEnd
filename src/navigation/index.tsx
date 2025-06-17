import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import AccountType from "../screens/AccountType";
import Investor from "../screens/Investor";
import Assessor from "../screens/Assessor";
import InvestorDetails from "../screens/InvestorDetails";
import AssessorDetails from "../screens/AssessorDetails";
import PickAssessor from "../screens/PickAssessor";
import PickInvestor from "../screens/PickInvestor";
import Profile from "../screens/Profile";
import EditAccountInvestor from "../screens/EditAccountInvestor";
import EditAccountAssessor from "../screens/EditAccountAssessor";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
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
      <Stack.Screen name="PickInvestor" component={PickInvestor} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="EditAccountinvestors"
        component={EditAccountInvestor}
      />
      <Stack.Screen
        name="EditAccountassessors"
        component={EditAccountAssessor}
      />
    </Stack.Navigator>
  );
}
