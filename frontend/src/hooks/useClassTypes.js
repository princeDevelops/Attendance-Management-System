import { useEffect, useState } from "react";
import fetchClassTypes from "../services/classTypeService";


const useClassTypes = () => {
    const [classTypes, setClassTypes] = useState([]);
    const [classTypesLoading, setClassTypesLoading] = useState(true);
    const [classTypesError, setClassTypesError] = useState(null);

    const load = async () => {
        try {

            const data = await fetchClassTypes();
            setClassTypes(data);

        } catch (err) {
            console.log(`Error while fetching class Types : ${err}`);

            setClassTypesError(err)
        } finally {
            setClassTypesLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);


    return { classTypes, classTypesLoading, classTypesError, reloadClassTypes: load };

};



export default useClassTypes;


