import { useEffect, useState } from "react";
import fetchFaculties from "../services/facultyService";

const useFaculties = () => {
    const [faculties, setFaculties] = useState([]);
    const [facultyLoading, setfacultyLoading] = useState(true);
    const [facultyError, setFacultyError] = useState(null);

    const load = async () => {
        try {
            const data = await fetchFaculties();
            setFaculties(data);
        } catch (err) {
            console.log(err);
            setFacultyError(err);
        } finally {
            setfacultyLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    return { faculties, facultyLoading, facultyError, reloadFaculties: load };
}

export default useFaculties;