import * as React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";

export default function AssetExample({
  title = "Local files and assets can be imported by dragging and dropping them into the editor",
  getValue,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{title}</Text>
      <Image style={styles.logo} source={require("../assets/snack-icon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 128,
    width: 128,
  },
});
