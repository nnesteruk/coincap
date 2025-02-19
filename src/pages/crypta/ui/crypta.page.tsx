import { FormComponent } from "entities/form";
import { GoBackButton } from "features/go-back-button";
import { CryptaName } from "widgets/crypta-name";
import { CryptaCard } from "entities/crypta-card";
import { CryptaGraphic } from "widgets/crypta-graphic";
import "./crypta-page.styles.scss";

export const CryptaPage = () => {
  return (
    <div className="container">
      <div className="crypta-page">
        <CryptaName />
        <FormComponent />
        <CryptaCard />
        <div className="crypta-page__graphic">
          <CryptaGraphic />
        </div>
        <div className="crypta-page__button">
          <GoBackButton />
        </div>
      </div>
    </div>
  );
};
