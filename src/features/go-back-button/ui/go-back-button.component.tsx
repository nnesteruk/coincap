import { useNavigate } from "react-router";
import "./go-back-button.styles.scss";
import { Button } from "@mui/material";

export const GoBackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Button
      variant="outlined"
      size="medium"
      className="back-button"
      onClick={handleGoBack}
      color="secondary"
    >
      Назад
    </Button>
  );
};
