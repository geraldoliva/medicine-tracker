import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("./../../assets/images/login.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Stay On Track, Stay Healthy!
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 17,
            marginTop: 20,
          }}
        >
          Track your meds, take control of your health. Stay consistent, stay
          confident
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("login/signIn")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: Colors.PRIMARY,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 450,
    borderRadius: 23,
  },
  button: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 99,
    marginTop: 25,
  },
});
