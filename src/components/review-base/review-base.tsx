import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {postReviewAction} from '../../store/api-actions';
import {ratingOps, ChosenRating} from '../../types/chosen-rating';

function ReviewBase(): JSX.Element {
  const id = useParams().id || '';
  const filmId = id;
  const [rating, setRating] = useState<ChosenRating | null>(null);
  const [review, setReview] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (rating && filmId) {
      const numberedRating = Number(rating);
      setIsFormDisabled(true);
      dispatch(postReviewAction({ filmId: filmId, rating: numberedRating, comment: review })).finally(
        () => setIsFormDisabled(false)
      );
    }
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value) as ChosenRating);
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };


  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <fieldset className="rev_fieldset" disabled={isFormDisabled}>
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
              <button className="add-review__btn" type="submit" disabled={!rating || !review || review.length < 50 }>Post</button>
            </div>

          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ReviewBase;
