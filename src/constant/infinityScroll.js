import React, { useState } from 'react';
import styled from 'styled-components';

const infinityScroll = ({ photos }) => {
  const [size, setSize] = useState(10);

  const handleScroll = () => {
    document.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;
      if (scrollPercentage > 0.9) {
        let newSize = size + 10;
        setSize(newSize);
      }
    });
  };

  handleScroll();
  return (
    <>
      <div className="container">
        <h1>Infinite Scroll</h1>
        <Album photos={photos} size={size} />
      </div>
    </>
  );
};

export default infinityScroll;

function Album({ photos, size }) {
  let items = photos.slice(0, size);

  return (
    <div className="album">
      {items.map((itm) => (
        <Photo url={itm.url} />
      ))}
    </div>
  );
}

function Photo({ url }) {
  return (
    <>
      <img src={url} alt="img" />;
    </>
  );
}
