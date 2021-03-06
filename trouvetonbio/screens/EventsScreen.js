import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const EventsScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>PAGE EVENEMENTS</Text>
            <Button title="Go to Cat" onPress={() =>{props.navigation.navigate({routeName: 'EventsCategory'})}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default EventsScreen;