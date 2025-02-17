import { config } from '../model/config';
import './modal.scss';
import { useSubmit } from '../hooks/useSubmit.hook';
import { CryptaData } from 'shared/types/crypta.type';
import { selectType, useAppSelector } from 'shared/state';

export const FormComponent = () => {
  const currencyString = localStorage.getItem('currency');
  const currency: CryptaData | null = currencyString
    ? JSON.parse(currencyString)
    : null;
  const type = useAppSelector(selectType);
  const { handleSubmit } = useSubmit(currency);
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {type === 'form' && (
          <h1 className="form__title">
            Купить <span>{currency?.name || ''}</span>
          </h1>
        )}
        <p className="form__subtitle">Введите количество</p>
        {config.map((item) => (
          <input
            key={item.name}
            {...item}
            pattern={item.pattern?.source}
            className="form__input"
          />
        ))}
        <button type="submit" className="form__button">
          Добавить
        </button>
      </form>
    </div>
  );
};
