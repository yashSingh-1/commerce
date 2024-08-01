"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const CarouselItems = ({img, img1, img2, img3, className }: {img: string, img1: string, img2: string, img3: string,  className?: string}) => {
  return (
    <div className="flex mt-4 p-4 w-fit justify-center m-auto ">
        <Carousel opts={{
            loop: true,
        }} plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]} >
          <CarouselContent className={ `${className} "-ml-2"`}>
            <CarouselItem className="flex justify-center   md:basis-1/3 pl-2">
                <img src={img} alt="" className="rounded-sm shadow-lg "/>
            </CarouselItem>
            <CarouselItem className="flex justify-center   md:basis-1/3 pl-2">
            <img src={img1} alt="" className="rounded-sm shadow-lg "/>
            </CarouselItem>
            <CarouselItem className="flex justify-center   md:basis-1/3 pl-2">
            <img src={img2} alt="" className="rounded-sm shadow-lg"/>
            </CarouselItem>
            <CarouselItem className="flex justify-center   md:basis-1/3 pl-2">
            <img src={img3} alt="" className="rounded-sm shadow-lg"/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="pl-0" />
          <CarouselNext className="pl-0"/>
        </Carousel>
      </div>
  )
}

export default CarouselItems