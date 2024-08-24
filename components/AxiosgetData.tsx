import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Define types for the data structure
type User = {
    id: number;
    name: string;
    email: string;
};

const AxiosgetData = (): React.JSX.Element => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data using axios
    const fetchData = async () => {
        try {
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            setError('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={users}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default AxiosgetData;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingTop: 50,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    email: {
        fontSize: 16,
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    error: {
        color: "red",
        fontSize: 16,
    },
});
