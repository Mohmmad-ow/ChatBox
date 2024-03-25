import { Text, View, Image, StyleSheet } from "react-native";

const logo = require("../../assets/favicon.png")

export default () => {
    

    return (
        <View style={styles.bg}>
            <View style={{display: "flex", }}>
                <Text style={{fontSize: 64, textAlign: "center", color: "#24786D", fontWeight: 500}}>C</Text>
                <Text style={{fontSize: 32, }}>
                    Chatsurf
                </Text>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    bg: {
        zdisplay: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        height: "100%",
    }
})