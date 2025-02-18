import { useEffect } from 'react';
import { useParams } from 'react-router';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { fetchGetHistory } from 'shared/api';
import {
  selectHistory,
  selectIsLoading,
  useAppDispatch,
  useAppSelector,
} from 'shared/state';
import './CryptaGraphic.scss';
export const CryptaGraphic = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const history = useAppSelector(selectHistory) || [];
  const isLoading = useAppSelector(selectIsLoading);
  const formattedData = history.map((item) => ({
    time: new Date(item.time).toLocaleDateString(), // Преобразуем метку времени в строку (можно использовать другие форматы)
    priceUsd: parseFloat(item.priceUsd), // Преобразуем цену в число
  }));
  useEffect(() => {
    id && dispatch(fetchGetHistory(id));
  }, []);

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      className="graphic__container">
      {isLoading ? (
        <p>Идет загрузка...</p>
      ) : (
        <LineChart data={formattedData}>
          <CartesianGrid />
          <XAxis
            dataKey="time"
            angle={-45} // Наклон оси X для улучшения читаемости
            textAnchor="end" // Устанавливаем выравнивание текста
            height={100}
          />
          <YAxis
            dataKey="priceUsd"
            tickFormatter={(tick) => tick.toLocaleString()} // Форматирование чисел на оси Y
          />
          <Tooltip
            labelFormatter={(label) => `Дата: ${label}`} // Форматирование тултипа
            formatter={(value) => `${value.toLocaleString()}`} // Форматирование значений в тултипе
          />
          <Line
            type="monotone"
            dataKey="priceUsd"
            stroke="#8884d8"
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
};
