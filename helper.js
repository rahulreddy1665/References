import axios from 'axios';
import { Linking } from "react-native";
import * as Keychain from 'react-native-keychain';
import { countryCodesConstants, notificationConsts, screenNames, URL_CONSTANTS } from '../constants/constants';
import * as RootNavigation from '../RootNavigation';
import { createChannel, handleCancleNotification } from "./notification.android";

export const isIOS = Platform.OS === `ios`;
export const isAndroid = Platform.OS === `android`;

// Onchange value for custom form input
export const onChangeByValueType = (inputProps, value, props) => {
    switch (props.inputName) {
        default:
            inputProps.field.onChange(value);
            break;
    }
};

// For responses :
export const processResponseData = (response, errorText) => {
    try {
        if (response) {
            switch (response.status) {
                case 200:
                    return response.data;
                case 201:

                    return response.data;
                case 400:
                    return response.data;
                case 401:

                    return response.data;
                case 403:

                    return response.data;
                case 404:
                    return response.data;
                case 500:

                    return response.data;
                default:
                    console.log(response);
                    break;
            }
        }
    } catch (error) {
        console.error("Could not parse response", error);
    }
};

export const notificationAction = async (notification, navigation) => {
    if (notification.foreground && notification.userInteraction) {
        if (notification.action) {
            switch (notification.action) {
                case notificationConsts.CALL_NOW_ACTION:
                case notificationConsts.CALL_NOW_ID:
                    Linking.openURL(`tel:${countryCodesConstants.INDIA}${notification.data.Phone}`);
                    break;
                case notificationConsts.VIEW_REQUESTS_ACTION:
                case notificationConsts.VIEW_REQUESTS_ID:
                    RootNavigation.navigate(screenNames.NOTIFICATION_SCREEN);
                    break;
                default: RootNavigation.navigate(screenNames.NOTIFICATION_SCREEN);
                    handleCancleNotification();
                    break;
            }
        } else {
            RootNavigation.navigate(screenNames.NOTIFICATION_SCREEN)
            handleCancleNotification();
        }
    }
}

export const getNotificationConfiguration = (navigation) => {
    return {
        // (required) Called when a remote or local notification is opened or received
        onRegister: function (token) {
            // For creating a push notification channel
            createChannel()
        },
        onNotification: function (notification) {
            if (notification.foreground === true) {
                (async () => {
                    let count = 1
                    await Keychain.setGenericPassword(`requests`, count.toString(), { service: "Notification requests" })
                })();
                (async () => {
                    await notificationAction(notification, navigation);
                })();
            }
            // const clicked = notification.userInteraction;
            // if (clicked) {
            //     Keychain.resetGenericPassword({ service: "Notification requests" });
            // } else {
            //     console.log("no interaction")
            // }
        },
        onAction: function (notification) {
            // console.log("NOTIFICATION:", notification);
            (async () => {
                await notificationAction(notification, navigation);
            })();
            // process the action
        },

        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },
        popInitialNotification: true,
        requestPermissions: Platform.OS === 'ios'
    }
}

export const getNotificationChannelCreation = () => {
    return {
        channelId: notificationConsts.CHANNEL_ID,
        channelName: notificationConsts.CHANNEL_ID,
        soundName: `Default`,
        importance: 4,
        vibrate: true,
    }
}
export const getAndroidLocalNotificationDetails = (remoteMessage) => {
    return {
        channelId: notificationConsts.CHANNEL_ID,
        autoCancel: true,
        message: remoteMessage.notification.body,
        bigText: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        data: remoteMessage.data,
        priority: notificationConsts.HIGH_PRIORITY,
        color: "#f06159",
        group: notificationConsts.GROUP,
        actions: [notificationConsts.CALL_NOW_ACTION, notificationConsts.VIEW_REQUESTS_ACTION],
        smallIcon: notificationConsts.SMALL_ICON
    }
}



// For token
const fetchCredentials = async () => {
    try {
        // Retrieve the credentials
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
            return {
                headers: {
                    "x-access-token": credentials.password,
                }
            }
        } else {
            console.log('No credentials stored');
        }
    } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
    }
    return false
}


// For getting total users count of the royal volunteers:

export const handleTotalusers = async () => {

    try {
        const token = await fetchCredentials()
        const response = await axios.get(URL_CONSTANTS.USERSCOUNT, token)
        return response
    } catch (error) {
        return error.response
    }
    return false
}



