import { useState } from 'react';
import { FilmType } from '../../types/film-type';
import { ReviewType } from '../../types/review-type';
import Details from './tabs-parts/details';
import Overview from './tabs-parts/overview';
import Reviews from './tabs-parts/reviews';

type TabsProps = {
  film: FilmType;
  reviews: ReviewType[];
};

const tabs: string[] = ['Overview', 'Details', 'Reviews'];

function Tabs({ film, reviews }: TabsProps) {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0]);

  const filmTabsComponents: { [key: string]: JSX.Element } = {
    Overview: <Overview film={film} />,
    Details: <Details film={film} />,
    Reviews: <Reviews reviews={reviews} />,
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map(
            (tab) => (
              <li
                key={tab}
                className={`film-nav__item ${
                  currentTab === tab ? 'film-nav__item--active' : ''
                }`}
              >
                <button
                  className="film-nav__link"
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
      {filmTabsComponents[currentTab]}
    </div>
  );
}

export default Tabs;
