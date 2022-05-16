import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExploreScreen from "./screens/ExploreScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ExploreScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
