import { ReviewType } from '../../types/review-type';

type ReviewProps = {
  review: ReviewType;
};

function Review({ review }: ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.username}</cite>
          <time className="review__date" dateTime={review.date}>
            {review.date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
