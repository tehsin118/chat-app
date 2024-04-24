import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import { colorSchema } from "../../utils/colors";
import { Avatar } from "./avatar";
export function ChatList() {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text
        style={{
          color: colorSchema.mainTextColor,
          fontSize: 25,
        }}
      >
        Current chat
      </Text>
      <ScrollView style={{ height: 350 }}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ].map((elem) => (
          <View
            key={elem}
            style={{ flexDirection: "row", paddingVertical: 10 }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <Avatar
                  dimensions={{ height: 40, width: 40 }}
                  imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSHjg39ESO7Dgg8Hmi7ZWa9x5Lebc7Ox7LJYc5eG-Pg&s`}
                />
                <View style={{ paddingLeft: 16 }}>
                  <Text
                    style={{
                      color: colorSchema.mainTextColor,
                      fontSize: 20,
                    }}
                  >
                    M.Oleksandra.
                  </Text>
                  <Text
                    style={{ color: colorSchema.grayTextColor, fontSize: 17 }}
                  >
                    HEre is the message
                  </Text>
                </View>
              </View>
            </View>
            <View style={{}}>
              <Text
                style={{ color: colorSchema.grayTextColor, marginBottom: 7 }}
              >
                10/12/2000
              </Text>
              <View
                style={{
                  backgroundColor: colorSchema.blueColor,
                  alignSelf: "flex-end",
                  borderRadius: 99999,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 25,
                  width: 25,
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  2
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

{
  /* <Text
style={{
  color: colorSchema.mainTextColor,
  fontSize: 25,
}}
>
M.Oleksandra.
</Text>
<Text style={{ color: colorSchema.grayTextColor, fontSize: 17 }}>
Personal Account
</Text> */
}
