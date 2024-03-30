import { Image, StyleSheet, Text, View } from "react-native"

const searchBar = require("../../assets/images/search-interface-symbol.png");
const profilePic = require("../../assets/images/man.png");

export default () => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 60,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 24
        },
        searchContainer: {
            borderRadius: 44,
            borderWidth: 1,
            borderColor: "#363F3B",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            
        },
        headerTxt: {
            marginHorizontal: "auto",
            color: "#FFFFFF",
            fontSize: 20
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image style={{width: 26, height: 26}} source={searchBar} />
            </View>
            <Text style={styles.headerTxt}>Home</Text>
            <View >
                <Image style={{width: 44, height: 44}} source={profilePic} />
            </View>
        </View>
    )
}
