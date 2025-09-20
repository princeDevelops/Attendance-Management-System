import { useEffect, useState } from "react";
import fetchLocations from "../services/locationService";


const useVenues = () => {
    const [venues, setVenues] = useState([]);
    const [loadingVenues, setLoadingVenues] = useState(true);
    const [venueError, setVenueError] = useState(null);

    const load = async () => {
        try {
            const data = await fetchLocations();
            setVenues(data);
        } catch (err) {
            console.log(`Error While Fetching Venues : ${err}`);
            setVenueError(err);
        } finally {
            setLoadingVenues(false);
        }
    }


    useEffect(() => {
        load();
    }, []);


    return { venues, loadingVenues, venueError, reloadVenues: load };
}

export default useVenues;