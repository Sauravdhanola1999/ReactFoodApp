import React from "react";

import { Cloudinary_URL } from "../utils/Constants";

const Corousel = ({ data }) => {
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
      <hr style={{ border: "1px solid #ddd", marginTop: "50px" }} />
    </div>
  );
};

export default Corousel;
