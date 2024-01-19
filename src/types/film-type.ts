export type FilmType = {
  id: string;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}
