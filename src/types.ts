export interface GiphyFilter {
  text: string;
  limit?: number;
}

export interface Gyph {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}
