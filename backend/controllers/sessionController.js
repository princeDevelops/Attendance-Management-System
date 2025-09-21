import { createSession, fetchSessions } from "../models/sessionsModel.js";



export const addSession = async (req, res) => {
    try {
        const newSession = await createSession(req.body);
        res.status(201).json({
            message: "Session Created Successfully.",
            data: newSession
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create session" });
    }
}



export const getSessions = async (req, res) => {
    try {

        const sessions = await fetchSessions();
        res.status(200).json({
            message: "Session Fetched Successfully",
            data: sessions
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: `Failed to Create Session : ${err.message}` });
    }
};