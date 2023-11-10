import MainPage from '../pages/main-page/main-page';

type AppProps = {
  title: string;
  genre: string;
  releaseYear: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainPage {...props} />
  );
}

export default App;
