import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './style.scss';
const cx = classNames.bind(style);

const FilmList = ({film, activeTab}) => {
  const allFilmList = film.get('allFilmList');
  const popularityFilmList = film.get('popularityFilmList');

  const filmList = activeTab === 'all' ? allFilmList : popularityFilmList;
  const items = filmList.get('items');

  if (!items) {
    return null;
  } else if (items && items.size === 0) {
    return (
      <div className={cx('no-items')}>
        <div className={cx('no-items-icon')} />
        <p>暂无记录</p>
      </div>
    );
  }

  return (
    <ul className="list list-border">
      {items.map((item, index, list) => (
        <li key={item.get('id')} className="list-item">
          <a href={item.get('link')} target="_blank">
            {item.get('name')}
          </a>
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  film: PropTypes.object,
  activeTab: PropTypes.string,
};

export default FilmList;