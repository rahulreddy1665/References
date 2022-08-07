
const BASE_URL = `https://rv.zevcore.net`;

// const BASE_URL = `http://192.168.1.50:3028`


export const URL_CONSTANTS = {
    ACCOUNTCREATION_URL: `${BASE_URL}/api/user_mobile`,
    USER_URL: `${BASE_URL}/api/user`,
    SINGLEUSER_URL: `${BASE_URL}/api/user_one`,
    USERSCOUNT: `${BASE_URL}/api/user_count`,
    REQUEST_URL: `${BASE_URL}/api/request`,
    NOTIFICATIONS_URL: `${BASE_URL}/api/request2`,
    FEEDBACK_URL: `${BASE_URL}/api/feedback`,
    CHANGEPASSWORD_URL: `${BASE_URL}/api/update_password`,
    LOGIN_URL: `${BASE_URL}/api/auth/signin`,
    CHECKUSER_URL: `${BASE_URL}/api/user_phone`,
    RESENT_OTP: `${BASE_URL}/api/resend_otp`,
    OTPVERIFICATION_URL: `${BASE_URL}/api/otp_verify`,
    PASSWORD_RESET: `${BASE_URL}/api/password_reset`,
    FETCHDONORS_URL: `${BASE_URL}/api/user_pincode`,
    SHARE_APP_LINK: `https://www.royalvolunteers.in/share.html`
}

export const notificationConsts = {
    CHANNEL_ID: `fcm_fallback_notification_channel`,
    HIGH_PRIORITY: `high`,
    CALL_NOW_ACTION: `Call now`,
    VIEW_REQUESTS_ACTION: `View requests`,
    SMALL_ICON: `ic_stat_name`,
    GROUP: `RVNotificationGroup`,
    CREATE_CHANNEL_CREATE: `createChannel returned`,
    NOTIFICATION_CANCELLED: `Notification Cancelled`,
    USER_ACTION_ID: `userAction`,
    CALL_NOW_ID: `Call now`,
    VIEW_REQUESTS_ID: `View requests`,
}

export const responseStringData = {
    SUCCESS: `Success`,
    ERROR: `Error`,
    UNSUCCESSFUL: `Unsuccessful`,
    ERROR: `Error`,
    BAD_REQUEST: `Bad Request`,
    RESPONSE_MESSAGE: `Response Message: `,
    USER_SUCCESSFULLY_REGISTER: `Registration Successful`,
    TOKEN_INVALID: `Token is Invalid`,
    TOKEN_EXPIRED: `Token is Expired`,
    REDIRECT_USER_LOGIN: `Redirect user login`,
    SUCCESS_LOGOUT: `User successfully signed out`,
    SUCCESSFULLY_UPDATED: `Successfully Updated`,
    NOT_LOGGED_IN: `Not logged in `,
}

export const screenNames = {
    SPLASHSCREEN: `Splashscreen`,
    WELCOME_SCREEN: `Welcome`,
    LOGIN_SCREEN: `Login`,
    SIGNUP_SCREEN: `Signup`,
    PASSWORDSCREEN: `Password`,
    OTPSCREEN: `OTP`,
    ACCOUNTSCREEN: `Account`,
    TABS_SCREEN: `Tabs`,
    DASHBOARD_SCREEN: `Dashboard`,
    NOTIFICATION_SCREEN: `Notification`,
    REQUESTS_SCREEN: `Requests`,
    SETTINGS_SCREEN: `Settings`,
    FEEDBACK_SCREEN: `Feedback`,
    PROFILE_SCREEN: `Profile`,
    CHANGEPASSWORD_SCREEN: `Editpwd`,
    PASSWORD_ANIMATION: `Animation`,
    ERROR_SCREEN: `Error`,
    NETWORK_ERROR: `NetworkError`,
    FORGOTPASSWORD_SCREEN: `Forgot`,
    PASSWORD_OTP: `PSWD`,
    PIN_SCREEN: `pin`,
    REQUESTWITHOUTTOKEN: `REQUEST`
}

