export interface CharacterImage {
  medium: string;
  original: string;
}

export interface Character {
  id: number;
  name: string;
  character: {
    id: number;
    name: string;
    image?: CharacterImage;
  };
}
