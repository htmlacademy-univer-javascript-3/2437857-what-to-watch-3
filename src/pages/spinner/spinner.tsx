import '../../../public/css/loading.css';
function Spinner(): JSX.Element {
  return (
    <div className="container">
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <p>Подождите немного, идет загрузка...</p>
    </div>
  );
}

export default Spinner;
