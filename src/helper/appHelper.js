import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

let isAlertShown = false;

export function showAPICallError(objAlert) {
    if(!isAlertShown){
        isAlertShown = true;
        Alert.alert(objAlert.title,
            objAlert.message,
            [
                {text: objAlert.leftBtn, onPress: () => {isAlertShown = false;}},
            ],
            { cancelable: false }
        )
    }
}

export function showNoInternetAlert() {
    if(!isAlertShown){
        isAlertShown = true;
        Alert.alert("No wireless connection",
            "Connect to Wi-Fi or cellular to access data.",
            [
                {text: 'OK', onPress: () => {isAlertShown = false;}},
            ],
            { cancelable: false }
        )
    }
}

export function setAsyncStorage(key,value) {
    AsyncStorage.setItem(key, value);
}
export function getAsyncStorage(key) {
    return AsyncStorage.getItem(key);
}