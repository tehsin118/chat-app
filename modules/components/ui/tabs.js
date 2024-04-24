import { Pressable, Text, View } from "react-native";
import EntypoIcon from "@expo/vector-icons/Entypo";
import { colorSchema } from "../../utils/colors";
export function Tabs() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        backgroundColor: "white",
        width: "70%",
        left: 60,
        flexDirection: "row",
        borderRadius: 99999,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Pressable>
        <EntypoIcon name="home" size={25} />
      </Pressable>
      <Pressable>
        <EntypoIcon color={colorSchema.blueColor} name="home" size={25} />
      </Pressable>
      <Pressable>
        <EntypoIcon name="home" size={25} />
      </Pressable>
    </View>
  );
}
