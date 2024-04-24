import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar } from "./avatar";
import { colorSchema } from "../../utils/colors";
import Icon from "@expo/vector-icons/Entypo";
export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.description}>
        <Avatar
          imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSHjg39ESO7Dgg8Hmi7ZWa9x5Lebc7Ox7LJYc5eG-Pg&s`}
        />
        <View style={{ paddingLeft: 16 }}>
          <Text
            style={{
              color: colorSchema.mainTextColor,
              fontSize: 25,
            }}
          >
            M.Oleksandra.
          </Text>
          <Text style={{ color: colorSchema.grayTextColor, fontSize: 17 }}>
            Personal Account
          </Text>
        </View>
      </View>
      <View style={styles.burgerIconSpace}>
        <View
          style={{
            backgroundColor: colorSchema.grayBg,
            height: 50,
            width: 50,
            borderRadius: 99999,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>
            <Icon name="menu" color={colorSchema.burgerColor} size={20} />
          </Text>
        </View>
      </View>
    </View>
  );
}
//Styles
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingTop: 20,
  },
  description: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  burgerIconSpace: {},
});
