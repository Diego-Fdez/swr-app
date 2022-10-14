import useSWR from 'swr';
import { baseUrl, fetchRickAndMorty } from './services';

const Characters = () => {
  const { data, error, isValidating } = useSWR(baseUrl, fetchRickAndMorty, {
    suspense: true,
  });

  return (
    <div className='App'>
      {data.results.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
};

export default Characters;
