import createSession from "../models/sessionsModel.js";


const addSession = async (req, res) => {
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


export default addSession;