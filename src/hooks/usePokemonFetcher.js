import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const usePokemonFetcher = url => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        const { default: pokemonService } = await import(
          '../services/pokemonService'
        );

        const resp = await pokemonService.get(url);

        setData(resp);
        setLoading(false);
      } catch (err) {
        const errorStatus = err?.response?.status ?? 500;
        if (errorStatus === 404) history.push('/404');
        history.push('/500');
      }
    };

    getData();
  }, [history, url]);

  return { data, isLoading };
};

export default usePokemonFetcher;
