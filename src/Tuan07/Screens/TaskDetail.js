import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView } from "react-native";
import React, {useState, useContext} from "react";
import { ReloadContext } from "../App";

function LogoTitleRight( {account} ) {
    return (
        <View style={{flexDirection: 'row'}}>
            <Image
                style={{ width: 50, height: 50, borderRadius: 50, marginTop: 40, marginRight: 10}}
                source={require('../assets/logo.png')}
            />
            <View style={{marginTop: 44}}>
                <Text style={{fontSize: 20, fontWeight: '700'}}>   Hi {account.Name}</Text>
                <Text style={{fontSize: 14}}>Have agrate day a head</Text>
            </View>
        </View>
    );
}

const TaskDetail = ({navigation, route}) => {
    const account = route.params.account;
    const task = route.params.task;
    const {reload, setReload} = useContext(ReloadContext);
    const [tasks, setTasks] = useState(task === undefined ? '' : task.title);

    const addTask = async () => {
        if (tasks === '') {
            alert('Please input your task');
            return
        }

        try {
            const response = await fetch('https://66ff3a172b9aac9c997e9862.mockapi.io/tasks', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: tasks,
                })
            });
            const json = await response.json();
            setReload(prevReload => !prevReload);
        }
        catch (error) {
            console.error(error);
        }
    }

    const updateTask = async () => {

        try {
            const response = await fetch('https://66ff3a172b9aac9c997e9862.mockapi.io/tasks/' + task.id, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: tasks,
                })
            });
            const json = await response.json();
            console.log(json);
            setReload(prevReload => !prevReload);
        }
        catch (error) {
            console.error(error);
        }
    }

    const showMessageWhenTaskSuccess = () => {
        if (task === undefined) {
            addTask();
        } else {
            updateTask();
        }
        alert('Task added successfully');
        navigation.navigate('TaskLists', {account: account, task: task});
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <LogoTitleRight account={account}></LogoTitleRight>
                <Pressable 
                    onPress={() => {navigation.navigate('TaskLists', {account: account, task: task})}}
                >
                    <Image
                        source={require('../assets/Arrow-Left--Streamline-Phosphor.png')}
                        style={{width: 30, height: 20, marginTop: 30, marginLeft: 60}}
                        >
                    </Image>
                </Pressable>
            </View>
            <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.title}>ADD YOUR JOB</Text>
            </View>
                <View style={{flex: 0.1, alignItems: 'center'}}>
                <TextInput 
                    style={styles.inputText} 
                    placeholder="Input your task"
                    onChangeText={setTasks}
                    value={tasks}
                >
                </TextInput>
                <Image 
                    source={require("../assets/Checkbox-Checked--Streamline-Carbon.png")}
                    style={{width: 20, height: 20, position: 'absolute', top: 20, left: 10}}
                    >
                </Image>
            </View>
            <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                <Pressable 
                    style={styles.button}
                    onPress={showMessageWhenTaskSuccess}
                >
                    <Text style={styles.buttonText}>FINISH</Text>
                    <Image 
                        source={require("../assets/Arrow-Right-Alt-Fill--Streamline-Outlined-Fill---Material-Symbols.png")}
                    ></Image>
                </Pressable>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Image 
                    source={require("../assets/bg.png")}
                    style={{width: 190, height: 170}}
                ></Image>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#fff',
    },
    inputText: {
        width: 334,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        paddingLeft: 40,
        marginTop: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
    },
    button: {
        width: 190,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#00BDD6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginRight: 3
    }
});

export default TaskDetail;