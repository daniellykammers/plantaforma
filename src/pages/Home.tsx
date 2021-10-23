import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text>Você navegou</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
});
