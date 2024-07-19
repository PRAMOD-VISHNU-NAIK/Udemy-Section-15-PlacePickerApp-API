import { useEffect, useState } from "react";

export function useFetch(fetchFun, initialValue){

    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        const fetchData = async () => {
          setIsFetching(true);
          try {
            const places = await fetchFun();
            setFetchedData(places);
          } catch (error) {
            setError({ message: error.message || "Failed to Fetch the Data!!" });
          }
          setIsFetching(false);
        };
        fetchData();
      }, [fetchFun]);

      return {
        isFetching,
        fetchedData,
        setFetchedData,
        error
      }
}