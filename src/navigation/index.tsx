import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
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
import React from "react";

const Drawer = createDrawerNavigator();

export function Routes() {
  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="AccountType" component={AccountType} />
      <Drawer.Screen name="Investor" component={Investor} />
      <Drawer.Screen name="Assessor" component={Assessor} />
      <Drawer.Screen name="InvestorDetails" component={InvestorDetails} />
      <Drawer.Screen name="AssessorDetails" component={AssessorDetails} />
      <Drawer.Screen name="PickAssessor" component={PickAssessor} />
      <Drawer.Screen name="PickInvestor" component={PickInvestor} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        name="EditAccountinvestors"
        component={EditAccountInvestor}
      />
      <Drawer.Screen
        name="EditAccountassessors"
        component={EditAccountAssessor}
      />
    </Drawer.Navigator>
  );
}
