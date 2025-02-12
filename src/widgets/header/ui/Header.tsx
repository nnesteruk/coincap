import { AppBar, IconButton, Typography } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import './header.scss';
export const Header = () => {
  return (
    <AppBar position="static">
      <div className="header container">
        <div className="header__section header__section--first">
          <p className="header__subtitle">Популярные валюты:</p>
          <div className="header__titles">
            <article className="header__currency">
              <Typography>Bitcoin</Typography>
              <p>Цена</p>
            </article>
            <article className="header__currency">
              <Typography>Ethereum</Typography>
              <p>Цена</p>
            </article>
            <article className="header__currency">
              <Typography>Tether</Typography>
              <p>Цена</p>
            </article>
          </div>
        </div>
        <div className="header__section header__section-second">
          <IconButton>
            <WorkOutlineIcon />
          </IconButton>
          <div>
            <Typography>Итого:</Typography>
            <p>Цена USD</p>
          </div>
        </div>
      </div>
    </AppBar>
  );
};
