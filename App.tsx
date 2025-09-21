import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/navigation";
import { Provider as PaperProvider } from "react-native-paper";
import "./src/services/mock";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
