import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Task = (props) => {
  return (
   <View style={styles.item}>
    <View style={styles.itemLeft}>
        <View style={styles.circle}></View>
        <Text style={styles.itemText}>{props.text}</Text>
    </View>
    <View style={styles.circular}></View>
   </View>
  )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,      
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    circle: {
        backgroundColor: '#D9B99B',
        opacity: 0.4,
        width: 24,
        height: 24,
        borderRadius: 24/2,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 12/2,
        borderWidth: 2,
        borderColor: '#D9B99B',
    },
});

export default Task;