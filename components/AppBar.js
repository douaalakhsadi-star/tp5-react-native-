import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AppBar({ title }) {
  const { logout } = useContext(AuthContext);

  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#333",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{title}</Text>

      <Button title="Logout" color="white" onPress={logout} />
    </View>
  );
}
