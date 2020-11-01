import { useEffect, useState } from 'react';
// import axios from 'axios';
import pokemonService from '../services/pokemonService';

const usePokemonFetcher = url => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [errorFetching, setErrorFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        // const resp = await axios.get(
        //   `https://pokeapi.co/api/v2${url}`
        // );
        const resp = await pokemonService.get(url);

        setData(resp);
      } catch (err) {
        const errorStatus = err?.response?.status ?? 500;
        setErrorFetching(errorStatus);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, isLoading, errorFetching };
};

export default usePokemonFetcher;
