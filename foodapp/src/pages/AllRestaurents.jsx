import React from "react";
import Corousel from "../components/Corousel";
import { useEffect, useState } from "react";
import { API } from "../utils/Constants";
import TopRestaurents from "../components/TopRestaurents";

const AllRestaurents = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setData(data.data.cards[0].card.card.imageGridCards.info);
        setData2(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="pt-10 flex flex-col justify-center items-center">
      <Corousel data={data} />

     

      <TopRestaurents data={data2} />
    </div>
  );
};

export default AllRestaurents;
