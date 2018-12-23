import React from 'react';

const ImageList = ({ urlList }) => {
  const list = urlList.map(url => {
    return (
      <li key={ url } className="item">
        <img src={ url } alt="" className="image"/>
      </li>
    );
  });
  return <ul className="list">{ list }</ul>;
};

export default ImageList;