export const miscMessage = {
    RESEND_OTP_IN: `Resend OTP in`,
    RESEND_OTP: `Resend OTP`,
    SUBMITTING_IN: `Submitting OTP in`,
    RESET_NAVIGATION: `ResetNavigation`,
    CONFIRM_SECRET: `SecretConfirm`,
    INCORRECT_OTP: `IncorrectOTP`,
    SUCCESS: `Success`,
    VERIFIED: `Verified`,
    REGISTERED: `Registered`,
    ERROR: `ERROR`,
    DUPLICATE: `Duplicate`,
    NONE: `none`,
    WORDS: `words`,
    DATE: `date`,
    SET: `set`,
    NO: `N`,
    NOW: `Now`,
    YES: `Y`,
    CALL: `Call`,
    LOADING: `Loading`,
    RATE_US: `Rate Us`,
    DISCLAIMER_PRIVACY_POLICY: `Disclaimer and Privacy policy`,
    LOGOUT: `Logout`,
    PH_QUERY_PARAM: `?ph=`,
    ON_CHANGE: `onChange`,
    RESET: `Reset`,
    BLOOD_REQUEST: `bloodRequest`,
    FORGOT_PASSWORD: `forgotSecret`,
    SUCCESSFUL: `Successful`,
    UNSUCCESSFUL: `Unsuccessful`,
    INVALID_USER: `invalidUser`,
    TRANSPARENT: `transparent`,
    DATE_PICKER_FORMAT: `DD/MM/YYYY`,
    DOB_DATE_FORMAT: `YYYY-MM-DD`,
    HARDWARE_BACK_PRESS: `hardwareBackPress`,
    SELECT_DATE: `Select a Date`,
    TOKEN_VALID: `TokenValid`,
    TOKEN_INVALID: `TokenInvalid`,
    TOKEN_EXPIRED: `TokenExpired`,
    INVALID_REQUEST: `InvalidRequest`,
    USER_SERVICE_TOKEN_KEY: `user`,
    DEVICE_TOKEN: `device_token`,
    CANCEL_TYPE: `cancel`,
    DASHBOARD: `Dashboard`,
    NOTIFICATION_REQUESTS: `notificationRequests`,
    ACCEPTED_TERMS: `acceptedTerms`,
    REQUESTS: `requests`,
    INFINITE: `infinite`,
    NEEDED_REQUEST: `needed_request`,
    IMMEDIATE: `Immediate`,
    ATTEMPT_REMAINING: `Attempts remaining`,
    BACKSPACE: `Backspace`,
    YEARS: `Years`,
    YEARS_MOMENT: `years`,
    APP_SETTINGS: 'app-settings:',
    SAVE: `Save`,
    EDIT: `Edit`,
    TAIL: `tail`,
    TIME_FORMAT: `hh:mm A`,
    NOTIFICATION: `notification`,
    RELOAD_APPLICATION: `Reload Application`,
    EXCLUDE_TYPE: `com.apple.reminders.sharingextension`,
    ACCEPTED: `accepted`,
    BULLET: `\u2022`,
    CONNECTED: `Connected`,
    DISCONNECTED: `Disconnected`,
    CHECK_CONNECTION_DETAILS: `Please check your internet connection and try again.`
}
export const countryCodesConstants = {
    INDIA: `+91`
}


export const headerLessStack = {
    animationEnabled: true,
    headerShown: false,
    unmountOnBlur: true,
}

export const successFulMessages = {
    FEEDBACK_SUBMITTED_SUCCESSFULLY: `Feedback submitted successfully`,
    SENT_SMS_SUCCESSFULLY: `Successfully sent message!`,
    NOTIFICATION_SENT_DONERS: `Notification sent to doners. Someone will call you!`,
    SUCCESSFULLY_REGISTERED: `Successfully registered your details`,
    SUCCESSFULLY_RESET_PASSWORD: `Password reset sucessful. Please sign in`,
    ACCESS_TOKEN_RETRIEVED_SUCCESSFULLY: `Access Token retrieved successfully!`,
    VALIDATING_ACCESS_TOKEN: `Validating Access Token!`,
    TOKEN_IS_VALID: `Token is valid!`,
    SUCCESSFULLY_SAVED_TOKEN: `Successfully saved token`,
    TOKEN_FETCHED_SUCESSFULLY: `Fetched the token successfully!`,
    SUCCESSFUL_LOG_OUT: `SuccessFully logged out`,
    DASHBOARD_DETAILS_UPDATE: `Updated your availability successfully!`,
    DASHBOARD_PINCODE_DETAILS_UPDATE: `Updated your pincode successfully!`,
    USER_LOGIN_TOKEN_STATUS: `User login token status`,
    USER_ACCOUNT_STATUS: `User account status`,
    RATE_US_MESSAGE: `Would you like to share your review with us?\n\nThis will help and motivate us a lot.`,
    SHARED_DETAILS_SUCCESSFULLY: `Shared details successfully`,
    SHARE_TITLE: `Royal Volunteers - Donate or Request for Blood`,
    SHARE_DIALOG_TITLE: `Share Royal Volunteers`,
    SHARE_MESSAGE: `Please register to Royal Volunteers app and Donate or Request for Blood when in need, AppLink :`
}

