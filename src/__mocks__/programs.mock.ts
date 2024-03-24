import { ProgramProps, ProgramGenres, ProgramTypes, ProgramRatings, ProgramLanguages } from '@/types';

export const generateMockData = (): ProgramProps[] => {
  const mockData: ProgramProps[] = [];

  const genres: ProgramGenres[] = Object.values(ProgramGenres);
  const types: ProgramTypes[] = Object.values(ProgramTypes);
  const ratings: ProgramRatings[] = Object.values(ProgramRatings);
  const languages: ProgramLanguages[] = Object.values(ProgramLanguages);

  for (let i = 0; i < 10; i++) {
    const item: ProgramProps = {
      id: i + 1,
      title: `Program ${i + 1}`,
      description: `Description of Program ${i + 1}`,
      type: types[i % types.length],
      image: `https://example.com/image${i + 1}.jpg`,
      rating: ratings[i % ratings.length],
      genre: genres[i % genres.length],
      language: languages[i % languages.length],
      year: 2022,
    };
    mockData.push(item);
  }

  return mockData;
};
