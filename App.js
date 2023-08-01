import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { BottomNavigationRouter } from "./src/components/Common/BottomNavigationRouter";
import { extendTheme, NativeBaseProvider } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      600: "#f59e0b",
      800: "#eb9a0e",
    },
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <BottomNavigationRouter />
      <StatusBar />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
