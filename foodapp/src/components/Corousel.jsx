import React, { useState } from "react";
import { useEffect } from "react";
import { API, Cloudinary_URL } from "../utils/Constants";

const Corousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setData(data.data.cards[0].card.card.imageGridCards.info);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
        <h1 className="font-extrabold text-2xl">What's On Your Mind?</h1>
        <div
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="flex overflow-scroll h-[15vw] w-[80vw]"
    >
      {data &&
        data.map((item) => {
          return <img src={Cloudinary_URL + item.imageId} />;
        })}
    </div>
    </div>
  );
};

export default Corousel;
