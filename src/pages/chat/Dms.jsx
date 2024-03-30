import { View, Text, ScrollView, StyleSheet, Image, Pressable } from "react-native"
import { contacts } from "../Home";
import { useCallback } from "react";
import ContactHeader from "../../components/contactHeader";
import {useFonts} from "expo-font"



const messageLog = [
    {senderIsUser: true,date: new Date().toDateString() ,message: "Hi how is it going"},
    {senderIsUser: false,date: new Date().toDateString() ,message: "im fin w'abut u??"},
    {senderIsUser: true,date: new Date().toDateString() ,message: "I'm doing pretty well, you seem a strange today is everything okay"},
    {senderIsUser: false,date: new Date().toDateString() ,message: "I b tellin ya im fin jst knda out uf it ya know "},
    {senderIsUser: true,date: new Date().toDateString() ,message: "...okay just wanna make sure, just lmk if you need anything"},
    {senderIsUser: false,date: new Date().toDateString() ,message: "tnks bro u a ryl 1 frfr"},
    {senderIsUser: true,date: new Date().toDateString() ,message: "alight see you"},
    {senderIsUser: false,date: new Date().toDateString() ,message: "The time of your living has expired, be sure to tell your final goodbyes before I come to collect"},
]


export default ({ route, navigation }) => {
    let { name, id, img } = route.params;
    const [fontsLoaded, error] = useFonts({
        'SpButchLiteBold': require("../../../assets/fonts/SpButchLiteBold.otf"),
        'SpButchLiteLight': require("../../../assets/fonts/SpButchLiteLight.otf"),
        'SpButchLiteMedium': require("../../../assets/fonts/SpButchLiteMedium.otf"),
    })

    


    img = contacts[id].img
    return (
        <ScrollView style={styles.container}>
            <ContactHeader navigation={navigation} name={name} img={img}  />
            <View style={styles.messageContainer}>
                {messageLog.map((message, idx) => {
                    if (message.senderIsUser) return (
                        <View key={idx} style={styles.myMessagesContainer}>
                            <View style={styles.myMessages}>
                                <Text style={{color: "#FFFFFF", fontSize: 14, fontFamily: "SpButchLiteMedium", fontWeight: "400"}}>{message.message}</Text>
                            </View>
                                <Text style={{color: "#797C7B", fontSize: 12}}>{message.date.toString()}</Text>
                        </View>
                    )
                    else return (
                        <View key={idx} style={styles.otherMessagesContainer}>
                            <View style={styles.otherMessages}>
                                <Text style={{color: "#000E08", fontSize: 14, fontFamily: "SpButchLiteMedium", fontWeight: "400"}}>{message.message}</Text>
                            </View>
                                <Text style={{color: "#797C7B", fontSize: 12}}>{message.date.toString()}</Text>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        backgroundColor: "#FFFFFF",
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    backArrow: {
        width: 40,
        height: 40
    },
    topNav: {

    },
    messageContainer: {
        display: "flex",
        gap: 15,
        flexDirection: "column",
        paddingTop: 50
    },
    myMessagesContainer: {
        display: "flex",
        alignItems: "flex-end",
        
    },
    myMessages: {
        backgroundColor: "#20A090",
        borderRadius: 20,
        borderTopRightRadius: 0,
        width: "70%",
        padding: 8,
        paddingHorizontal: 16


    },
    otherMessagesContainer: {
        display: "flex",
        alignItems: "flex-start",
    },
    otherMessages: {
        backgroundColor: "#F2F7FB",
        borderRadius: 20,
        borderTopLeftRadius: 0,
        width: "70%",
        padding: 8
    },

})