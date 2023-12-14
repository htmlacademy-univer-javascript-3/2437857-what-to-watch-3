import {ChangeEvent, Fragment, useState} from 'react';

const ratingOps = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'] as const;

function AddReview(): JSX.Element {
  const [rating, setRating] = useState<typeof ratingOps[number] | null>(null);
  const [review, setReview] = useState('');

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value as typeof ratingOps[number]);
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };


  return (
    <div className="add-review">
      <form action="AddReview#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingOps.map((option) => (
              <Fragment key={option}>
                <input
                  className="rating__input"
                  id={`star-${option}`}
                  type="radio"
                  name="rating"
                  value={option}
                  checked={rating === option}
                  onChange={handleRatingChange}
                />
                <label className="rating__label" htmlFor={`star-${option}`}>
                  Rating {option}
                </label>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            value={review} onChange={handleReviewChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReview;
