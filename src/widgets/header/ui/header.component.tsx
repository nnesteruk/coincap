import { AppBar, IconButton, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import "./header.styles.scss";
import { open, useAppDispatch, useAppSelector } from "shared/store";
import {
  selectData,
  selectSum,
  selectTopThree,
} from "shared/store/slices/crypta.slice";
import { fixed } from "shared/helpers";

export const Header = () => {
  const suma = useAppSelector(selectSum);
  const cryptaData = useAppSelector(selectData);
  const dispatch = useAppDispatch();
  const topThree = useAppSelector(selectTopThree);
  const handleOpen = () => {
    dispatch(open({ type: "portfolio", data: cryptaData }));
  };

  return (
    <AppBar position="fixed" className="header">
      <div className="header__container container">
        <div className="header__section header__section--first">
          <div className="header__titles">
            {topThree.map((val) => (
              <article className="header__currency" key={val.id}>
                <Typography fontWeight={600}>{val.name}</Typography>
                <Typography>{fixed(val.priceUsd)} $</Typography>
              </article>
            ))}
          </div>
        </div>
        <div className="header__section header__section-second">
          <IconButton onClick={handleOpen}>
            <WorkOutlineIcon />
          </IconButton>
          <div>
            <Typography textAlign={"center"} fontWeight={500}>
              Итого:
            </Typography>
            <Typography fontSize={18}>
              {suma ? fixed(String(suma)) : 0} $
            </Typography>
          </div>
        </div>
      </div>
    </AppBar>
  );
};
