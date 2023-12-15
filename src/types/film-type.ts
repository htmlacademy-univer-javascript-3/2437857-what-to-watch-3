export type FilmType = {
  id: number;
  title: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  length: number;
  genre: string;
  year: number;
  isFavorite: boolean;
};
