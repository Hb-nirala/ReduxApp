import axios from 'axios';

export const getToken = async (username) => {
    console.log("username,getToken", username);
    try {
        const res = await axios.get(`http://192.168.39.4:3001/token/${username}`)
        console.log("res", res);
        return res.data.jwt
    }
    catch (error) {
        console.log("error==>", JSON.stringify(error));
        return error
    }
}