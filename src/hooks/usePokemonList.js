import { useEffect, useState } from 'react';
import pokemonService from '../services/pokemonService';
// import axios from 'axios';

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorFetching, setErrorFetching] = useState(false);

  useEffect(() => {
    setLoading(true);

    pokemonService
      .getPokemonList()
      .then(resp => {
        setPokemonList(resp);
        setLoading(false);
      })
      .catch(() => {
        setErrorFetching(true);
        setLoading(false);
      });
  }, []);

  return { errorFetching, isLoading, pokemonList };
};

export default usePokemonList;
