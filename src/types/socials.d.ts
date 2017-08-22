interface ISocialsData {
  id: number;
  username: string;
  likes: number;
  followers: number;
  image: string;
}

interface ISocials {
  getImage(): string;
}
