import messaging from '@react-native-firebase/messaging';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PushNotification from "react-native-push-notification";
import { ToastProvider } from 'react-native-toast-notifications';
import { BellIcon } from './assets/Icons/BellIcon';
import { HomeIcon } from './assets/Icons/HomeIcon';
import { RequestIcon } from './assets/Icons/RequestIcon';
import { SettingIcon } from './assets/Icons/SettingsIcon';
import { headerLessStack, notificationConsts, screenNames } from './constants/constants';
import { navigationRef } from './RootNavigation';
import Forgotpassword from './screens/Authentication/Forgotpassword';
import Login from './screens/Authentication/Login';
import PasswordOtp from './screens/Authentication/PasswordOtp';
import Pinscreen from './screens/Authentication/Pinscreen';
import ErrorBoundary from './screens/ErrorBoundary';
import NetworkError from './screens/NetworkError';
import AccountScreen from './screens/Registration/AccountScreen';
import OTPscreen from './screens/Registration/OTPscreen';
import PasswordScreen from './screens/Registration/PasswordScreen';
import RequestLogin from './screens/Registration/RequestLogin';
import Signup from './screens/Registration/Signup';
import WelcomeScreen from './screens/Registration/WelcomeScreen';
import Splashscreen from './screens/Splashscreen/Splashscreen';
import Dashboard from './screens/Users/Dashboard';
import EditPasswordScreen from './screens/Users/EditPasswordScreen';
import Feedback from './screens/Users/Feedback';
import Notifications from './screens/Users/Notifications';
import ProfileDetails from './screens/Users/ProfileDetails';
import RequestAnimation from './screens/Users/RequestAnimation';
import Requests from './screens/Users/Requests';
import Settings from './screens/Users/Settings';
import * as Keychain from 'react-native-keychain';
import { showNotification } from './helpers/notification.android';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

{/* ********** */ }
{/*Tab Navigator are nested inside stack navigaton */ }
{/*ScreenNames & Options are imported from Constant Page */ }
{/*Variables */ }
{/* ********** */ }
const BottomTabs = () => {
    const navigation = useNavigation()
    // pushnotifications function
    useEffect(() => {
        // when the new notification arrive
        messaging().onMessage(async remoteMessage => {

            if (remoteMessage) {
                showNotification(remoteMessage)
                // (async () => {
                //   let count = 1
                //   await Keychain.setGenericPassword(`requests`, count.toString(), { service: "Notification requests" })
                // })();
            }
        });
        // when the user open the notification
        messaging().onNotificationOpenedApp(remoteMessage => {
            if (remoteMessage) {
                (async () => {
                    let count = 1
                    await Keychain.setGenericPassword(`requests`, count.toString(), { service: "Notification requests" })
                })();
                navigation.navigate("Notification")
            }
            // 
        });
        messaging().onTokenRefresh(async tokenRefresh =>
            console.log('Token refresh!', tokenRefresh)
        );
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    navigation.navigate("Notification")
                }
            });

    }, []);
    return (
        <Tab.Navigator backBehavior="history" screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                bottom: 0,
                elevation: 0,
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                height: 62,
                ...styles.shadow
            },
            tabBarHideOnKeyboard: true,
        }} >
            <Tab.Screen name={screenNames.DASHBOARD_SCREEN} component={Dashboard} options={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <HomeIcon stroke={focused ? "#E2414C" : "#000000"} />
                        <Text style={{ color: focused ? "#E2414C" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "Poppins-Regular" }}>HOME</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name={screenNames.NOTIFICATION_SCREEN} component={Notifications} options={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <BellIcon stroke={focused ? "#E2414C" : "#000000"} />
                        <Text style={{ color: focused ? "#E2414C" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "Poppins-Regular" }}>REQUESTS</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name={screenNames.REQUESTS_SCREEN} component={Requests} options={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <RequestIcon stroke={focused ? "#E2414C" : "#000000"} />
                        <Text style={{ color: focused ? "#E2414C" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "Poppins-Regular" }}>REQUEST</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name={screenNames.SETTINGS_SCREEN} component={Settings} options={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <SettingIcon stroke={focused ? "#E2414C" : "#000000"} />
                        <Text style={{ color: focused ? "#E2414C" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "Poppins-Regular" }}>PROFILE</Text>
                    </View>
                ),
            }} />
        </Tab.Navigator >
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
{/* ********** */ }
{/*Tab Navigator  is nested inside stack navigator */ }
{/*ScreenNames & Options are imported from Constant Page */ }
{/*StackNavigator basically stacks the screen on top of one another */ }
{/* ********** */ }
const App = () => {
    return (
        // Stack screen navigation 
        <ErrorBoundary>
            <ToastProvider>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator initialRouteName={screenNames.SPLASHSCREEN}>
                        <Stack.Screen name={screenNames.SPLASHSCREEN} component={Splashscreen} options={headerLessStack} />
                        <Stack.Screen name={screenNames.WELCOME_SCREEN} component={WelcomeScreen} options={headerLessStack} />
                        <Stack.Screen name={screenNames.LOGIN_SCREEN} component={Login} options={headerLessStack} />
                        <Stack.Screen name={screenNames.SIGNUP_SCREEN} component={Signup} options={headerLessStack} />
                        <Stack.Screen name={screenNames.PASSWORDSCREEN} component={PasswordScreen} options={headerLessStack} />
                        <Stack.Screen name={screenNames.OTPSCREEN} component={OTPscreen} options={headerLessStack} />
                        <Stack.Screen name={screenNames.ACCOUNTSCREEN} component={AccountScreen} options={headerLessStack} />
                        <Stack.Screen name={screenNames.TABS_SCREEN} component={BottomTabs} options={headerLessStack} />
                        <Stack.Screen name={screenNames.FEEDBACK_SCREEN} component={Feedback} options={headerLessStack} />
                        <Stack.Screen name={screenNames.PROFILE_SCREEN} component={ProfileDetails} options={headerLessStack} />
                        <Stack.Screen name={screenNames.CHANGEPASSWORD_SCREEN} component={EditPasswordScreen} options={headerLessStack} />
                        <Stack.Screen name={screenNames.PASSWORD_ANIMATION} component={RequestAnimation} options={headerLessStack} />
                        <Stack.Screen name={screenNames.NETWORK_ERROR} component={NetworkError} options={headerLessStack} />
                        <Stack.Screen name={screenNames.FORGOTPASSWORD_SCREEN} component={Forgotpassword} options={headerLessStack} />
                        <Stack.Screen name={screenNames.PASSWORD_OTP} component={PasswordOtp} options={headerLessStack} />
                        <Stack.Screen name={screenNames.PIN_SCREEN} component={Pinscreen} options={headerLessStack} />
                        <Stack.Screen name={screenNames.REQUESTWITHOUTTOKEN} component={RequestLogin} options={headerLessStack} />
                        {/* <Stack.Screen name={screenNames.NOTIFICATION_SCREEN} component={Notifications} options={headerLessStack} /> */}
                    </Stack.Navigator>
                </NavigationContainer>
            </ToastProvider>
        </ErrorBoundary>

    )
}

export default App