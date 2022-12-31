import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    key: 0,
    to: '/filter?t=0',
    icon: laptopIcon,
    title: 'Chăm sóc da mặt',
  },
  {
    key: 1,
    to: '/filter?t=1',
    icon: ssdIcon,
    title: 'Chăm sóc cơ thể',
  },
  {
    key: 2,
    to: '/filter?t=2',
    icon: ramIcon,
    title: 'Chăm sóc tóc',
  },
  {
    key: 3,
    to: '/filter?t=3',
    icon: hdtvIcon,
    title: 'Trang điểm',
  },
  {
    key: 4,
    to: '/filter?t=4',
    icon: displayIcon,
    title: 'Nước hoa',
  },
  {
    key: 5,
    to: '/filter?t=5',
    icon: mobileIcon,
    title: 'Dụng cụ trang điểm',
  },
];

function MenuFilter(props) {
  const { onShow } = props;

  function renderFilterMenu(list) {
    return (
      list &&
      list.map((item, index) => {
        return (
          <div
            onMouseEnter={() => onShow(item.key)}
            key={index}
            className="w-500 p-lr-8 p-tb-4  Filter-menu-item">
            <Link to={item.to} className="d-flex align-i-center">
              <img src={item.icon} className="icon m-lr-8" />
              <span className="title">{item.title}</span>
            </Link>
          </div>
        );
      })
    );
  }

  return (
    <div className="bor-rad-8 Filter-menu p-tb-4">{renderFilterMenu(menu)}</div>
  );
}

MenuFilter.propTypes = {
  onShow: PropTypes.func,
};

export default MenuFilter;
