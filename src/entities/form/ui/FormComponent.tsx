import { config } from '../model/config';
import './modal.scss';
import { useSubmit } from '../hooks/useSubmit.hook';

export const FormComponent = () => {
  const { handleSubmit } = useSubmit();
  return (
    <div className="modal">
      <h1 className="modal__title">Купить</h1>
      <form onSubmit={handleSubmit} className="form">
        <p className="form__title">Введите количество</p>
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
