import axios from "axios";

const API_URL = "http://localhost:5000/sessions/add-session";


const createSession = async (sessionData) => {
    try {
        const res = await axios.post(API_URL, sessionData);
        console.log(res);
        
        return res.data;
    } catch (err) {
        console.error("Error creating session:", err);
        throw err;
    }
};


export default createSession;