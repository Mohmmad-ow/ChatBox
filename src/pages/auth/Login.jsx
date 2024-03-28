import { useState, useEffect } from "react"
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from "react-native"
import Services from "../../components/Services"
const backArrow = require("../../../assets/back.png")

export default ({ navigation }) => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [credentialsValid, setCredentialsValid] = useState(false);


    const dynamicStyles = {
        btn: {
            marginTop: 200, 
            height: 50,
            backgroundColor: credentialsValid ? "#24786D" : "#F3F6F6",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: 'center'
          },
          btnText: {
            color: credentialsValid ? "#FFFFFF" : "#797C7B",
            fontSize: 16,
            fontWeight: "500",
          },
    }

    useEffect(() => {
        setCredentialsValid(emailIsValid(email) && passwordIsValid(password))
    }, [email, password])

    const emailIsValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email)
    }
    const passwordIsValid = (password) => {
        return password.length >= 8;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.backArrow}>
                <Pressable onPress={() => { navigation.goBack() }}><Image style={styles.backArrowImage} source={backArrow} /></Pressable>
            </View>
            <View style={styles.hero}>
                <Text style={styles.heroHeader}>Log in To Chat Box</Text>
                <Text style={styles.heroTxt}>Welcome back! Sign in using your social account or email to continue us</Text>
                <Services appleColor={0} borderColor={'#000'} viewStyle={styles.loginServices} />
            </View>
            <View style={styles.hrContainer} >
                <View style={styles.hr}></View>
                <Text style={styles.logoText}>OR</Text>
                <View style={styles.hr}></View>
            </View>
            <View style={styles.inputSectionContainer} >
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Your Email
                    </Text>
                    <View style={styles.input}>
                        <TextInput inputMode="email" value={email} onChangeText={email => setEmail(email)} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Password
                    </Text>
                    <View style={styles.input}>
                        <TextInput value={password} onChangeText={password => setPassword(password)} />
                    </View>
                </View>
            </View>
            <Pressable onPress={() => { navigation.navigate("Home") }} style={dynamicStyles.btn}>
                <Text style={dynamicStyles.btnText}>Log in</Text>
            </Pressable>
            <Pressable style={{marginTop: 10 }}>
                <Text style={{color: "#24786D", textAlign: "center", fontWeight: "400"}}>
                    Forgot Password?
                </Text>
            </Pressable>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingHorizontal: 30,
        backgroundColor: "#FFFFFF"
    },
    backArrow: {
        marginTop: 55,
    },
    backArrowImage: {
        width: 23,
        height: 13
    },
    hero: {
        marginTop: 40,
        display: "flex",
    },
    heroHeader: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    },
    heroTxt: {
        marginTop: 16,
        fontSize: 14,
        color: "#797C7B",
        textAlign: "center",
    },
    loginServices: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginTop: 40,
        justifyContent: "center"
    },
    hr: {
        width: "30%",
        height: 1,
        backgroundColor: "#CDD1D0"
    },
    hrContainer: {
        marginTop: 30,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    logoText: {
        fontSize: 16,
        color: "#000"
    },
    inputSectionContainer: {
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        gap: 30
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 15
    },
    inputLabel: {
        color: "#24786D",
        fontSize: 14,
        fontWeight: "600"
    },
    input: {
        borderBottomColor: '#CDD1D0',
        borderBottomWidth: 1,
    },
    
})