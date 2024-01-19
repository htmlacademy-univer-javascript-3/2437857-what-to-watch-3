export const ratingOps = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;

export type ChosenRating = typeof ratingOps[number];
