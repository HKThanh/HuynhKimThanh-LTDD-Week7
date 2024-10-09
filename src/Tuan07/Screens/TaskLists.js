import { View, Text, StyleSheet, FlatList, TextInput, Image, Pressable } from "react-native";
import React, {useEffect, useState} from "react";

const TaskComponent = ({task}) => {
    return (
        <View style={styles.notes}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require("../assets/Checkbox-Checked--Streamline-Carbon.png")}></Image>
                <Text style={styles.taskTitle}>{task.title}</Text>
            </View>
            <Image source={require("../assets/Edit-Alt--Streamline-Unicons.png")}></Image>
        </View>
    );
}

function LogoTitle( {account} ) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Image
                style={{ width: 50, height: 50, borderRadius: 50, marginTop: 40, marginRight: 10, marginLeft: 124}}
                source={require('../assets/logo.png')}
            />
            <View style={{marginTop: 44}}>
                <Text style={{fontSize: 20, fontWeight: '700'}}>   Hi {account.Name}</Text>
                <Text style={{fontSize: 14}}>Have agrate day a head</Text>
            </View>
        </View>
    );
}


const TaskLists = ({navigation, route}) => {
    const account = route.params;
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const response = await fetch('https://66ff3a172b9aac9c997e9862.mockapi.io/tasks');
            const json = await response.json();
            setTasks(json);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable style={{marginTop: 30}} onPress={() => navigation.navigate('Home')}>
                    <Image
                        style={{width: 30, height: 20}}
                        source={require('../assets/Arrow-Left--Streamline-Phosphor.png')}
                    />
                </Pressable>
                <LogoTitle account={account}></LogoTitle>
            </View>
            <View style={{flex: 0.6, justifyContent: 'center'}}>
                <Image
                    source={require("../assets/magnifying.png")}
                    style={
                        {
                            width: 20,
                            height: 20,
                            top: 32,
                            left: 15
                        }
                    }
                ></Image>
                <TextInput 
                    placeholder="Search"
                    style={styles.inputText}    
                >
                </TextInput>
            </View>
            <View style={{flex: 3}}>
                <FlatList 
                    data={tasks}
                    renderItem={({item}) => <TaskComponent task={item}></TaskComponent>}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{flex: 1}}>
                <Pressable onPress={() => {navigation.navigate('TaskDetail', account)}}>
                    <Image
                        source={require("../assets/plus.png")}
                    >
                    </Image>
                </Pressable>
            </View>
        </View>
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
        height: 44,
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 44
    },
    notes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 334,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#171A1F26',
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 10,
    },
    taskTitle: {
        fontSize: 14,
        width: 220,
        marginLeft: 10
    }
});

export default TaskLists;