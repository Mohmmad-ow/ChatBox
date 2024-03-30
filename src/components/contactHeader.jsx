import { StyleSheet, View, Image, Text, Pressable } from "react-native"

const backArrow = require("../../assets/images/back.png")
const phone = require("../../assets/images/telephone.png")
const video_camera = require("../../assets/images/video-camera.png")



export default ({img, name, navigation}) => {
    return (
        <View style={styles.container}>
                <Pressable style={styles.headerImg}  onPress={() => { navigation.goBack() }}>
                    <Image style={styles.headerImg} source={backArrow} />
                </Pressable>
                <View style={styles.userInfo}>
                    <Image style={{ width: 40, height: 40 }} source={img} />
                    <Text>{name}</Text>
                </View>
                <Pressable style={styles.headerImg} onPress={() => {}}>
                    <Image style={styles.headerImg} source={phone}></Image>
                </Pressable>
                <Pressable style={styles.headerImg} onPress={() => {}}><Image style={styles.headerImg} source={video_camera}></Image></Pressable>
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    headerImg: {
        width: 30,
        height: 30,
        flex: 1
    },
    userInfo: {
        flex: 4,
        marginLeft: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    }
})