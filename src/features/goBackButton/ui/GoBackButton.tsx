import './GoBackButton.scss';
import { useNavigate } from 'react-router';

export const GoBackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button className="back-button" onClick={handleGoBack}>
      Назад
    </button>
  );
};
