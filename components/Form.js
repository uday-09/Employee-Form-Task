import React, { useState, useEffect } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function Form({
  formData,
  onChangeName,
  onChangeEmail,
  onChangePassword,
  secureEntry,
}) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={formData.name}
        onChangeText={(name) => onChangeName(name, formData.index)}
      ></TextInput>
      {formData.nameError ? (
        <Text style={styles.errorMessage}>{formData.nameError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Your email"
        value={formData.email}
        onChangeText={(email) => onChangeEmail(email, formData.index)}
      ></TextInput>
      {formData.emailError ? (
        <Text style={styles.errorMessage}>{formData.emailError}</Text>
      ) : null}
      <View style={{ ...styles.input, ...styles.inputSecure }}>
        <TextInput
          style={{ flex: 1, marginRight: 10 }}
          placeholder="Your password"
          value={formData.password}
          onChangeText={(password) =>
            onChangePassword(password, formData.index)
          }
          secureTextEntry={formData.secureEntry}
        ></TextInput>
        <Pressable onPress={() => secureEntry(formData.index)}>
          {formData.secureEntry === true ? (
            <Ionicons name="eye-off-outline" size={16} color="black" />
          ) : (
            <Ionicons name="eye-outline" size={16} color="black" />
          )}
        </Pressable>
      </View>
      {formData.passwordError ? (
        <Text style={styles.errorMessage}>{formData.passwordError}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  errorMessage: {
    color: "red",
    paddingHorizontal: 10,
  },
  inputSecure: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Form;
