import { View, Text, StyleSheet, FlatList, TextInput, Image } from "react-native";
import React from "react";
import BoxShadow from '../props/BoxShadow'

const TaskComponent = ({task}) => {
    return (
        <View style={styles.notes}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require("../assets/Checkbox-Checked--Streamline-Carbon.png")}></Image>
                <Text style={{marginLeft: 10}}>{task.title}</Text>
            </View>
            <Image source={require("../assets/Edit-Alt--Streamline-Unicons.png")}></Image>
        </View>
    );
}


const TaskLists = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center'}}>
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
                <TaskComponent task={{title: "Task 1"}}></TaskComponent>
            </View>
            <View style={{flex: 1}}>
                <Image
                    source={require("../assets/plus.png")}
                >
                </Image>
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
    }
});

export default TaskLists;