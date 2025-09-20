import { useState, useEffect } from "react";
import fetchSubjects from "../services/subjectService";

const useSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [loadingSubjects, setLoadingSubjects] = useState(true);
    const [error, setError] = useState(null);

    const load = async () => {
        try {
            const data = await fetchSubjects();
            setSubjects(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch subjects:", err);
            setError(err);
        } finally {
            setLoadingSubjects(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    return { subjects, loadingSubjects, error, reload: load };
};

export default useSubjects;
