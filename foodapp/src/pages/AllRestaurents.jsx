import React from "react";
import Corousel from "../components/Corousel";
import { useEffect, useState } from "react";
import { API } from "../utils/Constants";
import TopRestaurents from "../components/TopRestaurents";

const AllRestaurents = () => {
  const [data, setData] = useState([]);
  const[data2, setData2] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setData(data.data.cards[0].card.card.imageGridCards.info);
        setData2(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="pt-10 flex justify-center items-center">
      <div>
        <Corousel data={data} />
        <hr style={{ border: "1px solid #ddd", marginTop: "50px" }} />
      </div>
      <div>
        <TopRestaurents data={data2} />
      </div>
    </div>
  );
};

export default AllRestaurents;
