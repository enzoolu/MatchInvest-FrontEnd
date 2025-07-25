import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/navigation";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
