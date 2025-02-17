import { FormComponent } from 'entities/formComponent';
import './cryptaPage.scss';
import { GoBackButton } from 'features/goBackButton';
import { CryptaName } from 'widgets/cryptaName';
import { CryptaCard } from 'entities/cryptaCard';
export const CryptaPage = () => {
  return (
    <div className="container">
      <div className="crypta-page">
        <div className="crypta-page__title">
          <CryptaName />
        </div>
        <FormComponent />
        <CryptaCard />
        <div className="crypta-page__button">
          <GoBackButton />
        </div>
      </div>
    </div>
  );
};
