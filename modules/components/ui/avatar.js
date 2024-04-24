import { View, Image, StyleSheet } from "react-native";
import { colorSchema } from "../../utils/colors";
export function Avatar({ imageUrl = "", active, dimensions }) {
  return (
    <View
      style={{
        position: "relative",
        height: dimensions?.height ? dimensions?.height : 60,
        width: dimensions?.width ? dimensions?.width : 60,
      }}
    >
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ height: "100%", width: "100%", borderRadius: 9999 }}
      />
      {active && (
        <View
          style={{
            borderRadius: 99999,
            backgroundColor: colorSchema.activeUserCircleColor,
            height: 15,
            width: 15,
            position: "absolute",
            bottom: 3,
            right: 1,
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  main: { position: "relative", width: 60, height: 60 },
});
