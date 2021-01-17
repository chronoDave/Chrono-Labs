import React, { useCallback } from 'react';
import { cx } from '@emotion/css';

// Core
import { ButtonBase } from '../ButtonBase';
import { ButtonIcon } from '../ButtonIcon';
import { CarouselBar } from '../CarouselBar';

// Hooks
import { useInterval } from '../../hooks';

// Styles
import classes from './Carousel.styles';

type Image = {
  src: string,
  alt: string,
  key: string
};

export interface CarouselProps {
  width: number,
  height: number,
  images: Image[],
  delay?: number,
  className?: string,
  displayBars?: boolean,
  index: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>
}

const Carousel = (props: CarouselProps) => {
  const {
    images,
    width,
    delay = 10000,
    height,
    className,
    setIndex,
    index,
    displayBars = false
  } = props;

  const next = useCallback(() => {
    setIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      return newIndex > images.length - 1 ?
        0 :
        newIndex;
    });
  }, [images.length, setIndex]);

  const previous = () => setIndex(prevIndex => {
    const newIndex = prevIndex - 1;

    if (newIndex < 0) return images.length - 1;
    return newIndex;
  });

  const [create] = useInterval(next, delay);

  return (
    <div
      className={cx(classes.carousel, className)}
      style={{ width, height }}
    >
      {images.map((image, i) => (
        <img
          key={image.key}
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          className={classes.image}
          style={{
            left: (index - i) * width
          }}
        />
      ))}
      <ButtonIcon
        onClick={() => {
          previous();
          create();
        }}
        icon="chevronLeft"
        size="large"
        className={cx(classes.navigationIcon, classes.previous)}
      />
      <ButtonIcon
        onClick={() => {
          next();
          create();
        }}
        icon="chevronRight"
        size="large"
        className={cx(classes.navigationIcon, classes.next)}
      />
      {displayBars && (
        <CarouselBar
          className={classes.bars}
          keys={images.map(({ key }) => key)}
          active={images[index].key}
          onClick={(_, newIndex: number) => {
            setIndex(newIndex);
            create();
          }}
        />
      )}
      <div className={classes.bars}>
        {images.map(({ key }, i) => (
          <ButtonBase
            key={key}
            className={cx(classes.bar, { [classes.barActive]: i === index })}
            onClick={() => {
              setIndex(i);
              create();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
