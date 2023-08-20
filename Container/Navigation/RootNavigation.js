import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { JobScreen, DetailJobScreen } from '../Job';
import { Image, StyleSheet } from 'react-native';
import images from '../Metrics/Image';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainTabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}   >
            <Tab.Screen
                name="Home"
                component={JobScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: styles.text,
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={images.home}
                            style={{
                                height: size,
                                width: size,
                                tintColor: color,
                                marginTop: 10
                            }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Coin"
                component={JobScreen}
                options={{
                    tabBarLabel: 'Coin',
                    tabBarLabelStyle: styles.text,
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={images.coin}
                            style={{
                                height: size,
                                width: size,
                                tintColor: color,
                                marginTop: 10
                            }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Jobs"
                component={JobScreen}
                options={{
                    tabBarLabel: 'Jobs',
                    tabBarLabelStyle: styles.text,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={focused ? images.car_fill : images.car}
                            style={{
                                height: size,
                                width: size,
                                tintColor: color,
                                marginTop: 10
                            }} />
                    ),
                    tabBarBadge: '',
                }}

            />
            <Tab.Screen
                name="Menu"
                component={JobScreen}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarLabelStyle: styles.text,
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={images.menu}
                            style={{
                                height: size,
                                width: size,
                                tintColor: color,
                                marginTop: 10
                            }} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}  >
                <Stack.Screen name="MainTabs" component={MainTabNavigator} />
                <Stack.Screen name="DetailJobScreen" component={DetailJobScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator

const styles = StyleSheet.create({
    text: {
        fontSize: 12, marginTop: 5
    }
})