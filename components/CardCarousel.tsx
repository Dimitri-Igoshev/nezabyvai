"use client";

import { cn } from "@heroui/theme";
import { FunctionComponent } from "react";
//@ts-ignore
import Slider from "react-slick";

import { RunningLineCard } from "./running-line-card";

interface CardCarouselProps {
  data: any[];
  type?: string;
}

const CardCarousel: FunctionComponent<CardCarouselProps> = ({
  data,
  type = "",
}) => {
  // хз
  const items =
    type !== "mobile"
      ? [...data]
      : [
          data[0],
          data[1],
          data[2],
          { _id: "012" },
          data[3],
          data[4],
          data[5],
          { _id: "345" },
          data[6],
          data[7],
          data[8],
          { _id: "678" },
        ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: type === "intresting" ? 4 : 2,
    slidesPerRow: type === "intresting" ? 1 : 2,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div
      className={cn("w-full relative mb-10", {
        ["h-[800px]"]: type === "news",
      })}
    >
      <Slider {...settings} className="">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn("w-full flex justify-center items-center relative")}
          >
            <div className="absolute top-0 right-0 left-0 bottom-0 p-2">
              <RunningLineCard />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
