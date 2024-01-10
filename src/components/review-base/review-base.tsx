import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {postReviewAction} from '../../store/api-actions';
import {ratingOps, ChosenRating} from '../../types/chosen-rating';

function AddReview(): JSX.Element {
  const {id} = useParams();
  const filmId = Number(id);
  const [rating, setRating] = useState<ChosenRating | null>(null);
  const [review, setReview] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (rating && filmId) {
      setIsFormDisabled(true);
      dispatch(postReviewAction({ text: review, rating: Number(rating), filmId })).finally(
        () => setIsFormDisabled(false)
      );
    }
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    // :(
    const value = evt.target.value;
    setRating(value as unknown as ChosenRating);
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
              <button className="add-review__btn" type="submit" disabled={!rating || !review}>Post</button>
            </div>

          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddReview;
