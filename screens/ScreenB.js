import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";

const ScreenB = ({ route, navigation }) => {
  const { value } = route.params;

  return (
    <>
      <View style={styles.centering}>
        <Text>ScreenB</Text>
        <Text>{value}</Text>
        {/* <FlatList
          data={value}
          key={(id, index) => id + index}
          renderItem={({ item, index }) => {
            return <Text>{item.text}</Text>;
          }}
        ></FlatList> */}
        <Text>{route.params.values}</Text>
        <Button
          title="Go back"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
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

export default ScreenB;
