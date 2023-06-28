export interface ISneaker {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface ISneakerData extends ISneaker {
  sneakers: ISneaker[];
}
