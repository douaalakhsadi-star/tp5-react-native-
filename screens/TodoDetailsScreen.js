import { View, Text } from "react-native";
import AppBar from "../components/AppBar";

export default function TodoDetailsScreen({ route }) {
  const { id, title } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <AppBar title="Détails" />

      <Text style={{ fontSize: 22, marginTop: 20 }}>
        ID : {id}
      </Text>

      <Text style={{ fontSize: 22, marginTop: 10 }}>
        Tâche : {title}
      </Text>
    </View>
  );
}
