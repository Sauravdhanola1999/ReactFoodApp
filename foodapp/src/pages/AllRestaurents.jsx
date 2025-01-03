import React from "react";
import Corousel from "../components/Corousel";
import { useEffect, useState } from "react";
import { API } from "../utils/Constants";
import TopRestaurents from "../components/TopRestaurents";

const AllRestaurents = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        console.log(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="pt-10 flex flex-col justify-center items-center">
      <div>
        <Corousel
          data={
            apiData ? apiData.data.cards[0].card.card.imageGridCards.info : []
          }
        />
      </div>
      <div className="pb-48">
        <TopRestaurents
          className="mx-auto"
          data={
            apiData
              ? apiData.data.cards[1].card.card.gridElements.infoWithStyle
                  .restaurants
              : []
          }
        />
          <hr style={{ border: "1px solid #ddd", marginTop: "50px" }} />
      </div>
    </div>
  );
};

export default AllRestaurents;
