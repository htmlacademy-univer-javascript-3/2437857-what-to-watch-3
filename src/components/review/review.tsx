import { ReviewType } from '../../types/review-type';

type ReviewProps = {
  review: ReviewType;
};

function Review({ review }: ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={ new Date(review.date).toISOString().split('T')[0]}>
            {new Date(review.date).toLocaleDateString('en-US')}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
