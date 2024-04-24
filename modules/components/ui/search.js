import { View, TextInput, Text } from "react-native";
import { colorSchema } from "../../utils/colors";
import FeatherIcon from "@expo/vector-icons/Feather";
import EntypoIcon from "@expo/vector-icons/Entypo";
export function Search() {
  return (
    <View
      style={{
        width: "100%",
        borderRadius: 10,
        backgroundColor: colorSchema.grayBg,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          //   backgroundColor: "red",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Text>
            <EntypoIcon
              color={colorSchema.burgerColor}
              size={25}
              name="magnifying-glass"
            />
          </Text>
        </View>
        <TextInput
          cursorColor={"black"}
          style={{
            // backgroundColor: "green",
            marginLeft: 20,
            height: 26,
            width: "70%",
            color: "black",
          }}
        />
      </View>
      <View>
        <FeatherIcon color={colorSchema.blueColor} size={25} name="mic" />
      </View>
    </View>
  );
}
