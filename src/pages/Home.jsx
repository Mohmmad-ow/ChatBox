import { Text, View, ScrollView, StyleSheet, Image } from "react-native"
import TopBar from "../components/TopBar"

const profiles = [
    {name: "Max", img: require("../../assets/bussiness-man.png"), borderColor: "#4c46c8"},
    {name: "Marzia", img: require("../../assets/profile(1).png"), borderColor: "#365e7d"},
    {name: "Moe", img: require("../../assets/user.png"), borderColor: "#337180"},
    {name: "Ali", img: require("../../assets/profile.png"), borderColor: "#4070ff"},
]

const contacts = [
    {name: "Max", img: require("../../assets/bussiness-man.png"), lastMessage: "send nudes"},
    {name: "Marzia", img: require("../../assets/profile(1).png"), lastMessage: "it's been an honer..."},
    {name: "Moe", img: require("../../assets/user.png"), lastMessage: "ay it's yo boy skiny penisy"},
    {name: "Ali", img: require("../../assets/profile.png"), lastMessage: "what's going on here"},
]

export default () => {

    return (
       <ScrollView style={styles.container}>
            <TopBar />
            <View style={styles.profiles}>
                {profiles.map((profile, idx) => (
                    (<View style={styles.profile}>
                        <View style={{...styles.profile, borderColor: profile.borderColor}}>
                        <Image style={styles.profileImg} source={profile.img} />
                    </View>
                        <Text style={styles.profileTxt}>{profile.name}</Text>
                    </View>)
                ))}
            </View>
            <View style={styles.contactsContainer}>
                {contacts.map((contact) => (
                    <View style={styles.contactContainer}>
                        <View style={styles.contactImage}><Image style={styles.profileImg} source={contact.img} /></View>
                        <View style={styles.contactDetail}>
                            <Text style={styles.contactDetailName}>{contact.name}</Text>
                            <Text style={styles.contactDetailMessage}>{contact.lastMessage}</Text>    
                        </View>
                        <View style={styles.contactTail}><Text>2 minutes</Text></View>
                    </View>
                ))}
            </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000E08",
        height: "100%",
        
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
        borderTopStartRadius: 45,
        borderTopEndRadius: 45,
        // width: "80%",
        marginTop: 50,
        height: 550,
        display: "flex",
        flexDirection: "column",
        padding: 10,
        gap: 20,
        backgroundColor: "#FFFFFF"
    },
    contactContainer: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#FFFFFF",
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
