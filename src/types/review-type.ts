export type ReviewType = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};