export const headerLessStackwithunmount = {
    animationEnabled: true,
    headerShown: false,
    unmountOnBlur: false,
}
export const keyBoardTypeConst = {
    DEFAULT: `default`,
    ANDROID_NUMERIC: `numeric`,
    IOS_NUMERIC: `number-pad`,
    TELPHONETYPE: `telephoneNumber`,
    EMAIL: `email-address`,
    TITLE: `jobTitle`,
    IOS_URL: `url`,
    URL: `URL`,
    USERNAME: `username`,
    NONE: `none`,
    NEW_PASSWORD: `newPassword`,
    ONETIMECODE: `oneTimeCode`,
    NAME: `name`,
    PASSWORD: `password`
}

export const INPUT_FIELD_NAME = {
    PHONE_NUMBER: `phoneNumber`,
    PASSWORD: `password`,
    OLDPASSWORD: `oldpassword`,
    FULL_NAME: `fullName`,
    CONFIRMPASSWORD: `ConfirmPassword`,
    PinCode: `PinCode`,
    Hospital: `Hospital`,
    Feedback: `Feedback`
};

export const INPUT_PLACE_HOLDER_CONSTANTS = {
    PHONE_NUMBER: `Phone Number                                                            `,
    PASSWORD: `Pin                                                                    `,
    OLDPASSWORD: `Old Password                                                                    `,
    CurrentPASSWORD: `CurrentPin                                                                   `,
    NewPASSWORD: `NewPin                                                                   `,
    ConfirmPASSWORD: `ConfirmPin                                                                   `,
    FULL_NAME: `Full Name                                                                   `,
    PinCode: `PinCode                                                                   `,
    Hospital: `Hospital                                                                   `,
    Feedback: `Feedback                                                                   `,
};

export const FORM_INPUT_RULES = {
    phoneNumberRule: {
        required: {
            value: true,
            message: `Please enter the phone number`,
        },
        minLength: {
            value: 10,
            message: `Please enter 10 digit mobile number only`,
        },
        maxLength: {
            value: 10,
            message: `Please enter 10 digit mobile number`,
        },
    },
    passwordRule: {
        required: {
            value: true,
            message: `Please enter the new password`,
        },
        minLength: {
            value: 4,
            message: `Password not 4 digits`,
        },
        maxLength: {
            value: 4,
            message: `Please enter 4 Charater Password`,
        },
    },
    confirmpasswordRule: {
        required: {
            value: true,
            message: `Please enter the confirm  password`,
        },
        minLength: {
            value: 6,
            message: `Password should be of 4 digits`,
        },
        maxLength: {
            value: 4,
            message: `Please enter 4 digit Password`,
        },
    },
    emailAddressRule: {
        required: {
            value: true,
            message: `Please enter the email address`,
        },
        pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
            message: `Entered value does not match email format`
        }
    },
    secretRule: {
        required: {
            value: true,
            message: `Please enter the password`,
        },
        minLength: {
            value: 4,
            message: `Password should be of 4 digits`,
        },
        maxLength: {
            value: 4,
            message: `Password should be of 4 digits`,
        },
    },
    pinCodeRule: {
        required: {
            value: true,
            message: `Please enter the pinCode`,
        },
        maxLength: {
            value: 6,
            message: `Please enter 6 digit pinCode`,
        },
        minLength: {
            value: 6,
            message: `Please enter 6 digit pinCode`,
        },
    },
    hospitalRule: {
        required: {
            value: true,
            message: `Please enter the hospital`,
        },
        minLength: {
            value: 6,
            message: `Please enter name hospital`,
        },
    },
    feedbackRule: {
        required: {
            value: true,
            message: `Please enter the feedback`,
        },
        minLength: {
            value: 6,
            message: `Please enter name feedback atleast 6 letters`,
        },
    },
};

export const stringConstants = {
    EMPTY: ``,
    SPACE: ` `
}