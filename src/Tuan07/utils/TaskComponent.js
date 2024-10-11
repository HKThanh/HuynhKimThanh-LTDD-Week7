import React from 'react';
import { View, Text, Image, Pressable, Alert, StyleSheet } from 'react-native';

export function TaskComponent({task, navigation, account, deleteTask}) {
    return (
        <View style={styles.notes}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable
                    onPress={() => {
                        Alert.alert(
                            "Delete Task",
                            "Are you sure you want to delete this task?",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                {
                                    text: "OK",
                                    onPress: () => deleteTask(task.id)
                                }
                            ]
                        );
                    }}
                >
                    <Image source={require("../assets/Checkbox-Checked--Streamline-Carbon.png")}></Image>
                </Pressable>
                <Text style={styles.taskTitle}>{task.title}</Text>
            </View>
            <Pressable
                onPress={() => {
                    navigation.navigate('TaskDetail', {task: task, account: account});
                }}
            >
                <Image source={require("../assets/Edit-Alt--Streamline-Unicons.png")}></Image>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
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