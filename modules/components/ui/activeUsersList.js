import { ScrollView, Text, View } from "react-native";
import { Avatar } from "./avatar";
export function ActiveUserList({}) {
  return (
    <View>
      <ScrollView horizontal style={{}}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((elem) => (
          <View
            style={{
              marginRight: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={elem}
          >
            <Avatar
              active
              imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSHjg39ESO7Dgg8Hmi7ZWa9x5Lebc7Ox7LJYc5eG-Pg&s`}
            />
            <Text style={{ fontSize: 20, paddingTop: 10 }}>User#{elem}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
