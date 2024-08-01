import React from "react";
import CarouselItems from "./CarouselItems";
import NavBar from "./NavBar";
import Questions from "./Questions";
import HoverInfo from "./hover-info";
import { Button } from "./ui/button";
import { urlFor } from "@/constants/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { FetchingGallery } from "./FetchingDate";
import Footer from "./Footer";

interface dataType {
  productName: string;
  productImage: SanityImageSource;
  shortNote: string;
  originalPrice: string;

  discountedPrice: string;

  paymentPage: string;
}

const SingleProduct = async ({
  productName,
  productImage,
  shortNote,
  originalPrice,
  discountedPrice,
  paymentPage,
}: dataType) => {
  const gallery = await FetchingGallery();
  const photos = gallery[0];
  return (
    <div>
      <div className="flex flex-col h-[100vh]">
        <NavBar />
        <div className="flex flex-col md:flex md:flex-row justify-center my-auto md:mx-[20vh]">
          <div className=" flex  mb-2 justify-center max-w-fit md:max-w-[400px] mt-1 md:mt-[80px] md:mb-[40px]">
            <img
              src={urlFor(productImage).url()}
              alt=""
              className="rounded-md h-fit "
            />
          </div>
          <div className="flex flex-col justify-center md:pt-[100px] md:mb-[40px]">
            <p className="text-4xl font-mono mx-5 md:ml-6 ">{productName}</p>
            <p className="text-lg font-mono px-5 md:px-0 mx-auto md:ml-6 max-w-[500px]">
              {shortNote}
            </p>
            <div
              className="grid grid-cols-3 mx-2 md:ml-6 mt-4 cursor-pointer 
            border-2 border-black-1 p-2 rounded-md justify-items-center"
            >
              <HoverInfo
                trigger="100 % Cotton"
                content="Sourced from Gujrat, India"
              />
              <HoverInfo trigger="Color: Black" content="Dark, real Dark" />
              <HoverInfo
                trigger="Comfy like fluff"
                content="Cuz its Made with love"
              />
            </div>
            <div className="grid grid-cols-2 mx-2 md:ml-6 justify-items-center mt-3">
              <span className="line-through font-semibold text-2xl">
                {originalPrice}
              </span>
              <span className="font-semibold text-2xl">{discountedPrice}</span>
            </div>
            <div className="grid grid-cols-2 gap-6 mx-2 md:ml-6 mt-5">
              <a href="#designs" className="w-full">
              <Button className="w-full">Check designs</Button>
              </a>
              <Link href={paymentPage} className="w-full">
                <Button className="w-full text-white bg-blue-600">Buy Now</Button>
              </Link>
            </div>
            <div className="md:ml-6 mx-2 font-mono mt-5 p-2 text-center flex flex-col border-2 md:border-1 md:border-white border-black-1 rounded-md">
              <span>Size available on: SM, MD, L, XL</span>
              <span>Quality: Assured with competence that beats brands!</span>
            </div>
            
          </div>
        </div>
        <div className="max-w-[350px] md:max-w-[600px] mx-auto mt-auto" id="designs">
              <CarouselItems img={urlFor(photos.productImage3.asset).url()}
                img1={urlFor(photos.productImage.asset).url()}
                img2={urlFor(photos.productImage2.asset).url()}
                img3={urlFor(photos.productImage4.asset).url()}
              />
            </div>
            <div className="max-w-[350px] md:max-w-[500px] m-auto pb-5">
              <Questions />
            </div>
      </div>
    </div>
  );
};

export default SingleProduct;
