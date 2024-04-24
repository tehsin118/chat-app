import { View } from "react-native";
//Component
import { Header } from "../components/ui/header";
import { Search } from "../components/ui/search";
import { ActiveUserList } from "../components/ui/activeUsersList";
import { ChatList } from "../components/ui/chatList";
import { Tabs } from "../components/ui/tabs";
export function ChatSection({}) {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Header />
      <Search />
      <ActiveUserList />
      <ChatList />
      <Tabs />
    </View>
  );
}
