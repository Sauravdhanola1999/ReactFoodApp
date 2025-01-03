import React from "react";
import CardsRestaurents from "./CardsRestaurents";

const TopRestaurents = ({ data }) => {
  console.log(data);
  return (
    <div className="mx-auto w-[80vw] pt-7 h-[30vw]">
      <h2 className="font-extrabold text-2xl">Top restaurant chains in Delhi</h2>
      <div
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="flex overflow-scroll py-6"
      >
        {data &&
          data.map((item) => {
            return (
              <CardsRestaurents
                time={item.info.sla.slaString}
                area={item.info.areaName}
                name={item.info.name}
                rating={item.info.avgRating}
                img={item.info.cloudinaryImageId}
                cuisines={item.info.cuisines}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TopRestaurents;
