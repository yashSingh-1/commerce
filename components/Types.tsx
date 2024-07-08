import { typesOfProducts } from "@/constants";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import CarouselItems from "./CarouselItems";
import { FetchingGallery } from "./FetchingDate";
import { urlFor } from "@/constants/client";



const Types = async () => {
  const gallery = await FetchingGallery();
  const photos = gallery[0];
  return (
    <div className="flex flex-col mt-2 p-4 w-full">
      <div className="font-semibold text-2xl ">
        Social Commentary on Steroids
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 justify-items-center ">
        {typesOfProducts.map((item) => (
          <div
            key={item.label}
            className=" text-white p-2 rounded-md px-4 md:px-4 text-center bg-gray-800 "
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="min-h-[120px] max-h-fit">
      <CarouselItems img={urlFor(photos.productImage.asset).url()}/>
      </div>
    </div>
  );
};

export default Types;
