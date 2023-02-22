export interface CharacterData {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: any[];
  enemies: any[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
}

export interface CharacterResponse {
  data: CharacterData[];
  count: number;
  previousPage: string;
  nextPage: string;
}
