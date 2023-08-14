import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export const fetchToken = async (username) => {
    // if (username !== '') {
    //     const userData = await AsyncStorage.getItem(username)
    //     console.log("userData==", userData);
    //     if (userData) {
    //         console.log("userData==1", userData);
    //         return userData
    //     }
    //     else {
            return await getToken(username)
    //     }
    // }
    // else {
    //     console.log("Please enter username");
    // }
}

const getToken = async (username) => {
    console.log("username==getToken--", username);
    try {
        const res = await axios.get(`http://192.168.39.4:3001/token/${username}`)
        await AsyncStorage.setItem(username, JSON.stringify(res.data))
        console.log("res", res.data);
        return res.data.jwt
    }
    catch (error) {
        console.log("error==>", error); 
        return error
    }
}