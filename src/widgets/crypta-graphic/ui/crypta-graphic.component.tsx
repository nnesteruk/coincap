import { useEffect } from "react";
import { useParams } from "react-router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { fetchGetHistory } from "shared/api";
import {
  selectHistory,
  selectIsLoading,
  useAppDispatch,
  useAppSelector,
} from "shared/store";
import "./crypta-graphic.styles.scss";
export const CryptaGraphic = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const history = useAppSelector(selectHistory) || [];
  const isLoading = useAppSelector(selectIsLoading);
  const formattedData = history.map((item) => ({
    //!попробовать в select сделать
    time: new Date(item.time).toLocaleDateString(),
    priceUsd: parseFloat(item.priceUsd),
  }));
  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchGetHistory(id));
  }, []);

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      className="graphic__container"
    >
      {isLoading ? (
        <p>Идет загрузка...</p>
      ) : (
        <LineChart data={formattedData}>
          <CartesianGrid />
          <XAxis dataKey="time" angle={-45} textAnchor="end" height={100} />
          <YAxis
            dataKey="priceUsd"
            tickFormatter={(tick) => tick.toLocaleString()}
          />
          <Tooltip
            labelFormatter={(label) => `Дата: ${label}`}
            formatter={(value) => `${value.toLocaleString()}`}
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
