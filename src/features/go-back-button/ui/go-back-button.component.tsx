import { useNavigate } from "react-router";
import "./go-back-button.styles.scss";

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
