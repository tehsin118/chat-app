import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//Screens
import { ChatSection } from "./modules/screens/chatSection";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <ChatSection />
      <StatusBar style="auto" />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
