import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TabLayout() {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.black }}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    headerShadowVisible: false,
                    tabBarStyle: {
                        backgroundColor: Colors.grey,
                        borderRadius: 15,
                        margin: 15,
                        borderTopWidth: 0
                    }
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        title: 'Home',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="friends"
                    options={{
                        headerShown: false,
                        title: 'Friends',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'people' : 'people-outline'} color={color} size={24} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="middle"
                    options={{
                        tabBarLabel: '',
                        headerShown: false,
                        tabBarIcon: () => (
                            <TouchableOpacity onPress={undefined}>
                                <Image
                                    source={require('../../assets/images/tabBar.png')}
                                    style={styles.middleTabIcon}
                                />
                            </TouchableOpacity>
                        ),
                        tabBarStyle: {
                            display: 'none',
                        },
                    }}
                />
                <Tabs.Screen
                    name="inbox"
                    options={{
                        headerShown: false,
                        title: 'Add',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'add' : 'add-outline'} color={color} size={24} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="account"
                    options={{
                        headerShown: false,
                        title: 'Account',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
                        ),
                    }}
                />
            </Tabs>
        </View>
    )
}


const styles = StyleSheet.create({
    middleTabIcon: {
        width: 80,
        height: 150,
    },
});