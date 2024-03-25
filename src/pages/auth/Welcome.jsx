import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const facebook = require("../../../assets/facebook.png")
const apple = require("../../../assets/apple.png")
const google = require("../../../assets/google.png")

export default () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      start={{ x: 0.1, y: 1 }}
      end={{ x: 0.9, y: 0.3 }}
      colors={['#0A1832', '#43116A']}
      style={styles.background}
    >
      <View style={styles.titleCon}>
        <Text style={styles.logoC}>C</Text>
        <Text style={styles.logoText}>ChatSurf</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 70, color: "#FFFFFF" }}>
          Connect friends <Text style={{ fontWeight: 600 }}>easily & quickly</Text>
        </Text>
        <Text style={{ color: "#B9C1BE", marginTop: 20, fontSize: 18, lineHeight: 25 }}>
          Our chat app is the perfect way to stay connected with friends and family.
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", gap: 20, marginTop: 40 }}>
        <View style={styles.services}>
          <Image style={styles.img} source={facebook}></Image>
        </View>
        <View style={styles.services}>
          <Image style={styles.img} source={google}></Image>
        </View>
        <View style={styles.services}>
          <Image style={styles.img} source={apple}></Image>
        </View>
      </View>
      <View style={styles.hrContainer} >
        <View style={styles.hr}></View>
        <Text style={styles.logoText}>OR</Text>
        <View style={styles.hr}></View>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Sign up witn a mail</Text>
      </Pressable>
      <Text style={styles.loginLink}>Existing account? <Text style={{color: "#FFFFFF", fontWeight: "600"}}>Log in</Text></Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: 60,
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  titleCon: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  logoC: {
    fontSize: 36,
    textAlign: "center",
    color: "#ffffff",

  },
  logoText: {

    fontSize: 16,
    color: "#FFFFFF"
  },
  services: {
    borderRadius: 45,
    borderColor: "#FFFFFF",
    padding: 10,
    borderWidth: 1

  },
  img: {
    width: 30,
    height: 30
  },
  hr: {
    width: "30%",
    height: 1,
    backgroundColor: "#CDD1D0"
  },
  hrContainer: {
    marginTop: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  btn: {
    marginTop: 20,
    width: "80%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  btnText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000"
  },
  loginLink: {
    textAlign: "center",
    color: "#B9C1BE",
    marginTop:40 
  }
});