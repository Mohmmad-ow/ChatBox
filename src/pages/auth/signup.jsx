import { useState, useEffect } from "react"
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from "react-native"
import Services from "../../components/Services"
const backArrow = require("../../../assets/back.png")

export default ({ navigation }) => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        repeatedPassword: ""
    })
    const [credentialsValid, setCredentialsValid] = useState(false);

    useEffect(() => {
        setCredentialsValid(emailIsValid(credentials.email) && passwordIsValid(credentials.password)
         && repeatedPasswordIsValid(credentials.repeatedPassword) && nameIsValid(credentials.name))
    }, [credentials])

    const emailIsValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email)
    }
    const passwordIsValid = (password) => {
        return password.length >= 8;
    }
    const repeatedPasswordIsValid = (repeatedPassword) => {
        return repeatedPassword === credentials.password
    }
    const nameIsValid = (name) => {
        return name.length > 0
    }




    const dynamicStyles = {
        btn: {
            marginTop: 80, 
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

    return (
        <ScrollView style={styles.container}>
            <View style={styles.backArrow}>
                <Pressable onPress={() => { navigation.goBack() }}><Image style={styles.backArrowImage} source={backArrow} /></Pressable>
            </View>
            <View style={styles.hero}>
                <Text style={styles.heroHeader}>Sign up with Email</Text>
                <Text style={styles.heroTxt}>Get chatting with friends and family today by signing up for our chat app!</Text>
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
                        Name
                    </Text>
                    <View style={styles.input}>
                        <TextInput value={credentials.name} onChangeText={name => setCredentials({...credentials, name: name})} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Your Email
                    </Text>
                    <View style={styles.input}>
                        <TextInput inputMode="email" value={credentials.email} onChangeText={email => setCredentials({...credentials, email: email})} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Password
                    </Text>
                    <View style={styles.input}>
                        <TextInput value={credentials.password} onChangeText={password => setCredentials({...credentials, password: password})} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Confirm Password
                    </Text>
                    <View style={styles.input}>
                        <TextInput value={credentials.repeatedPassword} onChangeText={repeatedPassword => setCredentials({...credentials, repeatedPassword: repeatedPassword})} />
                    </View>
                </View>
            </View>
            <Pressable style={dynamicStyles.btn}>
                <Text style={dynamicStyles.btnText}>Create an account</Text>
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
        marginTop: 30,
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