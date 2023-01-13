import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import validator from "validator";

//Custom component imports here
import Form from "../components/Form";

//Icon imports
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function EmployeeForm() {
  const [employeeFields, setEmployeeFields] = useState([
    {
      name: "",
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      nameError: "",
      secureEntry: true,
    },
  ]);

  const onChangeName = (name, index) => {
    setEmployeeFields((prev) => {
      prev[index].name = name;
      prev[index].nameError =
        name.length < 5 ? "Name should have atleast 5 characters" : "";
      return [...prev];
    });
  };

  const onChangeEmail = (email, index) => {
    setEmployeeFields((prev) => {
      prev[index].email = email;
      prev[index].emailError =
        validator.isEmail(email) === true ? "" : "Invalid email";
      return [...prev];
    });
  };

  const onChangePassword = (password, index) => {
    setEmployeeFields((prev) => {
      prev[index].password = password;
      prev[index].passwordError =
        password.length < 6 ? "Password should have atleast 6 characters" : "";
      return [...prev];
    });
  };

  const onAddPress = () => {
    setEmployeeFields((prev) =>
      setEmployeeFields([...prev, { name: "", email: "", password: "" }])
    );
  };

  const onDeletePress = () => {
    setEmployeeFields((prev) => {
      prev.pop();
      return [...prev];
    });
  };

  const toggleSecureEntry = (index) => {
    setEmployeeFields((prev) => {
      prev[index].secureEntry = !prev[index].secureEntry;
      return [...prev];
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.controllsStyles}>
        <Pressable
          style={styles.btn}
          onPress={onAddPress}
          android_ripple={{ color: "green" }}
        >
          <Ionicons name="add" size={24} color="black" />
          {/* <Text>Add</Text> */}
        </Pressable>
        <Pressable
          style={{ ...styles.btn, borderColor: "red" }}
          onPress={onDeletePress}
          android_ripple={{ color: "red" }}
        >
          <MaterialCommunityIcons name="minus" size={24} color="black" />
          {/* <Text>Delete</Text> */}
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {employeeFields.map((item, index) => {
          return (
            <View style={styles.legend} key={`${index}`}>
              <Text>Form {index + 1}</Text>
              <Form
                formData={{ ...item, index }}
                onChangeName={onChangeName}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                secureEntry={toggleSecureEntry}
              ></Form>
            </View>
          );
        })}
      </ScrollView>
      <View>
        <Button title="Submit"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "white",
    padding: 15,
  },
  controllsStyles: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  btn: {
    borderColor: "green",
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    elevation: 2,
  },
  legend: {
    borderWidth: 1,
    borderColor: "pink",
    padding: 10,
    margin: 5,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "white",
  },
});

export default EmployeeForm;
