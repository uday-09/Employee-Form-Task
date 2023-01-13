import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import axios from "axios";
import AssetExample from "../components/AssetExample";

const catsApiInstance = axios.create();
catsApiInstance.defaults.baseURL = "https://cat-fact.herokuapp.com";

const ScreenA = ({ navigation }) => {
  return (
    <>
      <View style={styles.centering}>
        <Text>ScreenA</Text>
        <Button
          title="Go to screen B"
          onPress={() => {
            navigation.navigate("ScreenB", { value: "From screen A" });
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centering: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScreenA;
