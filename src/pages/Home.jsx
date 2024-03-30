import { Text, View, ScrollView, StyleSheet, Image, Pressable } from "react-native"
import TopBar from "../components/TopBar"

const profiles = [
    { name: "Max", img: require("../../assets/images/bussiness-man.png"), borderColor: "#4c46c8" },
    { name: "Marzia", img: require("../../assets/images/profile(1).png"), borderColor: "#365e7d" },
    { name: "Moe", img: require("../../assets/images/user.png"), borderColor: "#337180" },
    { name: "Ali", img: require("../../assets/images/profile.png"), borderColor: "#4070ff" },
]

export const contacts = [
    { name: "Max", img: require("../../assets/images/bussiness-man.png"), lastMessage: "send nudes", imgName: "bussiness-man.png" },
    { name: "Marzia", img: require("../../assets/images/profile(1).png"), lastMessage: "it's been an honer...", imgName: "profile(1).png" },
    { name: "Moe", img: require("../../assets/images/user.png"), lastMessage: "ay it's yo boy skiny penisy", imgName: "user.png" },
    { name: "Ali", img: require("../../assets/images/profile.png"), lastMessage: "what's going on here", imgName: "profile.png" },
]

export default ({navigation, img}) => {
    const handleGoToContact = ({id, name, img}) => {
        navigation.navigate("DM", {name: name, id: id, img: img})
    }


    return (
        <ScrollView style={styles.container}>
            <TopBar />
            <View style={styles.profiles}>
                {profiles.map((profile, idx) => (
                    (<View key={idx} style={styles.profile}>
                        <View style={{ ...styles.profile, borderColor: profile.borderColor }}>
                            <Image style={styles.profileImg} source={profile.img} />
                        </View>
                        <Text style={styles.profileTxt}>{profile.name}</Text>
                    </View>)
                ))}
            </View>
            <View style={styles.contactsContainer}>
                {contacts.map((contact, idx) => (
                        <Pressable key={idx} style={styles.contactContainer} onPress={() => {handleGoToContact({id: idx, name: contact.name, img: contact.imgName})}}>
                            <View style={styles.contactImage}><Image style={styles.profileImg} source={contact.img} /></View>
                            <View style={styles.contactDetail}>
                                <Text style={styles.contactDetailName}>{contact.name}</Text>
                                <Text style={styles.contactDetailMessage}>{contact.lastMessage}</Text>
                            </View>
                            <View style={styles.contactTail}><Text>2 minutes</Text></View>
                        </Pressable>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000E08",
        height: "100%",
        display: "flex",


    },
    profiles: {
        marginTop: 40,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center"
    },
    profile: {
        padding: 4,
        borderWidth: 1,
        borderRadius: 45
    },
    profileImg: {
        width: 58,
        height: 58,
    },
    profileTxt: {
        color: "#FFFFFF",
        marginTop: 8,
        textAlign: "center"
    },
    contactsContainer: {
        borderRadius: 45,
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        padding: 10,
        gap: 20,
        backgroundColor: "#FFFFFF",


    },
    contactContainer: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 8,

        gap: 10,
    },
    contactImage: {
        flex: 1
    },
    contactDetail: {
        flex: 3,
        display: "flex",
        flexDirection: "column"
    },
    contactDetailName: {
        color: "#000",
        fontSize: 20
    },
    contactDetailMessage: {
        color: "#797C7B",
        fontSize: 12
    },
    contactTail: {
        flex: 1
    }
})
