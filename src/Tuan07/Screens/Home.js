import { View, Image, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

const Screen1 = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://66ff3a172b9aac9c997e9862.mockapi.io/users?username=' + username)
        .then(response => response.json())
        .then(json => setUser(json))
        .catch(error => console.error(error))
    }, []);

    function checkUserForLogin() {
        user.forEach(element => {
            if (element.username === username) {
                navigation.navigate('TaskLists', element);
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Image 
                    source={require("../assets/bg.png")}
                    style={
                        {
                            width: 200, 
                            height: 200
                        }
                    }
                />
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.title}>
                    MANAGE YOUR{'\n'}TASK
                </Text>
            </View>
            <View style={{flex: 1}}>
                <TextInput 
                    placeholder="Enter your name" 
                    style={styles.input}
                    onChangeText={setUsername}
                >
                </TextInput>
                <Image
                    source={require("../assets/Mail--Streamline-Feather.png")}
                    style={
                        {
                            position: 'absolute',
                            top: 12,
                            left: 15
                        }
                    }
                ></Image>
            </View>
            <View style={{flex: 1}}>
                <Pressable 
                    style={styles.button}
                    onPress={checkUserForLogin}
                    >
                    <Text style={styles.buttonText}>GET STARTED</Text>
                    <Image
                        source={require("../assets/Arrow-Right-Alt-Fill--Streamline-Outlined-Fill---Material-Symbols.png")}
                        style={
                            {
                                position: 'absolute',
                                top: 10,
                                right: 15
                            }
                        }
                    ></Image>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        lineHeight: 36,
        fontWeight: '700',
        textAlign: 'center',
        color: '#8353E2'
    },
    input: {
        width: 334,
        height: 43,
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 44,
    },
    button: {
        width: 190,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#00BDD6',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    }
});

export default Screen1;