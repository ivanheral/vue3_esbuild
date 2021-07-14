export interface List {
  title: string;
  cards: Array<string>;
}

export interface Board {
  list: Array<List>;
}
