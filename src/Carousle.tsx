import Carousel from "react-bootstrap/Carousel";
import { Gyph } from "./types";
import { useState } from "react";

interface Props {
  ghyps: Gyph[];
  selectedGhyps: Gyph | null;
}

function CardsCarousel({ ghyps, selectedGhyps }: Props) {
  const [currentIndex, setCurrenIndex] = useState(() => {
    return ghyps.findIndex((ghyp) => ghyp.id === selectedGhyps?.id);
  });

  const handleIndexChange = (newIndex: number) => {
    setCurrenIndex(newIndex);
  };

  return (
    <Carousel activeIndex={currentIndex} onSelect={handleIndexChange}>
      {ghyps.map(({ id, images, title }) => (
        <Carousel.Item key={id}>
          <img src={images.original.url} alt={title} />
          <Carousel.Caption>
            <h3>{title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CardsCarousel;
