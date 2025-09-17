import fetchSubjects from "../models/subjectsModel.js";

const getSubjects = async (req, res) => {
    try {
        const subjects = await fetchSubjects();
        console.log(subjects);
        res.status(200).json(subjects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export default getSubjects;