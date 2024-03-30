import { View, Image, StyleSheet } from "react-native";


export default ({viewStyle, borderColor, appleColor}) => {
    // TODO: make sure to add Icons instead of these PNGs once you decide on a Icons library
    const facebook = require("../../assets/images/facebook.png")
    const apple = appleColor === 0 ? require("../../assets/images/apple-black.png") : require("../../assets/images/apple-white.png")
    const google = require("../../assets/images/google.png")
   
    const styles = StyleSheet.create({
        services: {
            borderRadius: 45,
            padding: 10,
            borderWidth: 2,
            borderColor: borderColor
          },
          img: {
            width: 30,
            height: 30
          },
    })
    return (
        <View style={viewStyle}>
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
    )
}

